import React from 'react';
import { motion } from 'framer-motion';
import config from '../data/config.json';

const DownloadSection = () => {
  const downloadItems = [
    {
      title: 'Resume',
      description: 'Complete professional resume with all experience and skills',
      url: config.documents.resume,
      icon: '📄',
      filename: 'Piyush_Kumar_Resume.pdf'
    },
    {
      title: 'SkillCraft Certificate',
      description: 'Cybersecurity Internship Certificate',
      url: config.documents.certificates.skillcraft,
      icon: '🏆',
      filename: 'SkillCraft_Certificate.pdf'
    },
    {
      title: 'Google Python Certificate',
      description: 'Automate Cybersecurity Tasks with Python',
      url: config.documents.certificates.google_python,
      icon: '🐍',
      filename: 'Google_Python_Certificate.pdf'
    },
    {
      title: 'Michigan PHP Certificate',
      description: 'Building Web Applications in PHP',
      url: config.documents.certificates.michigan_php,
      icon: '🌐',
      filename: 'Michigan_PHP_Certificate.pdf'
    },
    {
      title: 'Threat Landscape Certificate',
      description: 'Cybersecurity Threat Landscape',
      url: config.documents.certificates.threat_landscape,
      icon: '🛡️',
      filename: 'Threat_Landscape_Certificate.pdf'
    },
    {
      title: 'Uptoskills Certificate',
      description: 'Cybersecurity Internship',
      url: config.documents.certificates.uptoskills_internship,
      icon: '🔍',
      filename: 'Piyush Kumar uptoskills.pdf'
    },
    {
      title: 'Tata Simulation Certificate',
      description: 'Cybersecurity Job Simulation',
      url: config.documents.certificates.tata_simulation,
      icon: '🏢',
      filename: 'cybersecurity job simulation certificate.pdf'
    },
    {
      title: 'Deloitte Simulation Certificate',
      description: 'Cyber Job Simulation',
      url: config.documents.certificates.deloitte_simulation,
      icon: '📊',
      filename: 'deloite job simulation.pdf'
    },
    {
      title: 'Skill India Certificate',
      description: 'Cybersecurity Certification',
      url: config.documents.certificates.skill_india,
      icon: '🇮🇳',
      filename: 'Cybersecurity_skill india.pdf'
    },
    {
      title: 'Edureka Internship Certificate',
      description: 'Internship Completion Certificate',
      url: config.documents.certificates.edureka_internship,
      icon: '🎓',
      filename: 'Edureka - Internship Certificate.pdf'
    },
    {
      title: 'Cisco Cybersecurity Certificate',
      description: 'Introduction to Cybersecurity',
      url: config.documents.certificates.cisco_intro,
      icon: '🔒',
      filename: 'Introduction_to_Cybersecurity_certificate_cisco.pdf'
    },
    {
      title: 'Claude AI Certificate',
      description: 'AI and Machine Learning Certificate',
      url: config.documents.certificates.claude_ai,
      icon: '🤖',
      filename: 'Piyush Kumar - Claude AI Certificate.pdf'
    },
    {
      title: 'Cybersecurity Roadmap',
      description: 'Professional Development Roadmap',
      url: config.documents.certificates.cyber_roadmap,
      icon: '🗺️',
      filename: 'cybersecurity_proffessional roadmap.pdf'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Downloads</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {downloadItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="card text-center flex flex-col h-full"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{item.description}</p>
              <div className="flex gap-2 mt-auto">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View
                </a>
                <a
                  href={item.url}
                  download={item.filename}
                  className="flex-1 inline-flex items-center justify-center gap-1 px-3 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DownloadSection;