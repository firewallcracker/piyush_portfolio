import React from 'react';
import { motion } from 'framer-motion';

const CyberBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-15">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
              <polygon 
                points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
                className="text-primary-500"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Glowing Orbs */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary-500 to-purple-500 opacity-20"
          style={{
            width: `${50 + Math.random() * 100}px`,
            height: `${50 + Math.random() * 100}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Network Nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Network connections */}
        <g stroke="#3b82f6" strokeWidth="1" fill="none" filter="url(#glow)">
          <line x1="10%" y1="20%" x2="30%" y2="40%" />
          <line x1="30%" y1="40%" x2="60%" y2="30%" />
          <line x1="60%" y1="30%" x2="80%" y2="60%" />
          <line x1="80%" y1="60%" x2="90%" y2="80%" />
          <line x1="20%" y1="70%" x2="50%" y2="80%" />
          <line x1="50%" y1="80%" x2="70%" y2="90%" />
        </g>
        
        {/* Network nodes */}
        <g fill="#3b82f6" filter="url(#glow)">
          <circle cx="10%" cy="20%" r="3" />
          <circle cx="30%" cy="40%" r="4" />
          <circle cx="60%" cy="30%" r="3" />
          <circle cx="80%" cy="60%" r="5" />
          <circle cx="90%" cy="80%" r="3" />
          <circle cx="20%" cy="70%" r="4" />
          <circle cx="50%" cy="80%" r="3" />
          <circle cx="70%" cy="90%" r="4" />
        </g>
      </svg>

      {/* Code Snippets */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute font-mono text-xs text-primary-600"
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <div>def scan_network():</div>
            <div>&nbsp;&nbsp;return results</div>
            <div>if __name__ == "__main__":</div>
            <div>&nbsp;&nbsp;main()</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CyberBackground;