import React from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.45, delay: 0.78 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.42 }}
          className="mb-5"
        >
          <img src="/d-codex-logo.png" alt="D-Codex" className="h-20 w-auto mx-auto" />
        </motion.div>

        <div className="loader mx-auto" />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 mt-4 text-sm"
        >
          Chargement...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;