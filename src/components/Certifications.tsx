import { useState } from 'react';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';
import { certifications } from '../data/certifications';
import { motion } from 'framer-motion';
import type { Certification } from '../types';

export default function CertificationsSection() {
  const [selected, setSelected] = useState<Certification | undefined>(undefined);
  const [open, setOpen] = useState(false);

  function openCertificate(c: Certification) {
    setSelected(c);
    setOpen(true);
  }

  function closeCertificate() {
    setOpen(false);
    setSelected(undefined);
  }

  return (
    <section id="certifications" className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-8">
          <h2 className="section-heading">Certifications</h2>
          <p className="mt-2 text-sm text-slate-300">Verified certificates and diplomas.</p>
        </div>

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {certifications.map((c) => (
            <motion.div key={c.title} whileHover={{ y: -6 }}>
              <CertificateCard certificate={c} onView={openCertificate} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal open={open} certificate={selected} onClose={closeCertificate} />
    </section>
  );
}
