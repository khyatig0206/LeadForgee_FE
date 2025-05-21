import { useEffect } from 'react';
import { useLocation } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Sidebar from '@/components/admin/Sidebar';
import axios from 'axios';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { isAdmin } from "@/utils/auth";



const AdminDashboard = () => {

   const [, navigate] = useLocation();

  const isAuthorized = isAdmin();

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/');
    }
  }, [isAuthorized, navigate]);

  const { data: contacts = [] } = useQuery({
    queryKey: ['/api/contacts'],
    queryFn: async () => {
    const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/admin/contacts`);
    return res.data.data;
}
  });

  const { data: testimonials = [] } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: async () => {
    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/testimonial`);
    if (!res.ok) throw new Error('Failed to fetch testimonials');
    return res.json();
  }
  });

  const unreadContacts = contacts.filter((contact: any) => !contact.viewed).length;
  const activeTestimonials = testimonials.filter((t: any) => t.active).length;

  if (!isAuthorized) return null; // prevent render while redirecting


  return (
    <HelmetProvider>
  <Helmet>
        <title>Admin Dashboard - Leadforgee</title>
      </Helmet>
    
      <div className="min-h-screen bg-gray-100">
        <Sidebar />
        
        <div className="md:pl-64 flex flex-col flex-1">
          <main className="flex-1 py-6 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="mt-1 text-sm text-gray-500">
                  Welcome to your Leadforgee admin dashboard.
                </p>
              </div>
              
              {/* Dashboard Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Unread Messages Card */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Unread Messages</CardTitle>
                    <CardDescription>Contact form submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-4xl font-bold text-primary">
                        {unreadContacts}
                      </div>
                      <div className="ml-4 text-sm text-gray-500">
                        out of {contacts.length} total messages
                      </div>
                    </div>
                    {unreadContacts > 0 && (
                      <div className="mt-4">
                        <a 
                          href="/admin/contacts" 
                          className="text-primary hover:text-accent text-sm font-medium"
                        >
                          View unread messages →
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
                
                {/* Testimonials Card */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Testimonials</CardTitle>
                    <CardDescription>Current testimonials status</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="text-4xl font-bold text-primary">
                        {activeTestimonials}
                      </div>
                      <div className="ml-4 text-sm text-gray-500">
                        active testimonials
                      </div>
                    </div>
                    <div className="mt-4">
                      <a 
                        href="/admin/testimonials" 
                        className="text-primary hover:text-accent text-sm font-medium"
                      >
                        Manage testimonials →
                      </a>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Quick Actions Card */}
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                    <CardDescription>Common tasks</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-2">
                      <a 
                        href="/admin/testimonials" 
                        className="text-primary hover:text-accent text-sm font-medium"
                      >
                        Add new testimonial →
                      </a>
                      <a 
                        href="/admin/contacts" 
                        className="text-primary hover:text-accent text-sm font-medium"
                      >
                        View all contacts →
                      </a>
                      <a 
                        href="/" 
                        className="text-primary hover:text-accent text-sm font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View website →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                  <CardDescription>Your latest dashboard activity</CardDescription>
                </CardHeader>
                <CardContent>
                  {contacts.length > 0 ? (
                    <div className="space-y-4">
                      <h3 className="text-sm font-medium text-gray-500">Latest Contacts</h3>
                      <ul className="space-y-3">
                        {contacts.slice(0, 5).map((contact: any) => (
                          <li key={contact.id} className="flex justify-between items-center">
                            <div>
                              <p className="text-sm font-medium text-gray-900">{contact.name}</p>
                              <p className="text-xs text-gray-500">{contact.subject}</p>
                            </div>
                            <span className="text-xs text-gray-500">
                              {new Date(contact.createdAt).toLocaleDateString()}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">No recent activity to display.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default AdminDashboard;
