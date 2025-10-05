import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const blogPosts = [
      {
        id: 1,
        title: 'Network Security Fundamentals: A Beginner\'s Guide',
        excerpt: 'Network security is the foundation of cybersecurity. Learn the essential concepts every aspiring cybersecurity professional should understand...',
        date: 'December 15, 2024',
        readTime: '8 min read',
        slug: 'network-security-fundamentals'
      },
      {
        id: 2,
        title: 'Understanding OWASP Top 10: Web Application Security Risks',
        excerpt: 'The OWASP Top 10 is a critical resource for web application security. Learn about the most critical security risks to web applications...',
        date: 'December 10, 2024',
        readTime: '10 min read',
        slug: 'owasp-top-10-guide'
      },
      {
        id: 3,
        title: 'Python Automation in Cybersecurity: My Journey',
        excerpt: 'Python has become my go-to language for cybersecurity automation. From network scanning tools to automating security tasks...',
        date: 'December 5, 2024',
        readTime: '7 min read',
        slug: 'python-automation-cybersecurity'
      },
      {
        id: 4,
        title: 'My Cybersecurity Journey: From Student to Security Professional',
        excerpt: 'As a B.Tech Computer Science student passionate about cybersecurity, I want to share my journey and insights for fellow students...',
        date: 'November 30, 2024',
        readTime: '12 min read',
        slug: 'career-cybersecurity-student'
      },
      {
        id: 5,
        title: 'Getting Started with Cybersecurity',
        excerpt: 'Cybersecurity is becoming increasingly important in our digital world. Here are some key areas to focus on when starting your journey...',
        date: 'November 25, 2024',
        readTime: '5 min read',
        slug: 'getting-started-with-cybersecurity'
      }
    ];
    setPosts(blogPosts);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Thoughts on development, security, and technology
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -2 }}
              className="card cursor-pointer"
            >
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 hover:text-primary-600 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-primary-600 font-medium">
                Read more
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300">
            📝 More cybersecurity insights and tutorials coming soon!
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Follow my journey in cybersecurity, from student projects to professional insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;