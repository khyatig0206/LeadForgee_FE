import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Testimonial } from '@/lib/types/testimonialSchema.ts';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { getAuthHeader } from '@/lib/auth';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Extended schema for form validation
const testimonialFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  position: z.string().min(2, { message: 'Position must be at least 2 characters' }),
  company: z.string().min(2, { message: 'Company must be at least 2 characters' }),
  content: z.string().min(10, { message: 'Testimonial content must be at least 10 characters' }),
  rating: z.coerce.number().min(1).max(5),
  active: z.boolean().default(true),
  image: z.instanceof(FileList).optional().refine(
    (files) => !files || files.length === 0 || Array.from(files).some(file => file.type.startsWith('image/')), 
    { message: 'Please upload an image file' }
  )
});

type TestimonialFormValues = z.infer<typeof testimonialFormSchema>;

interface TestimonialFormProps {
  testimonial?: Testimonial;
  onSuccess?: () => void;
}

const TestimonialForm = ({ testimonial, onSuccess }: TestimonialFormProps) => {
const [imagePreview, setImagePreview] = useState<string | null>(
  testimonial?.imageUrl ? `${import.meta.env.VITE_API_BASE_URL}${testimonial.imageUrl}` : null
);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const queryClient = useQueryClient();
  const isEditing = !!testimonial;

  const form = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialFormSchema),
    defaultValues: {
      name: testimonial?.name || '',
      position: testimonial?.position || '',
      company: testimonial?.company || '',
      content: testimonial?.content || '',
      rating: testimonial?.rating || 5,
      active: testimonial?.active ?? true,
      image: undefined
    }
  });

  // Watch for file changes to show preview
  const watchedFiles = form.watch('image');
  
  useEffect(() => {
    if (watchedFiles && watchedFiles.length > 0) {
      const file = watchedFiles[0];
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  }, [watchedFiles]);

  // Create or update testimonial mutation
  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const url = isEditing 
        ? `${import.meta.env.VITE_API_BASE_URL}/api/testimonial/${testimonial.id}`
        : `${import.meta.env.VITE_API_BASE_URL}/api/testimonial`;
        
      const method = isEditing ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        body: data
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to save testimonial');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
       toast.success(`Testimonial ${isEditing ? 'updated' : 'created'} successfully`);

      if (onSuccess) onSuccess();
      if (!isEditing) form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
       toast.error(`Failed to ${isEditing ? 'update' : 'create'} testimonial: ${error.message}`);
      setIsSubmitting(false);
    }
  });

  const onSubmit = (values: TestimonialFormValues) => {
    setIsSubmitting(true);
    
    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('position', values.position);
    formData.append('company', values.company);
    formData.append('content', values.content);
    formData.append('rating', values.rating.toString());
    formData.append('active', values.active.toString());
    
    // Only append image if there's a new one
    if (values.image && values.image.length > 0) {
      formData.append('image', values.image[0]);
    }
    
    mutation.mutate(formData);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit Testimonial' : 'Add New Testimonial'}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Client Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="position"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Position</FormLabel>
                    <FormControl>
                      <Input placeholder="Marketing Director" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Inc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Testimonial Content</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Share the client's experience..."
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rating</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(parseInt(value))}
                      value={field.value.toString()}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a rating" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">1 Star</SelectItem>
                        <SelectItem value="2">2 Stars</SelectItem>
                        <SelectItem value="3">3 Stars</SelectItem>
                        <SelectItem value="4">4 Stars</SelectItem>
                        <SelectItem value="5">5 Stars</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="active"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between p-4 border rounded-md">
                    <div className="space-y-0.5">
                      <FormLabel>Active Status</FormLabel>
                      <FormDescription>
                        Show this testimonial on the website
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="image"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem>
                  <FormLabel>Profile Image</FormLabel>
                  <FormControl>
                    <div className="space-y-4">
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          onChange(e.target.files);
                        }}
                        {...fieldProps}
                      />
                      
                      {imagePreview && (
                        <div className="mt-2">
                          <div className="text-sm font-medium mb-2">Preview:</div>
                          <img 
                            src={imagePreview} 
                            alt="Profile preview" 
                            className="w-24 h-24 rounded-full object-cover border"
                          />
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription>
                    {isEditing && !form.getValues('image')?.length
                      ? "Upload a new image only if you want to change the existing one."
                      : "Upload a client profile image. Recommended size: 200x200px."}
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex justify-end space-x-2">
              {onSuccess && (
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={onSuccess}
                >
                  Cancel
                </Button>
              )}
              <Button 
                type="submit" 
                className="gradient-bg"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-2"></i>
                    {isEditing ? 'Updating...' : 'Saving...'}
                  </>
                ) : isEditing ? 'Update Testimonial' : 'Add Testimonial'}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TestimonialForm;
