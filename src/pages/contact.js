import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin, Copy, Check, Sparkles } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/ui/Container';
import { SpotlightCard, FadeIn } from '@/components/ui/Motion';
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
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      description="Connect with Santhosh K for frontend development, enterprise system implementation, and cross-platform mobile engineering opportunities."
    >
      <div className="py-12 sm:py-24 dev-grid-bg">
        <Container>
          <div className="max-w-3xl mb-16 font-mono">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-syntax-function/30 bg-syntax-function/10 px-3.5 py-1 text-xs font-semibold text-syntax-function shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
              curl -X POST /api/contact
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
              Let&apos;s build scalable systems together.
            </h1>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed font-sans">
              Available for Frontend Developer and Cross-Platform engineering opportunities. Whether discussing complex logistics architecture, design systems, or component performance, let&apos;s talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Form as Terminal Window */}
            <div className="lg:col-span-7">
              <div className="terminal-window shadow-2xl bg-bg-secondary border-border/90">
                <div className="terminal-header flex items-center justify-between font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="terminal-dot bg-red-500/80" />
                      <span className="terminal-dot bg-yellow-500/80" />
                      <span className="terminal-dot bg-green-500/80" />
                    </div>
                    <span className="text-text-secondary ml-1">POST /api/contact — dispatch.sh</span>
                  </div>
                  <span className="text-[11px] text-syntax-comment">status: ready</span>
                </div>

                <div className="p-6 sm:p-8 font-sans">
                  {status === 'success' && (
                    <div className="mb-6 flex items-start gap-3 rounded-lg border border-syntax-string/30 bg-syntax-string/10 p-4 text-xs font-mono text-foreground">
                      <CheckCircle2 className="w-5 h-5 text-syntax-string shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-syntax-string">HTTP 200 OK — Message Dispatched</p>
                        <p className="text-text-secondary mt-1">
                          Thank you for reaching out. I will respond to your transmission promptly.
                        </p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mb-6 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-xs font-mono text-foreground">
                      <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-400">HTTP 500 — Delivery Failed</p>
                        <p className="text-text-secondary mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Input
                        label="param: sender_name"
                        id="from_name"
                        name="from_name"
                        placeholder="Jane Doe"
                        required
                        value={formData.from_name}
                        onChange={handleChange}
                      />
                      <Input
                        label="param: sender_email"
                        id="from_email"
                        name="from_email"
                        type="email"
                        placeholder="jane@company.com"
                        required
                        value={formData.from_email}
                        onChange={handleChange}
                      />
                    </div>

                    <Input
                      label="header: subject"
                      id="subject"
                      name="subject"
                      placeholder="Frontend Role / Architecture Discussion"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />

                    <Textarea
                      label="payload: message_body"
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Enter requirements, role scope, or project specifications..."
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full font-mono text-xs"
                      disabled={status === 'loading'}
                      icon={status === 'loading' ? Loader2 : Send}
                    >
                      {status === 'loading' ? '$ dispatching payload...' : '$ ./send-message.sh'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-5 space-y-6">
              <SpotlightCard className="p-6 sm:p-8 border border-border/80 space-y-6 shadow-xl">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3 font-semibold">
                  Verified Contact Direct
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-mono text-text-secondary block">Primary Email</span>
                      <div className="flex items-center justify-between">
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-sm font-semibold text-foreground hover:text-accent transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                        <button
                          onClick={() => handleCopy(personalInfo.email)}
                          className="text-xs font-mono text-text-secondary hover:text-accent p-1"
                          title="Copy email"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
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
                      <span className="text-xs font-mono text-text-secondary block">Current Location</span>
                      <p className="text-sm font-semibold text-foreground">
                        {personalInfo.location}
                      </p>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {personalInfo.address}
                      </p>
                    </div>
                  </div>
                </div>
              </SpotlightCard>

              {/* Profiles */}
              <SpotlightCard className="p-6 sm:p-8 border border-border/80 shadow-xl">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent border-b border-border pb-3 mb-4 font-semibold">
                  Engineering Profiles
                </h3>
                <div className="space-y-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-bg-tertiary/60 hover:bg-bg-tertiary border border-border/60 hover:border-accent/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-4 h-4 text-accent" />
                      <div>
                        <span className="text-sm font-semibold text-foreground block">LinkedIn</span>
                        <span className="text-[11px] font-mono text-text-secondary">/in/santhosh-kannan16</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-text-secondary group-hover:text-accent">
                      Connect &rarr;
                    </span>
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-bg-tertiary/60 hover:bg-bg-tertiary border border-border/60 hover:border-accent/40 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Github className="w-4 h-4 text-accent" />
                      <div>
                        <span className="text-sm font-semibold text-foreground block">GitHub</span>
                        <span className="text-[11px] font-mono text-text-secondary">/Santhosh10661</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-text-secondary group-hover:text-accent">
                      Follow &rarr;
                    </span>
                  </a>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
