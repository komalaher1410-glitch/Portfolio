import { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

export default function AIWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 rounded-3xl border border-white/10 bg-slate-950/95 p-4 text-slate-200 shadow-glass backdrop-blur-xl">
          <p className="text-sm font-semibold text-white">AI Assistant</p>
          <p className="mt-3 text-sm text-slate-300">Ask me about my React.js projects, deployment workflow, or GitHub portfolio.</p>
          <button onClick={() => setOpen(false)} className="mt-4 rounded-full bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
            Close
          </button>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 text-slate-950 shadow-lg shadow-violet-500/30 transition-transform duration-200 hover:-translate-y-1"
        aria-label="Open AI assistant widget"
      >
        <FaRobot size={18} />
      </button>
    </div>
  );
}
