import React from 'react';
import { motion } from 'framer-motion';
import config from '../data/config.json';
import CyberBackground from '../components/CyberBackground';

const SecurityResearch = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative">
      <CyberBackground />
      <div className="relative z-10 pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-16"
          >
            {/* Header */}
            <motion.section variants={itemVariants} className="text-center">
              <h1 className="text-4xl font-bold mb-6 gradient-text">Security Research & Bug Bounty</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Dedicated to improving cybersecurity through responsible vulnerability disclosure and ethical hacking practices.
              </p>
            </motion.section>

            {/* Stats */}
            <motion.section variants={itemVariants}>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{config.bugBounty.totalFindings}</div>
                  <div className="text-gray-600 dark:text-gray-300">Vulnerabilities Found</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{config.bugBounty.companiesHelped}</div>
                  <div className="text-gray-600 dark:text-gray-300">Organizations Helped</div>
                </div>
                <div className="card text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{config.bugBounty.criticalVulns}</div>
                  <div className="text-gray-600 dark:text-gray-300">Critical Findings</div>
                </div>
              </div>
            </motion.section>

            {/* Vulnerability Findings */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Security Findings</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {config.bugBounty.findings.map((finding) => (
                  <motion.div 
                    key={finding.id} 
                    className="card"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold">{finding.vulnerability}</h3>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        finding.severity === 'Critical' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                        finding.severity === 'High' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      }`}>
                        {finding.severity}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Target:</span> {finding.company}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-medium">Service:</span> {finding.service}
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{finding.description}</p>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-medium">Impact:</span> {finding.impact}
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>Status: <span className="text-green-600">{finding.status}</span></span>
                      <span>{finding.date}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Methodology */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Research Methodology</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="card text-center">
                  <div className="text-3xl mb-4">🔍</div>
                  <h3 className="text-lg font-semibold mb-2">Reconnaissance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Information gathering and target analysis</p>
                </div>
                <div className="card text-center">
                  <div className="text-3xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-2">Vulnerability Assessment</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Automated and manual testing techniques</p>
                </div>
                <div className="card text-center">
                  <div className="text-3xl mb-4">🛡️</div>
                  <h3 className="text-lg font-semibold mb-2">Exploitation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Proof of concept development</p>
                </div>
                <div className="card text-center">
                  <div className="text-3xl mb-4">📋</div>
                  <h3 className="text-lg font-semibold mb-2">Reporting</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Detailed vulnerability reports and remediation</p>
                </div>
              </div>
            </motion.section>

            {/* Learning Progress */}
            <motion.section variants={itemVariants}>
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Learning Progress</h2>
              <div className="max-w-6xl mx-auto space-y-8">
                <div className="card text-center">
                  <h3 className="text-xl font-semibold mb-4">TryHackMe Profile</h3>
                  <div className="flex justify-center mb-4">
                    <iframe 
                      src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3045206" 
                      style={{border: 'none', width: '100%', height: '200px'}}
                      title="TryHackMe Profile Badge"
                    />
                  </div>
                  <a 
                    href={config.contact.tryhackme}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    View Full Profile
                  </a>
                </div>
                
                <div className="card">
                  <h3 className="text-xl font-semibold mb-6 text-center">PortSwigger Web Security Academy</h3>
                  <div className="grid gap-4 md:grid-cols-3 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">{config.portswigger.totalLabs}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Total Labs Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{config.portswigger.apprenticeLabs}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Apprentice Level</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">{config.portswigger.practitionerLabs}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Practitioner Level</div>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    {config.portswigger.categories.map((category, index) => (
                      <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold mb-3 text-primary-600">{category.name}</h4>
                        <ul className="space-y-1 text-sm">
                          {category.labs.map((lab, labIndex) => (
                            <li key={labIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                              <span className="text-green-500 mr-2 mt-1">✓</span>
                              {lab}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Ethics Statement */}
            <motion.section variants={itemVariants}>
              <div className="card text-center max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-4 gradient-text">Ethical Disclosure</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  All security research is conducted following responsible disclosure practices. Vulnerabilities are reported 
                  directly to affected organizations with detailed remediation guidance.
                </p>
                <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
                  <span>🔒 Confidential Reporting</span>
                  <span>•</span>
                  <span>⏱️ Reasonable Disclosure Timeline</span>
                  <span>•</span>
                  <span>🤝 Collaborative Remediation</span>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecurityResearch;