"use client";

import React from "react";

interface SectionProps {
  title: string;
  action?: React.ReactNode;
  children: React.ReactNode;
}

export default function Section({ title, action, children }: SectionProps) {
  return (
    <section className="bg-slate-950/50 p-6 rounded-lg border border-slate-800/80">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-4">
        <h2 className="text-lg font-semibold text-slate-200">{title}</h2>
        {action}
      </div>

      {children}
    </section>
  );
}