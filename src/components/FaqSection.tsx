'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronDown, HelpCircle, Maximize2 } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-primary font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Common questions.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary">
            Everything you need to know about Aera, security, and permissions.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {siteConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;
            const isUninstallQuestion = faq.question.toLowerCase().includes('uninstall');

            return (
              <div
                key={faq.question}
                className="rounded-2xl bg-[#12131D]/80 border border-white/[0.08] hover:border-white/[0.14] transition-all overflow-hidden"
              >
                <button
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-2xl group"
                >
                  <span className="text-sm sm:text-base font-semibold text-white/90 group-hover:text-white transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-white/[0.05] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-primary/20 text-primary' : 'text-text-muted group-hover:text-white'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-6 pb-6 pt-1 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-white/[0.04] animate-in fade-in slide-in-from-top-1 duration-200 space-y-3"
                  >
                    <p>{faq.answer}</p>

                    {isUninstallQuestion && (
                      <div className="mt-3 pt-3 border-t border-white/[0.06] space-y-2">
                        <span className="text-[11px] font-mono text-white/60 block uppercase tracking-wide">
                          Settings → About Aera (Built-in Clean Uninstaller):
                        </span>
                        <div className="relative aspect-[16/10] max-w-lg rounded-xl overflow-hidden border border-white/10 bg-black/40 shadow-xl">
                          <Image
                            src="/images/app-about.png"
                            alt="Aera About tab showing built-in clean uninstallation"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 600px) 100vw, 500px"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
