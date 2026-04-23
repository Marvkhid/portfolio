'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type Props = {
  question: string;
  answer: string;
};

export default function Accordion({ question, answer }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-sky-100 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-slate-700 font-medium text-sm md:text-base group-hover:text-sky-600 transition-colors">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`text-sky-400 flex-shrink-0 ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-slate-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}