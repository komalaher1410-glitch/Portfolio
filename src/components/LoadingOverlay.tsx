import { AnimatePresence, motion } from 'framer-motion';

interface LoadingOverlayProps {
  visible: boolean;
}

export default function LoadingOverlay({ visible }: LoadingOverlayProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="fixed inset-0 z-50 grid place-items-center bg-slate-950/95 text-white"
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="h-24 w-24 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
            <div>
              <p className="text-xl font-semibold">Komal Gorakhnath Aher</p>
              <p className="text-sm text-slate-400">Crafting premium frontend web applications...</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
