'use client';
import React from 'react';
import { Github, Linkedin, Send } from 'lucide-react';

const contactRows = [
  { label: 'Email', value: 'danielachigbue55@gmail.com', href: 'mailto:danielachigbue55@gmail.com' },
  { label: 'Phone', value: '+220 359 1788', href: 'tel:+2203591788' },
  { label: 'Location', value: 'The Gambia' },
];

const ContactPage = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, subject, message } = formData;
    // mailto keeps the form dependency-free; the sender's name and reply
    // address ride in the body
    const bodyContent = `Name: ${name}\nEmail: ${formData.email}\n\n${message}`;
    const mailtoLink = `mailto:danielachigbue55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses =
    "w-full bg-white border border-gge-line rounded-md px-4 py-3 text-gge-ink focus:outline-none focus:border-gge-emerald focus:ring-1 focus:ring-gge-emerald transition-colors placeholder:text-gge-muted/50";

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="eyebrow text-gge-emerald mb-5">Contact</p>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight text-gge-ink leading-[1.08]">
            Let&apos;s talk
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gge-muted leading-relaxed">
            Interested in Royal Inventory or Gendal, or want to work with GGE?
            We&apos;d like to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-start">

          {/* Contact details */}
          <div className="lg:col-span-5">
            <div className="border-t border-gge-line">
              {contactRows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-gge-line items-baseline"
                >
                  <span className="col-span-4 font-mono text-xs uppercase tracking-widest text-gge-muted">
                    {row.label}
                  </span>
                  {row.href ? (
                    <a
                      href={row.href}
                      className="col-span-8 text-gge-ink text-lg hover:text-gge-emerald transition-colors break-words"
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span className="col-span-8 text-gge-ink text-lg">
                      {row.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="font-mono text-xs uppercase tracking-widest text-gge-muted mb-5">
                Social
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/GGE-Danny"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GGE on GitHub"
                  className="p-3 rounded-full border border-gge-line text-gge-muted hover:text-gge-ink hover:border-gge-ink transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-achigbue/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Daniel Achigbue on LinkedIn"
                  className="p-3 rounded-full border border-gge-line text-gge-muted hover:text-gge-ink hover:border-gge-ink transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7 bg-white border border-gge-line rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-light tracking-tight text-gge-ink mb-8">
              Send a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gge-muted" htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gge-muted" htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gge-muted" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="What it's about"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gge-muted" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us what you need..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gge-emerald hover:bg-[#095c43] text-white font-medium px-8 py-3.5 rounded-full transition-colors"
              >
                <span>Send message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
