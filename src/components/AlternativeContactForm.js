import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AlternativeContactForm = ({ config }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using Formspree (free service) - replace with your Formspree endpoint
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Alternative: Direct Form Submission</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="alt-name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="alt-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-sm"
          />
        </div>

        <div>
          <label htmlFor="alt-email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="alt-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-sm"
          />
        </div>

        <div>
          <label htmlFor="alt-message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="alt-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
        >
          {isSubmitting ? 'Sending...' : 'Send via Formspree'}
        </button>

        {submitStatus === 'success' && (
          <p className="text-green-600 text-center text-sm">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="text-red-600 text-center text-sm">Failed to send. Please use email directly.</p>
        )}
        
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          To use this form, sign up at formspree.io and replace YOUR_FORM_ID
        </p>
      </form>
    </div>
  );
};

export default AlternativeContactForm;