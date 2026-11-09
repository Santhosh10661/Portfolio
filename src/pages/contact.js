import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { personalInfo } from '@/data/personal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Send with EmailJS using the existing configured service
      await emailjs.send(
        'service_sydrf49',
        'template_32den8s',
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: `Subject: ${formData.subject}\n\n${formData.message}`,
        },
        'tX11Ew0uGOgi63GJz'
      );

      setStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      console.error('Email send failed:', err);
      // Fallback: also try sending to the internal Next.js API route
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (res.ok) {
          setStatus('success');
          setFormData({
            from_name: '',
            from_email: '',
            subject: '',
            message: '',
          });
          return;
        }
      } catch (apiErr) {
        // ignore
      }

      setStatus('error');
      setErrorMessage(
        'Could not send message automatically. Please reach out directly at santhoshkfwd@gmail.com'
      );
    }
  };

  return (
    <Layout
      title="Contact Santhosh K | Frontend Developer"
      description="Get in touch with Santhosh K for web development opportunities, engineering roles, and project inquiries."
    >
      <div className="py-12 sm:py-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 font-mono text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Let&apos;s build something exceptional together.
            </h1>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Whether you have an inquiry about full-time opportunities, contract work, or architecture consultations, drop me a note below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <Card className="p-6 sm:p-10 bg-bg-secondary border-border">
                {status === 'success' && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4 text-sm text-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-accent">Message Sent Successfully!</p>
                      <p className="text-xs text-text-secondary mt-1">
                        Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                      </p>
                    </div>
                  </div>
                )}

                {status === 'error' && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-foreground">
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-400">Message Delivery Error</p>
                      <p className="text-xs text-text-secondary mt-1">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Input
                      label="Your Name"
                      id="from_name"
                      name="from_name"
                      placeholder="Jane Doe"
                      required
                      value={formData.from_name}
                      onChange={handleChange}
                    />
                    <Input
                      label="Your Email"
                      id="from_email"
                      name="from_email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      value={formData.from_email}
                      onChange={handleChange}
                    />
                  </div>

                  <Input
                    label="Subject"
                    id="subject"
                    name="subject"
                    placeholder="Project Inquiry / Job Opportunity"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  />

                  <Textarea
                    label="Your Message"
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project, timeline, and goals..."
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === 'loading'}
                    icon={status === 'loading' ? Loader2 : Send}
                  >
                    {status === 'loading' ? 'Sending message...' : 'Send Message'}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="p-6 sm:p-8 bg-bg-secondary border-border space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3">
                  Direct Contact
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-secondary block">Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-secondary block">Phone</span>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-foreground hover:text-accent transition-colors font-mono"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-text-secondary block">Location</span>
                      <p className="text-sm font-semibold text-foreground">
                        {personalInfo.location}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {personalInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Social channels */}
              <Card className="p-6 sm:p-8 bg-bg-secondary border-border">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3 mb-4">
                  Online Profiles
                </h3>
                <div className="space-y-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-bg-tertiary hover:bg-bg-tertiary/70 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">LinkedIn</span>
                    </div>
                    <span className="text-xs font-mono text-text-secondary group-hover:text-accent">
                      Connect &rarr;
                    </span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-bg-tertiary hover:bg-bg-tertiary/70 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-accent" />
                      <span className="text-sm font-medium text-foreground">GitHub</span>
                    </div>
                    <span className="text-xs font-mono text-text-secondary group-hover:text-accent">
                      Follow &rarr;
                    </span>
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
