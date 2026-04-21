"use client";
"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Mail, MapPin, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { ParticleBackground } from './ParticleBackground';
import { supabase } from '../lib/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'general',
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert the form data into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone || null,
            service: formData.service,
            message: formData.message,
          }
        ]);

      if (error) throw error;

      // Send email notification (call Supabase Edge Function)
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
        
        if (supabaseUrl && supabaseAnonKey) {
          await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${supabaseAnonKey}`,
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              subject: `${formData.service} inquiry`,
              message: formData.message,
            }),
          });
        }
      } catch (emailError) {
        console.log('Email notification failed:', emailError);
        // Don't fail the submission if email fails
      }

      // Show success message
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '', service: 'general' });
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      
      // Check if it's a table not found error
      if (error?.code === 'PGRST205' || error?.message?.includes('table')) {
        setErrorMessage('Database setup required. Please run the SQL commands from SUPABASE_SETUP.md to create the contacts table.');
      } else {
        setErrorMessage('Failed to submit form. Please try again or contact us directly at xavira.group@gmail.com');
      }
      
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        setErrorMessage('');
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-32 px-6 pb-20">
      <ParticleBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
        >
          <h1 className="mb-4 text-white">Get In Touch</h1>
          <p className="text-xl text-gray-400">Let's build the future together</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
          >
            <GlassCard delay={0}>
              <div className="p-8 bg-gradient-to-br from-black/10 to-black/5">
                <h2 className="mb-6 text-gray-900">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Phone (Optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-gray-900 placeholder-gray-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Service Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-gray-900"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="ai-systems">AI Systems</option>
                      <option value="web3">Web 3.0</option>
                      <option value="backend">Backend Scalability</option>
                      <option value="design">Design Services</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="innovation">Innovation Labs</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg focus:border-black focus:outline-none text-gray-900 placeholder-gray-500 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black rounded-lg hover:shadow-[0_0_40px_rgba(0,0,0,0.25)] transition-all text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </GlassCard>
          </motion.div>

          {/* Contact Information */}
          <motion.div
          >
            <div className="space-y-6">
              <GlassCard delay={0}>
                <div className="p-8">
                  <h3 className="mb-6 text-gray-900">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black/5 border border-gray-200 rounded-lg">
                        <Mail className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-gray-700 mb-1">Email</p>
                        <a
                          href="mailto:xavira.group@gmail.com"
                          className="text-gray-900 hover:text-gray-700 transition-colors block mb-1"
                        >
                          xavira.group@gmail.com
                        </a>
                        <p className="text-sm text-gray-400">
                          CEO & Founder:{' '}
                          <a
                            href="mailto:vishnuvardhanburri19@gmail.com"
                            className="text-gray-400 hover:text-gray-700 transition-colors"
                          >
                            vishnuvardhanburri19@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black/5 border border-gray-200 rounded-lg">
                        <MapPin className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-gray-700 mb-1">Location</p>
                        <p className="text-gray-900">Global Operations</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-black/5 border border-gray-200 rounded-lg">
                        <Phone className="w-6 h-6 text-gray-700" />
                      </div>
                      <div>
                        <p className="text-gray-700 mb-1">Availability</p>
                        <p className="text-gray-900">24/7 Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.2}>
                <div className="p-8">
                  <h3 className="mb-4 text-gray-900">Office Hours</h3>
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-gray-700">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-gray-700">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-700">Closed</span>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.4}>
                <div className="p-8 bg-gradient-to-br from-black/10 to-black/5">
                  <h3 className="mb-4 text-gray-900">Response Time</h3>
                  <p className="text-gray-500 mb-4">
                    We typically respond to inquiries within 24 hours. For urgent matters, please indicate "URGENT" in your message subject.
                  </p>
                  <div className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-gray-700" />
                    <span>Fast & Professional Support</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
          >
            <div
              className="backdrop-blur-xl bg-gradient-to-r from-black/40 to-black/20 rounded-2xl border border-gray-200 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-center gap-4">
                <CheckCircle className="w-8 h-8 text-gray-700" />
                <div>
                  <h3 className="text-gray-900">Message Sent!</h3>
                  <p className="text-gray-500">We'll get back to you soon.</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {showError && (
          <motion.div
            exit={{ y: -100, opacity: 0 }}
            className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50 max-w-2xl mx-4"
          >
            <div
              className="backdrop-blur-xl bg-gradient-to-r from-black/40 to-black/20 rounded-2xl border border-gray-200 p-6 shadow-[0_0_40px_rgba(0,0,0,0.25)]"
            >
              <div className="flex items-start gap-4">
                <AlertCircle className="w-8 h-8 text-gray-700 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-2">Submission Failed</h3>
                  <p className="text-gray-500 text-sm mb-3">
                    {errorMessage || 'Please try again or email us directly.'}
                  </p>
                  {errorMessage.includes('Database setup') && (
                    <div className="bg-black/30 rounded-lg p-3 text-xs text-gray-300 mt-2">
                      <p className="mb-2">Quick Fix:</p>
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Open your Supabase dashboard</li>
                        <li>Go to SQL Editor</li>
                        <li>Run the SQL from SUPABASE_SETUP.md</li>
                      </ol>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
