'use client';

import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="text-gold text-xs font-bold uppercase tracking-widest mb-3 block">Get in Touch</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Open to
            <br />
            <span className="text-shimmer">Opportunities</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm leading-relaxed">
            Interested in senior Cloud Architect, AI/GenAI, or consulting roles? Reach out directly via email or LinkedIn.
          </p>
        </div>

        {/* Contact cards */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-2xl mx-auto">
          <a
            href="mailto:soudagartasleem@gmail.com"
            className="flex items-center gap-4 p-5 card-surface rounded-xl hover:border-gold/40 transition-all duration-300 group w-full sm:w-auto sm:flex-1"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
              <Icon name="EnvelopeIcon" size={22} className="text-gold" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider font-semibold">Email</div>
              <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                soudagartasleem@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/tasleem-soudagar"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 card-surface rounded-xl hover:border-gold/40 transition-all duration-300 group w-full sm:w-auto sm:flex-1"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
              <Icon name="LinkIcon" size={22} className="text-gold" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wider font-semibold">LinkedIn</div>
              <div className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                linkedin.com/in/tasleem-soudagar
              </div>
            </div>
          </a>
        </div>

        {/* Availability badge */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-3 p-4 card-surface rounded-xl border border-green-500/20 w-fit">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
            <div>
              <div className="text-sm font-semibold text-foreground">Available for Opportunities</div>
              <div className="text-xs text-muted-foreground mt-0.5">Open · Full-time · Consulting · Remote</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}