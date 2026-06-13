import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes, FaDownload, FaSearchPlus } from 'react-icons/fa';

interface Props {
  open: boolean;
  certificate?: {
    title: string;
    image?: string;
    issuer?: string;
    downloadUrl?: string;
  };
  onClose: () => void;
}

export default function CertificateModal({ open, certificate, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === '+') setZoom((z) => Math.min(3, z + 0.2));
      if (e.key === '-') setZoom((z) => Math.max(1, z - 0.2));
    };
    document.addEventListener('keydown', onKey);
    // focus close button
    closeBtnRef.current?.focus();
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open || !certificate) return null;

  return createPortal(
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div className="relative mx-auto w-full max-w-4xl rounded-xl bg-slate-900/80 p-4 shadow-2xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-white">{certificate.title}</h2>
            <p className="text-sm text-slate-300">{certificate.issuer}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setZoom((z) => Math.min(3, z + 0.2))}
              className="rounded-md bg-white/5 px-3 py-2 text-slate-200"
              aria-label="Zoom in"
            >
              <FaSearchPlus />
            </button>
            <a
              href={certificate.downloadUrl ?? certificate.image}
              download
              className="rounded-md bg-white/5 px-3 py-2 text-slate-200"
              aria-label="Download certificate"
            >
              <FaDownload />
            </a>
            <button
              ref={closeBtnRef}
              onClick={onClose}
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-red-600/80 px-3 py-2 text-white"
              aria-label="Close modal"
            >
              <FaTimes />
            </button>
          </div>
        </div>

        <div className="mt-4 flex h-[70vh] items-center justify-center overflow-hidden rounded-md bg-black/40">
          <img
            ref={imgRef}
            src={certificate.image}
            alt={`${certificate.title} - full view`}
            style={{ transform: `scale(${zoom})`, transition: 'transform 200ms ease' }}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
