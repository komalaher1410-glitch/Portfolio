import { FaCertificate, FaExternalLinkAlt, FaDownload, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import type { Certification } from '../types';

interface CertificateCardProps {
  certificate: Certification;
  onView?: (c: Certification) => void;
}

export default function CertificateCard({ certificate, onView }: CertificateCardProps) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-2xl border border-white/6 bg-gradient-to-br from-white/3 to-white/2 p-6 shadow-xl backdrop-blur-md"
      tabIndex={0}
      aria-labelledby={certificate.title}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-400 text-slate-950 shadow-lg">
            <FaCertificate />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-violet-300">{certificate.type || 'Certificate'}</p>
            <h3 id={certificate.title} className="mt-2 text-lg font-semibold text-slate-100">
              {certificate.title}
            </h3>
            <p className="mt-1 text-sm text-slate-300">{certificate.issuer}</p>
          </div>
        </div>
        {certificate.verified ? (
          <div className="flex items-center gap-2 text-cyan-300">
            <FaCheckCircle aria-hidden className="text-cyan-400" />
            <span className="text-xs">Verified</span>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-slate-300">{certificate.issueDate}</div>
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-white/3 px-3 py-1 text-xs text-slate-200">Grade: {certificate.grade}</span>
          <button
            onClick={() => onView && onView(certificate)}
            className="inline-flex items-center gap-2 rounded-md bg-cyan-500/10 px-3 py-2 text-sm text-cyan-300 ring-1 ring-cyan-400/10 transition-colors ease-in-out group-hover:bg-cyan-500/20"
            aria-label={`View ${certificate.title}`}
          >
            <FaExternalLinkAlt />
            View
          </button>
        </div>
      </div>
    </motion.article>
  );
}
