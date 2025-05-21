import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormValues } from '@/lib/validations/contactFormSchema';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import axios from 'axios';


const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: ''
    }
  });

const mutation = useMutation({
  mutationFn: async (data: ContactFormValues) => {
    const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/admin/contacts`, data);
    return response.data;
  },
  onSuccess: () => {
    toast.success("Message Sent! We'll get back to you as soon as possible.");
    form.reset();
    setIsSubmitting(false);
  },
  onError: (error: any) => {
    toast.error(
      error?.response?.data?.message ||
      error.message ||
      "Failed to send message. Please try again later."
    );
    setIsSubmitting(false);
  }
});



  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have questions or ready to discuss your lead generation needs? Reach out to our team today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="w-full px-4 py-2 rounded-lg border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full px-4 py-2 rounded-lg border"
                            {...field}
                          />
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
                      <FormLabel>Company Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your company"
                          className="w-full px-4 py-2 rounded-lg border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="How can we help?"
                          className="w-full px-4 py-2 rounded-lg border"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your lead generation needs..."
                          className="w-full px-4 py-2 rounded-lg border"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="text-right">
                  <Button
                    type="submit"
                    className="gradient-bg text-white py-2 px-8 rounded-full font-medium hover:shadow-lg transition-shadow"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <FontAwesomeIcon icon={faSpinner} spin className="mr-2" />
                        Sending...
                      </>
                    ) : "Send Message"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gray-50 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p className="text-gray-600">Navab Gate, Rampur, India</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone Number</h4>
                    <p className="text-gray-600">+91 9621005823</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Address</h4>
                    <p className="text-gray-600">info@leadforgee.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-3 text-white mr-4">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div>
                  <h4 className="font-semibold text-lg">Office Hours</h4>
                  <p className="text-gray-600">Open 24/7 – All days of the week</p>
                </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/prakhyat-gupta-b1622a320" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://x.com/Leadforgee" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors" aria-label="X">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                  role="img"
                  aria-label="X social media icon"
                >
                  <path
                    d="M18.901 1.196h3.428L14.475 9.77 22.868 22.8h-7.387L9.96 14.547 3.632 22.8H.204l8.694-11.666L0 1.196h7.525L12.56 7.688l6.341-6.492Zm-2.863 19.543h2.38L6.877 3.42H4.376l11.662 17.319Z"
                  />
                </svg>
              </a>
                
                <a href="https://www.instagram.com/leadforgee/" target="_blank" rel="noopener noreferrer" className="bg-primary text-white p-3 rounded-full hover:bg-accent transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
