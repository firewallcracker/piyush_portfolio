import React from 'react';
import { motion } from 'framer-motion';
import config from '../data/config.json';
import skills from '../data/skills.json';
import DownloadSection from '../components/DownloadSection';

const About = () => {
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
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-16"
        >
          {/* Profile Section */}
          <motion.section variants={itemVariants} className="text-center">
            <motion.div 
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-primary-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <span className="text-6xl filter drop-shadow-lg relative z-10">👨💻</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent animate-pulse"></div>
            </motion.div>
            <h1 className="text-4xl font-bold mb-6 gradient-text">About Me</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              {config.bio}
            </p>
          </motion.section>

          {/* Education Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Education</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {config.education.map((edu, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-primary-600 mb-2">{edu.college}</p>
                  <div className="flex justify-between text-gray-600 dark:text-gray-300">
                    <span>{edu.year}</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.percentage && (
                    <p className="text-sm text-primary-600 mt-2">Percentage: {edu.percentage}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Experience</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {config.experience.map((exp, index) => (
                <div key={index} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary-600 font-medium">{exp.company}</p>
                      {exp.techLead && (
                        <p className="text-sm text-gray-600 dark:text-gray-400">Under guidance of: {exp.techLead}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-gray-600 dark:text-gray-300">{exp.duration}</span>
                      <p className="text-sm text-gray-500">{exp.location}</p>
                      {exp.certificateId && (
                        <p className="text-xs text-primary-600 mt-1">ID: {exp.certificateId}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((desc, descIndex) => (
                      <li key={descIndex} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="text-primary-600 mr-2 mt-1">•</span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Patent Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Patent</h2>
            <div className="max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">{config.patent.title}</h3>
                <div className="flex justify-between text-primary-600 mb-4">
                  <span>Reference: {config.patent.referenceNumber}</span>
                  <span>Status: {config.patent.status}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{config.patent.description}</p>
              </div>
            </div>
          </motion.section>



          {/* Certifications Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Certifications & Achievements</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {config.certifications.slice(0, 6).map((cert, index) => (
                <div key={index} className="card">
                  <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                  <p className="text-primary-600 mb-2">{cert.issuer}</p>
                  <p className="text-gray-600 dark:text-gray-300">{cert.year}</p>
                  {cert.certificateId && (
                    <p className="text-xs text-gray-500 mt-2">ID: {cert.certificateId}</p>
                  )}
                  {cert.certificateUrl && (
                    <div className="flex gap-2 mt-2">
                      <a 
                        href={cert.certificateUrl} 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary-600 hover:text-primary-700 underline"
                      >
                        View
                      </a>
                      <span className="text-xs text-gray-400">|</span>
                      <a 
                        href={cert.certificateUrl} 
                        download 
                        className="text-xs text-primary-600 hover:text-primary-700 underline"
                      >
                        Download
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.section>

          {/* Job Simulations Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Professional Simulations</h2>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">Tata Cybersecurity Security Analyst Job Simulation</h3>
                <p className="text-primary-600 mb-2">Forage - July 2025</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    Completed job simulation involving identity and access management (IAM) for Tata Consultancy Services
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    Acquired expertise in IAM principles and cybersecurity best practices
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    Delivered comprehensive documentation and presentations
                  </li>
                </ul>
              </div>
              <div className="card">
                <h3 className="text-xl font-semibold mb-2">Deloitte Australia Cyber Job Simulation</h3>
                <p className="text-primary-600 mb-2">Forage - July 2025</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    Completed job simulation involving reading web activity logs
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    Supported a client in a cyber security breach scenario
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2 mt-1">•</span>
                    Identified suspicious user activity through log analysis
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 text-center gradient-text">Skills</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="card">
                  <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </motion.div>
        
        <DownloadSection />
      </div>
    </div>
  );
};

export default About;