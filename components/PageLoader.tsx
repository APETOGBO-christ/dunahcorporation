import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PageLoader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}

      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark"
    >
      <div className="text-center">
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src="/logo.png" 
            alt="Dunah Corporation" 
            className="h-32 w-auto mx-auto"
          />
        </motion.div>

        {/* Loader spinner */}
        <div className="loader mx-auto" />
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 mt-6"
        >
          Chargement de l'expérience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default PageLoader;
