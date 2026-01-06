import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase, MapPin, Clock, DollarSign, Send, Upload, X, Check,
  Code, Shield, Palette, Cpu, Server, Users, TrendingUp, Zap
} from 'lucide-react';
import { GlassCard } from './GlassCard';
import { useIsMobile } from '../hooks/useIsMobile';
import { supabase } from '../lib/supabase';
import { toast } from 'sonner';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function Careers() {
  const isMobile = useIsMobile();
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeDivision, setActiveDivision] = useState<string>('tech');

  // Company divisions with their jobs
  const divisions = [
    {
      id: 'tech',
      name: 'Technology Division',
      icon: <Code className="w-6 h-6" />,
      color: 'from-gray-100/40 to-gray-50/40',
      borderColor: 'border-gray-200',
      jobs: [
        {
          id: 1,
          title: 'Senior Full Stack Developer',
          department: 'Engineering',
          division: 'Technology',
          location: 'Remote / Hybrid',
          type: 'Full-time',
          experience: '3-5 years',
          salary: '$80,000 - $120,000',
          description: 'Lead development of cutting-edge web applications using React, Node.js, and cloud technologies.',
          responsibilities: [
            'Design and implement scalable web applications',
            'Lead technical architecture decisions',
            'Mentor junior developers',
            'Collaborate with cross-functional teams',
            'Optimize application performance',
          ],
          requirements: [
            '3+ years of full-stack development experience',
            'Expert in React, Node.js, TypeScript',
            'Experience with cloud platforms (AWS/Azure/GCP)',
            'Strong understanding of database design',
            'Excellent problem-solving skills',
          ],
          benefits: [
            'Competitive salary and equity',
            'Health, dental, and vision insurance',
            'Flexible work schedule',
            'Professional development budget',
            'Remote work options',
          ],
        },
        {
          id: 2,
          title: 'AI/ML Engineer',
          department: 'AI Research',
          division: 'Technology',
          location: 'Remote',
          type: 'Full-time',
          experience: '2-4 years',
          salary: '$90,000 - $140,000',
          description: 'Build and deploy machine learning models for enterprise clients.',
          responsibilities: [
            'Develop and train ML models',
            'Implement AI solutions for clients',
            'Research latest AI technologies',
            'Optimize model performance',
            'Collaborate with data science team',
          ],
          requirements: [
            '2+ years in AI/ML development',
            'Proficiency in Python, TensorFlow, PyTorch',
            'Experience with NLP and computer vision',
            'Strong mathematics background',
            'Published research is a plus',
          ],
          benefits: [
            'Cutting-edge AI projects',
            'Research budget and conference attendance',
            'Latest hardware and tools',
            'Collaborative research environment',
            'Patent opportunities',
          ],
        },
        {
          id: 3,
          title: 'Frontend Developer',
          department: 'Engineering',
          division: 'Technology',
          location: 'Hybrid',
          type: 'Full-time',
          experience: '1-3 years',
          salary: '$60,000 - $90,000',
          description: 'Create beautiful, responsive user interfaces with modern frameworks.',
          responsibilities: [
            'Build responsive web applications',
            'Implement UI/UX designs',
            'Optimize frontend performance',
            'Write clean, maintainable code',
            'Participate in code reviews',
          ],
          requirements: [
            '1+ years frontend development',
            'Expert in React and TypeScript',
            'Strong CSS and animation skills',
            'Understanding of accessibility',
            'Portfolio of projects required',
          ],
          benefits: [
            'Work on high-impact projects',
            'Modern tech stack',
            'Mentorship program',
            'Flexible hours',
            'Growth opportunities',
          ],
        },
      ],
    },
    {
      id: 'security',
      name: 'Cybersecurity Division',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-gray-100/40 to-gray-50/40',
      borderColor: 'border-gray-200',
      jobs: [
        {
          id: 4,
          title: 'Cybersecurity Analyst',
          department: 'Security Operations',
          division: 'Cybersecurity',
          location: 'Remote',
          type: 'Full-time',
          experience: '2-4 years',
          salary: '$75,000 - $110,000',
          description: 'Monitor and protect enterprise systems from security threats.',
          responsibilities: [
            'Monitor security systems and alerts',
            'Conduct security assessments',
            'Respond to security incidents',
            'Implement security best practices',
            'Create security documentation',
          ],
          requirements: [
            '2+ years in cybersecurity',
            'Knowledge of security frameworks (NIST, ISO)',
            'Experience with SIEM tools',
            'Certifications (CISSP, CEH) preferred',
            'Strong analytical skills',
          ],
          benefits: [
            'Certification reimbursement',
            'Security conferences',
            'Latest security tools',
            'Continuous training',
            'Competitive compensation',
          ],
        },
        {
          id: 5,
          title: 'Penetration Tester',
          department: 'Security Testing',
          division: 'Cybersecurity',
          location: 'Remote / Hybrid',
          type: 'Full-time',
          experience: '3-5 years',
          salary: '$85,000 - $130,000',
          description: 'Conduct ethical hacking and security assessments for clients.',
          responsibilities: [
            'Perform penetration testing',
            'Identify security vulnerabilities',
            'Write detailed security reports',
            'Provide remediation recommendations',
            'Stay updated on latest threats',
          ],
          requirements: [
            '3+ years pentesting experience',
            'Expertise in security tools (Metasploit, Burp Suite)',
            'Strong networking knowledge',
            'CEH, OSCP certification preferred',
            'Excellent communication skills',
          ],
          benefits: [
            'Cutting-edge security projects',
            'Bug bounty participation',
            'Training and certifications',
            'Flexible work environment',
            'Competitive salary',
          ],
        },
      ],
    },
    {
      id: 'design',
      name: 'Creative Design Division',
      icon: <Palette className="w-6 h-6" />,
      color: 'from-gray-100/40 to-gray-50/40',
      borderColor: 'border-gray-200',
      jobs: [
        {
          id: 6,
          title: 'Senior UI/UX Designer',
          department: 'Design',
          division: 'Creative Design',
          location: 'Hybrid',
          type: 'Full-time',
          experience: '3-5 years',
          salary: '$70,000 - $105,000',
          description: 'Lead design projects and create exceptional user experiences.',
          responsibilities: [
            'Design user interfaces and experiences',
            'Conduct user research and testing',
            'Create design systems',
            'Collaborate with development teams',
            'Present designs to stakeholders',
          ],
          requirements: [
            '3+ years UI/UX design experience',
            'Expert in Figma, Adobe XD',
            'Strong portfolio required',
            'Understanding of frontend development',
            'Excellent communication skills',
          ],
          benefits: [
            'Creative freedom',
            'Design tool subscriptions',
            'Conference attendance',
            'Portfolio-building projects',
            'Collaborative environment',
          ],
        },
        {
          id: 7,
          title: 'Brand Designer',
          department: 'Branding',
          division: 'Creative Design',
          location: 'Remote',
          type: 'Full-time',
          experience: '2-4 years',
          salary: '$65,000 - $95,000',
          description: 'Create compelling brand identities and visual systems.',
          responsibilities: [
            'Develop brand identities',
            'Design marketing materials',
            'Create brand guidelines',
            'Work with clients on branding',
            'Maintain brand consistency',
          ],
          requirements: [
            '2+ years brand design experience',
            'Strong typography and color skills',
            'Adobe Creative Suite mastery',
            'Branding portfolio required',
            'Client-facing experience',
          ],
          benefits: [
            'Diverse client projects',
            'Creative tools and software',
            'Professional development',
            'Flexible schedule',
            'Remote work options',
          ],
        },
      ],
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure Division',
      icon: <Server className="w-6 h-6" />,
      color: 'from-gray-100/40 to-gray-50/40',
      borderColor: 'border-gray-200',
      jobs: [
        {
          id: 8,
          title: 'DevOps Engineer',
          department: 'Infrastructure',
          division: 'Infrastructure',
          location: 'Remote',
          type: 'Full-time',
          experience: '2-4 years',
          salary: '$80,000 - $120,000',
          description: 'Build and maintain CI/CD pipelines and cloud infrastructure.',
          responsibilities: [
            'Design and implement CI/CD pipelines',
            'Manage cloud infrastructure',
            'Automate deployment processes',
            'Monitor system performance',
            'Ensure system reliability',
          ],
          requirements: [
            '2+ years DevOps experience',
            'Expertise in AWS/Azure/GCP',
            'Experience with Docker, Kubernetes',
            'Proficiency in scripting (Python, Bash)',
            'Strong problem-solving skills',
          ],
          benefits: [
            'Cloud certification support',
            'Latest DevOps tools',
            'Learning budget',
            'Remote-first culture',
            'Competitive compensation',
          ],
        },
      ],
    },
    {
      id: 'operations',
      name: 'Business Operations',
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-gray-100/40 to-gray-50/40',
      borderColor: 'border-gray-200',
      jobs: [
        {
          id: 9,
          title: 'Project Manager',
          department: 'Operations',
          division: 'Business Operations',
          location: 'Hybrid',
          type: 'Full-time',
          experience: '3-5 years',
          salary: '$70,000 - $100,000',
          description: 'Lead cross-functional teams and deliver projects successfully.',
          responsibilities: [
            'Manage project timelines and budgets',
            'Coordinate with teams and stakeholders',
            'Ensure project quality and delivery',
            'Identify and mitigate risks',
            'Report on project progress',
          ],
          requirements: [
            '3+ years project management',
            'PMP or Agile certification preferred',
            'Experience with Jira, Asana',
            'Strong leadership skills',
            'Excellent communication',
          ],
          benefits: [
            'Leadership opportunities',
            'Certification reimbursement',
            'Professional development',
            'Flexible work arrangement',
            'Growth path to senior roles',
          ],
        },
        {
          id: 10,
          title: 'Business Analyst',
          department: 'Strategy',
          division: 'Business Operations',
          location: 'Remote',
          type: 'Full-time',
          experience: '1-3 years',
          salary: '$60,000 - $85,000',
          description: 'Analyze business processes and provide strategic insights.',
          responsibilities: [
            'Analyze business requirements',
            'Create process documentation',
            'Develop business cases',
            'Support strategic initiatives',
            'Collaborate with stakeholders',
          ],
          requirements: [
            '1+ years business analysis',
            'Strong analytical skills',
            'Experience with data analysis tools',
            'Excellent Excel/SQL skills',
            'Clear communication abilities',
          ],
          benefits: [
            'Strategic project exposure',
            'Training and development',
            'Collaborative environment',
            'Career growth',
            'Remote flexibility',
          ],
        },
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setIsSubmitting(true);

    try {
      // Upload resume if provided
      let resumeUrl = null;
      if (formData.resume) {
        const fileExt = formData.resume.name.split('.').pop();
        const fileName = `${Date.now()}_${formData.fullName.replace(/\s/g, '_')}.${fileExt}`;
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('resumes')
          .upload(fileName, formData.resume);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('resumes')
          .getPublicUrl(fileName);
        
        resumeUrl = publicUrl;
      }

      // Insert application
      const { error: insertError } = await supabase
        .from('career_applications')
        .insert([
          {
            job_id: selectedJob.id,
            job_title: selectedJob.title,
            division: selectedJob.division,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            linkedin: formData.linkedin,
            portfolio: formData.portfolio,
            experience: formData.experience,
            cover_letter: formData.coverLetter,
            resume_url: resumeUrl,
          },
        ]);

      if (insertError) throw insertError;

      // Send confirmation email to applicant
      await fetch('/api/send-application-confirmation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: formData.email,
          name: formData.fullName,
          jobTitle: selectedJob.title,
          division: selectedJob.division,
        }),
      });

      // Send notification to company
      await fetch('/api/send-application-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobTitle: selectedJob.title,
          applicantName: formData.fullName,
          applicantEmail: formData.email,
          division: selectedJob.division,
        }),
      });

      toast.success('Application submitted successfully! We will contact you soon.');
      setSelectedJob(null);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedin: '',
        portfolio: '',
        experience: '',
        coverLetter: '',
        resume: null,
      });
    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast.error(error.message || 'Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen pt-24 md:pt-32 px-4 md:px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="inline-block px-4 py-2 bg-black/5 border border-gray-200 rounded-full text-sm text-gray-700 mb-6">
            CAREERS AT XAVIRA GROUP
          </span>
          <h1 className="mb-4 text-gray-900">Join Our Global Team</h1>
          <p className="text-lg text-gray-500 max-w-3xl">
            Explore opportunities across our specialized divisions. Build your career with innovative projects and talented teams.
          </p>
        </motion.div>

        {/* Division Tabs */}
        <Tabs value={activeDivision} onValueChange={(v) => { setActiveDivision(v); setSelectedJob(null); }} className="w-full">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 bg-transparent mb-8">
            {divisions.map((division) => {
              const isActive = division.id === activeDivision;
              return (
                <TabsTrigger
                  key={division.id}
                  value={division.id}
                  // Add touchAction for better mobile responsiveness, stronger black for active
                  style={{ touchAction: 'manipulation' }}
                  className={`relative backdrop-blur-xl rounded-xl border px-4 py-3 transition-all duration-150 overflow-hidden ${division.borderColor} ${isActive ? 'bg-black text-white shadow-2xl border-black/40' : 'bg-black/10 text-gray-500 hover:bg-black/20 active:bg-black/80'}`}
                >
                  <div className={`flex items-center gap-3 ${isActive ? 'text-white' : 'text-gray-400'} select-none`}>
                    <span className={`w-8 h-8 flex items-center justify-center rounded-full ${isActive ? 'bg-white text-black' : 'bg-black/10 text-gray-400'}`}>
                      {division.icon}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-sm hidden md:inline font-medium">{division.name}</span>
                      <span className="text-xs md:hidden font-medium">{division.name.split(' ')[0]}</span>
                    </div>
                  </div>
                  {/* Active underline */}
                  <span className={`absolute left-4 right-4 bottom-0 h-1 rounded-full transition-all ${isActive ? 'bg-white/95' : 'bg-transparent'}`} />
                </TabsTrigger>
              );
            })}
          </TabsList>

          {divisions.map((division) => (
            <TabsContent key={division.id} value={division.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                  {division.jobs.map((job, index) => {
                    const isSelected = selectedJob?.id === job.id;
                    const surfaceClass = isSelected
                      ? 'bg-white text-gray-900 border-gray-100 shadow-2xl rounded-3xl no-invert ring-1 ring-gray-100'
                      : division.id === activeDivision
                        ? 'bg-black/20 rounded-2xl'
                        : 'backdrop-blur-xl bg-black/30 rounded-2xl';
                    const hoverClass = isSelected ? '' : 'hover:bg-black/80 active:bg-black';

                    return (
                      <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.36 }}
                        whileHover={{ scale: 1.03 }}
                        onClick={() => setSelectedJob(job)}
                        className={`relative group ${surfaceClass} border ${division.borderColor} p-6 cursor-pointer ${hoverClass} transition-all duration-150`}
                      >
                        {isSelected && (
                          <div className="absolute -top-3 left-4 px-3 py-1 bg-black text-white rounded-full text-xs font-semibold shadow-sm">HIRING</div>
                        )}
                        <h3 className="text-gray-900 mb-2 font-semibold text-lg">{job.title}</h3>
                        <p className="text-sm text-gray-700 mb-4">{job.department}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <Clock className="w-4 h-4" />
                            <span>{job.type} • {job.experience}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-400">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-medium text-gray-700">{job.salary}</span>
                          </div>
                        </div>

                        <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                          {job.description}
                        </p>

                        <button className="w-full px-4 py-3 bg-gradient-to-r from-black to-neutral-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform-gpu hover:-translate-y-0.5 transition-all duration-150 flex items-center justify-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          Apply Now
                        </button>
                      </motion.div>
                    );
                  })}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Application Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => setSelectedJob(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto backdrop-blur-2xl bg-gradient-to-br from-black/20 to-black/10 rounded-3xl border border-gray-200 p-6 md:p-8"
              >
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>

                <div className="mb-8">
                  <h2 className="text-gray-900 mb-2">{selectedJob.title}</h2>
                  <p className="text-gray-700">{selectedJob.division} • {selectedJob.department}</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-500 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-500 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Phone *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black"
                        placeholder="https://linkedin.com/in/johndoe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Portfolio URL</label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Years of Experience *</label>
                      <input
                        type="text"
                        required
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black"
                        placeholder="e.g., 3 years"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Cover Letter *</label>
                    <textarea
                      required
                      value={formData.coverLetter}
                      onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-black resize-none"
                      placeholder="Tell us why you're a great fit for this role..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-2">Resume/CV *</label>
                    <div className="relative">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setFormData({ ...formData, resume: e.target.files?.[0] || null })}
                        className="hidden"
                        id="resume-upload"
                      />
                      <label
                        htmlFor="resume-upload"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black/10 border border-gray-300 rounded-lg text-gray-600 cursor-pointer hover:border-gray-400 transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        <span>{formData.resume ? formData.resume.name : 'Upload Resume (PDF, DOC, DOCX)'}</span>
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-black rounded-lg text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
