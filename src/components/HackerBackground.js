import React from 'react';
import { motion } from 'framer-motion';

const HackerBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dark Terminal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-95"></div>
      
      {/* Terminal Window */}
      <div className="absolute top-10 left-10 w-96 h-64 bg-black rounded-lg border border-gray-700 opacity-20 dark:opacity-40">
        <div className="bg-gray-800 h-8 rounded-t-lg flex items-center px-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="ml-4 text-gray-400 text-xs">terminal</div>
        </div>
        <div className="p-4 font-mono text-xs text-green-400">
          <div>$ nmap -sS -O target.com</div>
          <div>Starting Nmap scan...</div>
          <div>Host is up (0.023s latency)</div>
          <div>PORT    STATE SERVICE</div>
          <div>22/tcp  open  ssh</div>
          <div>80/tcp  open  http</div>
          <div>443/tcp open  https</div>
          <div className="animate-pulse">$_</div>
        </div>
      </div>

      {/* Code Editor Window */}
      <div className="absolute top-20 right-10 w-80 h-56 bg-gray-900 rounded-lg border border-gray-700 opacity-20 dark:opacity-40">
        <div className="bg-gray-800 h-8 rounded-t-lg flex items-center px-4">
          <div className="text-gray-400 text-xs">spy_digger.py</div>
        </div>
        <div className="p-4 font-mono text-xs">
          <div className="text-purple-400">import</div>
          <div className="text-blue-400">def scan_network(target):</div>
          <div className="text-gray-400 ml-4"># Network scanning logic</div>
          <div className="text-green-400 ml-4">return results</div>
          <div className="text-yellow-400">if __name__ == "__main__":</div>
          <div className="text-blue-400 ml-4">main()</div>
        </div>
      </div>

      {/* Matrix-style Code Rain */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-green-400"
            style={{ left: `${i * 7}%` }}
            initial={{ y: -100 }}
            animate={{ y: window.innerHeight + 100 }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          >
            {Array.from({ length: 25 }).map((_, j) => (
              <div key={j} className="mb-1">
                {String.fromCharCode(33 + Math.random() * 94)}
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Network Visualization */}
      <svg className="absolute inset-0 w-full h-full opacity-15 dark:opacity-25" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="neonGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Network Grid */}
        <g stroke="#00ff00" strokeWidth="1" fill="none" opacity="0.3" filter="url(#neonGlow)">
          <line x1="0%" y1="25%" x2="100%" y2="25%" />
          <line x1="0%" y1="50%" x2="100%" y2="50%" />
          <line x1="0%" y1="75%" x2="100%" y2="75%" />
          <line x1="25%" y1="0%" x2="25%" y2="100%" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" />
          <line x1="75%" y1="0%" x2="75%" y2="100%" />
        </g>
        
        {/* Scanning Lines */}
        <motion.line
          x1="0%" y1="30%"
          x2="100%" y2="30%"
          stroke="#00ff00"
          strokeWidth="2"
          opacity="0.6"
          filter="url(#neonGlow)"
          initial={{ x1: "0%", x2: "0%" }}
          animate={{ x1: "0%", x2: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0">
        {['🔒', '🛡️', '💻', '🌐', '⚡', '🔍'].map((icon, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-10 dark:opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        ))}
      </div>

      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 opacity-5 dark:opacity-15">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default HackerBackground;