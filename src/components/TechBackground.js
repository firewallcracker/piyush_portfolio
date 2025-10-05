import React from 'react';
import { motion } from 'framer-motion';

const TechBackground = () => {
  const techIcons = [
    '🔒', '🛡️', '🔐', '💻', '🌐', '⚡', '🔍', '🚀', 
    '🔧', '⚙️', '📡', '🖥️', '📱', '🔗', '💾', '🎯'
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Tech Icons */}
      {techIcons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-10 dark:opacity-20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* Binary Code Rain */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-primary-600"
            style={{ left: `${i * 5}%` }}
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Cyber Circuit Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5"/>
          </linearGradient>
        </defs>
        <path
          d="M0,50 Q250,10 500,50 T1000,50 Q1250,90 1500,50"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,150 Q300,110 600,150 T1200,150 Q1450,190 1700,150"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0,250 Q200,210 400,250 T800,250 Q1050,290 1300,250"
          stroke="url(#circuitGradient)"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default TechBackground;