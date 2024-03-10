'use client';

import { useState } from 'react';

export default function Home() {
  const [source, setSource] = useState('');

  return (
    <main className="h-screen flex justify-between ">
      <section className="w-full pt-5 pl-5 border-r-2 border-red-800">
        <textarea
          className="w-full h-full pr-1 border-0 outline-none resize-none"
          placeholder="write here"
          value={source}
          onChange={(e) => setSource(e.target.value)}
          autoFocus
        />
      </section>
      <div className="fixed" />
      <article className="w-full pt-5 pl-5">preview</article>
    </main>
  );
}
