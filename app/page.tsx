'use client';

import React, { useState } from 'react';
import Markdown from 'react-markdown';
import { Code, Elem } from '@/components/SyntaxHighLighter';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';

export default function Home() {
  const [state, setState] = useState('');

  const TabDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();

      const start = (e.target as HTMLTextAreaElement).selectionStart;
      const end = (e.target as HTMLTextAreaElement).selectionEnd;

      setState(
        (value) => value.substring(0, start) + '    ' + value.substring(end)
      );
    }
  };

  return (
    <main className="bg-neutral-800 h-dvh">
      <div className="p-3 text-orange-600">Markflow Editor</div>
      <div className="flex justify-between text-sm bg-neutral-800">
        <section
          className="w-full h-full border-r-2
        border-neutral-500"
        >
          <textarea
            name="editor"
            className="w-full h-[calc(100vh-80px)] pt-5 pl-5 pr-5 border-0 outline-none resize-none bg-neutral-800 text-orange-100"
            placeholder="write here"
            value={state}
            onChange={(e) => setState(e.target.value)}
            onKeyDown={TabDown}
            autoFocus
          />
        </section>
        <section className="w-full overflow-y-hidden">
          <article className="w-full pt-5 pl-5 pr-5 overflow-y-auto break-words">
            <Markdown
              className="prose prose-invert m-0 text-sm text-neutral-0"
              components={{ code: Code, pre: Elem }}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSanitize]}
            >
              {state}
            </Markdown>
          </article>
        </section>
      </div>
    </main>
  );
}
