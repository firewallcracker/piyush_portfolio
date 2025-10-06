import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    // Static blog posts data
    const blogPosts = {
      'owasp-top-10-guide': {
        title: 'Understanding OWASP Top 10: Web Application Security Risks',
        author: 'Piyush Kumar',
        date: '2024-12-10',
        content: `<h1>Understanding OWASP Top 10: Web Application Security Risks</h1>

<p>Every day, millions of people trust websites with their personal information, passwords, and financial details. But how secure are these websites really? The OWASP Top 10 provides answers by identifying the most critical security risks in web applications.</p>

<h2>What is OWASP?</h2>

<p>The Open Web Application Security Project (OWASP) is a global community focused on improving software security. Every few years, they publish a list of the ten most critical web application security risks based on real-world data and expert analysis.</p>

<p>This guide breaks down each risk with practical examples to help developers and security professionals understand and prevent these vulnerabilities.</p>

<h2>The OWASP Top 10 Security Risks</h2>

<div class="vulnerability-section">
<h3>1. Broken Access Control</h3>

<p><strong>The Problem:</strong> Users can access data or functions they shouldn't have permission to use.</p>

<div class="code-box vulnerable">
<strong>Vulnerable Code:</strong>
<pre><code>app.get('/user/:id', (req, res) => {
  const user = db.getUser(req.params.id);
  res.send(user);
});</code></pre>
</div>

<div class="code-box secure">
<strong>Secure Implementation:</strong>
<pre><code>app.get('/user/:id', (req, res) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).send('Access denied');
  }
  const user = db.getUser(req.params.id);
  res.send(user);
});</code></pre>
</div>

<p><strong>Impact:</strong> Unauthorized access to sensitive data, privilege escalation, and data manipulation.</p>
</div>

<div class="vulnerability-section">
<h3>2. Cryptographic Failures</h3>

<p><strong>The Problem:</strong> Sensitive data is stored or transmitted without proper encryption.</p>

<div class="code-box vulnerable">
<strong>Vulnerable Code:</strong>
<pre><code>db.save({ 
  username: "user123", 
  password: "plaintext_password" 
});</code></pre>
</div>

<div class="code-box secure">
<strong>Secure Implementation:</strong>
<pre><code>const bcrypt = require('bcryptjs');
const hashedPassword = await bcrypt.hash(password, 12);
db.save({ 
  username: "user123", 
  password: hashedPassword 
});</code></pre>
</div>

<p><strong>Impact:</strong> Data breaches, identity theft, and compliance violations.</p>
</div>

<div class="vulnerability-section">
<h3>3. Injection Attacks</h3>

<p><strong>The Problem:</strong> Untrusted data is sent to an interpreter as part of a command or query.</p>

<div class="code-box vulnerable">
<strong>Vulnerable Code:</strong>
<pre><code>user_input = request.form['username']
query = f"SELECT * FROM users WHERE username = '{user_input}'"
cursor.execute(query)</code></pre>
</div>

<div class="code-box secure">
<strong>Secure Implementation:</strong>
<pre><code>user_input = request.form['username']
query = "SELECT * FROM users WHERE username = %s"
cursor.execute(query, (user_input,))</code></pre>
</div>

<p><strong>Impact:</strong> Data loss, corruption, denial of service, and complete system compromise.</p>
</div>

<div class="vulnerability-section">
<h3>4. Insecure Design</h3>

<p><strong>The Problem:</strong> Security flaws in the application's architecture and design.</p>

<p><strong>Common Issues:</strong></p>
<ul>
<li>No rate limiting on login attempts</li>
<li>Insufficient input validation</li>
<li>Missing security controls</li>
</ul>

<p><strong>Prevention:</strong></p>
<ul>
<li>Implement secure design patterns</li>
<li>Use threat modeling</li>
<li>Apply defense in depth principles</li>
</ul>
</div>

<div class="vulnerability-section">
<h3>5. Security Misconfiguration</h3>

<p><strong>The Problem:</strong> Insecure default configurations, incomplete setups, or misconfigured security headers.</p>

<p><strong>Common Mistakes:</strong></p>
<ul>
<li>Default passwords unchanged</li>
<li>Unnecessary features enabled</li>
<li>Missing security headers</li>
</ul>

<p><strong>Best Practices:</strong></p>
<ul>
<li>Change all default credentials</li>
<li>Disable unused features and services</li>
<li>Implement proper security headers</li>
<li>Regular security configuration reviews</li>
</ul>
</div>

<div class="vulnerability-section">
<h3>6. Vulnerable and Outdated Components</h3>

<p><strong>The Problem:</strong> Using components with known vulnerabilities.</p>

<div class="code-box secure">
<strong>Prevention:</strong>
<pre><code># Regularly update dependencies
npm audit
npm update

# Use tools to check for vulnerabilities
npm audit fix</code></pre>
</div>

<p><strong>Best Practices:</strong></p>
<ul>
<li>Maintain an inventory of all components</li>
<li>Monitor for security bulletins</li>
<li>Remove unused dependencies</li>
<li>Use automated vulnerability scanning</li>
</ul>
</div>

<div class="vulnerability-section">
<h3>7. Identification and Authentication Failures</h3>

<p><strong>The Problem:</strong> Weak authentication mechanisms allow attackers to compromise passwords or session tokens.</p>

<div class="code-box vulnerable">
<strong>Vulnerable Implementation:</strong>
<pre><code>if (username === 'admin' && password === 'password') {
  createSession(username);
}</code></pre>
</div>

<div class="code-box secure">
<strong>Secure Implementation:</strong>
<pre><code>const isValid = await bcrypt.compare(password, user.hashedPassword);
if (isValid && rateLimiter.check(username)) {
  createSecureSession(user);
}</code></pre>
</div>

<p><strong>Prevention:</strong></p>
<ul>
<li>Implement multi-factor authentication</li>
<li>Use strong password policies</li>
<li>Secure session management</li>
<li>Account lockout mechanisms</li>
</ul>
</div>

<div class="vulnerability-section">
<h3>8. Software and Data Integrity Failures</h3>

<p><strong>The Problem:</strong> Code and infrastructure that don't protect against integrity violations.</p>

<div class="code-box vulnerable">
<strong>Vulnerable Practice:</strong>
<pre><code>curl https://example.com/script.sh | bash</code></pre>
</div>

<p><strong>Secure Practice:</strong></p>
<ul>
<li>Verify digital signatures</li>
<li>Use trusted repositories</li>
<li>Implement integrity checks</li>
<li>Secure CI/CD pipelines</li>
</ul>
</div>

<div class="vulnerability-section">
<h3>9. Security Logging and Monitoring Failures</h3>

<p><strong>The Problem:</strong> Insufficient logging and monitoring allow attacks to go undetected.</p>

<div class="code-box secure">
<strong>Proper Logging:</strong>
<pre><code>logger.warn('Failed login attempt', {
  username: username,
  ip: req.ip,
  timestamp: new Date(),
  userAgent: req.get('User-Agent')
});</code></pre>
</div>

<p><strong>Best Practices:</strong></p>
<ul>
<li>Log all authentication events</li>
<li>Monitor for suspicious patterns</li>
<li>Set up real-time alerts</li>
<li>Regular log analysis</li>
</ul>
</div>

<div class="vulnerability-section">
<h3>10. Server-Side Request Forgery (SSRF)</h3>

<p><strong>The Problem:</strong> Web application fetches remote resources without validating user-supplied URLs.</p>

<div class="code-box vulnerable">
<strong>Vulnerable Code:</strong>
<pre><code>app.get('/fetch', async (req, res) => {
  const response = await fetch(req.query.url);
  res.send(await response.text());
});</code></pre>
</div>

<div class="code-box secure">
<strong>Secure Implementation:</strong>
<pre><code>const allowedDomains = ['api.trusted-site.com'];
const url = new URL(req.query.url);

if (!allowedDomains.includes(url.hostname)) {
  return res.status(400).send('Invalid URL');
}

const response = await fetch(url.toString());
res.send(await response.text());</code></pre>
</div>
</div>

<h2>Key Takeaways</h2>

<p>Understanding these vulnerabilities is crucial for building secure applications. Each represents a common attack vector that can lead to serious security breaches.</p>

<p><strong>Remember:</strong></p>
<ul>
<li>Security should be built into the development process from the start</li>
<li>Regular security testing and code reviews are essential</li>
<li>Stay updated with the latest security best practices</li>
<li>Use automated tools to identify vulnerabilities early</li>
</ul>

<p>By addressing these OWASP Top 10 risks, developers can significantly improve their application's security posture and protect user data from common attacks.</p>

<hr>

<p><strong>About the Author</strong></p>

<p>Piyush Kumar is a cybersecurity enthusiast and B.Tech Computer Science student specializing in web application security. He has practical experience in vulnerability assessment and secure coding practices.</p>

<p><strong>Connect:</strong> <a href="https://github.com/firewallcracker">GitHub</a> | <a href="https://www.linkedin.com/in/piyush-kumar-37aa7420b/">LinkedIn</a></p>`
      },
      'network-security-fundamentals': {
        title: 'Network Security Fundamentals: A Beginner\'s Guide',
        author: 'Piyush Kumar',
        date: '2024-12-15',
        content: `<h1>Network Security Fundamentals: A Beginner's Guide</h1>

<p>Network security forms the backbone of cybersecurity. Understanding how networks work and how to protect them is essential for anyone entering the cybersecurity field.</p>

<h2>What is Network Security?</h2>

<p>Network security involves protecting computer networks from unauthorized access, misuse, and threats. It encompasses both hardware and software technologies that work together to create a secure network infrastructure.</p>

<h2>Core Network Security Concepts</h2>

<h3>1. Firewalls</h3>
<p>Firewalls act as barriers between trusted internal networks and untrusted external networks. They monitor and control incoming and outgoing network traffic based on predetermined security rules.</p>

<h3>2. Network Segmentation</h3>
<p>Dividing a network into smaller segments limits the spread of attacks and makes it easier to monitor and control access to sensitive resources.</p>

<h3>3. Intrusion Detection Systems (IDS)</h3>
<p>IDS monitor network traffic for suspicious activity and known threats, alerting administrators to potential security breaches.</p>

<h3>4. Virtual Private Networks (VPNs)</h3>
<p>VPNs create secure, encrypted connections over public networks, allowing remote users to access private networks safely.</p>

<h2>Common Network Threats</h2>

<ul>
<li><strong>Man-in-the-Middle Attacks:</strong> Intercepting communications between two parties</li>
<li><strong>DDoS Attacks:</strong> Overwhelming networks with traffic to cause service disruption</li>
<li><strong>Port Scanning:</strong> Probing networks to find open ports and services</li>
<li><strong>Network Sniffing:</strong> Capturing and analyzing network traffic</li>
</ul>

<h2>Essential Network Security Tools</h2>

<div class="code-box">
<strong>Nmap - Network Discovery:</strong>
<pre><code># Scan for open ports
nmap -sS target_ip

# Service version detection
nmap -sV target_ip

# OS detection
nmap -O target_ip</code></pre>
</div>

<div class="code-box">
<strong>Wireshark - Network Analysis:</strong>
<pre><code># Capture HTTP traffic
http

# Filter by IP address
ip.addr == 192.168.1.1

# Filter by port
tcp.port == 80</code></pre>
</div>

<h2>Best Practices</h2>

<ul>
<li>Implement defense in depth with multiple security layers</li>
<li>Regularly update and patch network devices</li>
<li>Use strong authentication and access controls</li>
<li>Monitor network traffic continuously</li>
<li>Conduct regular security assessments</li>
</ul>

<p>Network security is a continuous process that requires constant vigilance and adaptation to new threats. By understanding these fundamentals, you're building a strong foundation for a career in cybersecurity.</p>

<hr>

<p><strong>About the Author:</strong> Piyush Kumar is a cybersecurity student with hands-on experience in network security tools and vulnerability assessment.</p>`
      },
      'python-automation-cybersecurity': {
        title: 'Python Automation in Cybersecurity: My Journey',
        author: 'Piyush Kumar',
        date: '2024-12-05',
        content: `<h1>Python Automation in Cybersecurity: My Journey</h1>

<p>Python has become my go-to language for cybersecurity automation. From network scanning tools to automating security tasks, Python's simplicity and powerful libraries make it perfect for security professionals.</p>

<h2>Why Python for Cybersecurity?</h2>

<ul>
<li><strong>Readable Syntax:</strong> Easy to write and understand security scripts</li>
<li><strong>Rich Libraries:</strong> Extensive collection of security-focused libraries</li>
<li><strong>Cross-Platform:</strong> Works on Windows, Linux, and macOS</li>
<li><strong>Community Support:</strong> Large community of security professionals</li>
</ul>

<h2>Essential Python Libraries for Security</h2>

<h3>1. Scapy - Packet Manipulation</h3>
<div class="code-box">
<pre><code>from scapy.all import *

# Create and send a ping packet
packet = IP(dst="8.8.8.8")/ICMP()
response = sr1(packet)
print(response.summary())</code></pre>
</div>

<h3>2. Requests - HTTP Operations</h3>
<div class="code-box">
<pre><code>import requests

# Check if a website is accessible
response = requests.get("https://example.com")
if response.status_code == 200:
    print("Website is accessible")
else:
    print(f"Error: {response.status_code}")</code></pre>
</div>

<h3>3. Hashlib - Cryptographic Operations</h3>
<div class="code-box">
<pre><code>import hashlib

# Generate SHA-256 hash
data = "password123"
hash_object = hashlib.sha256(data.encode())
hex_dig = hash_object.hexdigest()
print(f"SHA-256: {hex_dig}")</code></pre>
</div>

<h2>My Automation Projects</h2>

<h3>Network Scanner</h3>
<p>I developed a Python-based network scanner that automates port scanning and service detection. This tool helps identify open services and potential vulnerabilities in network infrastructure.</p>

<h3>Log Analysis Script</h3>
<p>Created an automated log analysis tool that parses security logs, identifies suspicious patterns, and generates alerts for potential security incidents.</p>

<h3>Vulnerability Report Generator</h3>
<p>Built a script that automates the generation of vulnerability assessment reports, saving hours of manual work and ensuring consistent formatting.</p>

<h2>Learning Path</h2>

<ol>
<li><strong>Master Python Basics:</strong> Variables, loops, functions, and file handling</li>
<li><strong>Learn Security Libraries:</strong> Scapy, Requests, Paramiko, and others</li>
<li><strong>Practice with CTFs:</strong> Capture The Flag competitions for hands-on experience</li>
<li><strong>Build Projects:</strong> Create your own security tools and scripts</li>
<li><strong>Join Communities:</strong> Engage with other security professionals</li>
</ol>

<h2>Key Takeaways</h2>

<p>Python automation has transformed how I approach cybersecurity tasks. It allows me to:</p>
<ul>
<li>Automate repetitive security tasks</li>
<li>Process large amounts of security data quickly</li>
<li>Create custom tools for specific security needs</li>
<li>Integrate different security tools and systems</li>
</ul>

<p>The journey of learning Python for cybersecurity is ongoing, but the investment in time and effort pays off tremendously in terms of efficiency and capability.</p>

<hr>

<p><strong>Connect with me:</strong> <a href="https://github.com/firewallcracker">GitHub</a> | <a href="https://www.linkedin.com/in/piyush-kumar-37aa7420b/">LinkedIn</a></p>`
      },
      'getting-started-with-cybersecurity': {
        title: 'Getting Started with Cybersecurity',
        author: 'Piyush Kumar',
        date: '2024-11-25',
        content: `<h1>Getting Started with Cybersecurity</h1>

<p>Cybersecurity is becoming increasingly important in our digital world. Whether you're a student, professional looking to switch careers, or simply interested in protecting yourself online, this guide will help you take your first steps into cybersecurity.</p>

<h2>What is Cybersecurity?</h2>

<p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks usually aim to access, change, or destroy sensitive information, extort money from users, or interrupt normal business processes.</p>

<h2>Key Areas in Cybersecurity</h2>

<h3>1. Network Security</h3>
<p>Protecting computer networks from intruders, whether targeted attackers or opportunistic malware.</p>

<h3>2. Application Security</h3>
<p>Keeping software and devices free of threats. A compromised application could provide access to the data it's designed to protect.</p>

<h3>3. Information Security</h3>
<p>Protecting the integrity and privacy of data, both in storage and in transit.</p>

<h3>4. Operational Security</h3>
<p>The processes and decisions for handling and protecting data assets.</p>

<h2>Essential Skills to Develop</h2>

<h3>Technical Skills</h3>
<ul>
<li><strong>Programming:</strong> Python, JavaScript, C++, or Java</li>
<li><strong>Operating Systems:</strong> Linux, Windows, and macOS</li>
<li><strong>Networking:</strong> TCP/IP, DNS, HTTP/HTTPS protocols</li>
<li><strong>Security Tools:</strong> Nmap, Wireshark, Metasploit, Burp Suite</li>
</ul>

<h3>Soft Skills</h3>
<ul>
<li><strong>Problem-Solving:</strong> Analytical thinking and troubleshooting</li>
<li><strong>Communication:</strong> Explaining technical concepts to non-technical stakeholders</li>
<li><strong>Continuous Learning:</strong> Staying updated with latest threats and technologies</li>
<li><strong>Attention to Detail:</strong> Spotting anomalies and potential security issues</li>
</ul>

<h2>Learning Resources</h2>

<h3>Free Resources</h3>
<ul>
<li><strong>Cybrary:</strong> Free cybersecurity training courses</li>
<li><strong>OWASP:</strong> Web application security resources</li>
<li><strong>SANS Reading Room:</strong> Research papers and whitepapers</li>
<li><strong>YouTube Channels:</strong> Professor Messer, Cyber Aces</li>
</ul>

<h3>Hands-On Practice</h3>
<ul>
<li><strong>TryHackMe:</strong> Beginner-friendly cybersecurity challenges</li>
<li><strong>HackTheBox:</strong> Advanced penetration testing practice</li>
<li><strong>VulnHub:</strong> Vulnerable virtual machines for practice</li>
<li><strong>OverTheWire:</strong> Wargames for learning security concepts</li>
</ul>

<h2>Career Paths</h2>

<h3>Entry-Level Positions</h3>
<ul>
<li><strong>Security Analyst:</strong> Monitor and analyze security events</li>
<li><strong>IT Support Specialist:</strong> Provide technical support with security focus</li>
<li><strong>Junior Penetration Tester:</strong> Assist in security assessments</li>
</ul>

<h3>Advanced Positions</h3>
<ul>
<li><strong>Security Engineer:</strong> Design and implement security solutions</li>
<li><strong>Security Architect:</strong> Plan and design security infrastructure</li>
<li><strong>Chief Information Security Officer (CISO):</strong> Lead organizational security strategy</li>
</ul>

<h2>Getting Started Checklist</h2>

<ol>
<li>Learn the fundamentals of networking and operating systems</li>
<li>Set up a home lab with virtual machines</li>
<li>Start with basic security tools like Nmap and Wireshark</li>
<li>Join cybersecurity communities and forums</li>
<li>Practice on platforms like TryHackMe</li>
<li>Consider pursuing relevant certifications</li>
<li>Build a portfolio of projects and write about your learning</li>
</ol>

<h2>Final Thoughts</h2>

<p>Cybersecurity is a field that rewards curiosity, continuous learning, and ethical behavior. Start with the basics, practice regularly, and don't be afraid to ask questions. The cybersecurity community is generally welcoming to newcomers who show genuine interest and dedication.</p>

<p>Remember, everyone starts somewhere. The key is to begin your journey and stay committed to learning and growing in this exciting and important field.</p>

<hr>

<p><strong>Ready to start your cybersecurity journey?</strong> Connect with me on <a href="https://www.linkedin.com/in/piyush-kumar-37aa7420b/">LinkedIn</a> for more tips and resources!</p>`
      },
      'career-cybersecurity-student': {
        title: 'My Cybersecurity Journey: From Student to Security Professional',
        author: 'Piyush Kumar',
        date: '2024-12-15',
        content: `<h1>🛡️ My Cybersecurity Journey: From Student to Security Professional</h1>

<p>As a <strong>B.Tech Computer Science student</strong>, I've always been fascinated by the invisible battles happening in cyberspace — attacks, defenses, and the never-ending chase between hackers and security experts. What began as curiosity soon turned into a purpose: to become a <strong>cybersecurity professional</strong> who protects digital ecosystems.</p>

<h2>🌱 The Beginning: Curiosity Turned Passion</h2>

<p>My journey started in college when I learned about <strong>ethical hacking</strong> and how even a small vulnerability could expose massive amounts of data. I began exploring tools like <strong>Nmap, Wireshark, and Metasploit</strong>, spending hours experimenting in safe, controlled environments such as <strong>Kali Linux</strong>.</p>

<p>Those early days were filled with trial and error — but each successful exploit or patch I implemented taught me something new about how systems think, break, and defend.</p>

<h2>🔐 Learning the Foundations</h2>

<p>To strengthen my fundamentals, I took several online courses and certifications, including:</p>

<ul>
<li>🧾 <strong>Automate Cybersecurity Tasks with Python</strong> – <em>Google (Coursera)</em></li>
<li>🧾 <strong>Building Web Applications in PHP</strong> – <em>University of Michigan (Coursera)</em></li>
<li>🧾 <strong>The Cybersecurity Threat Landscape</strong> – <em>Tech Mahindra Foundation & Skill India Digital</em></li>
<li>🧾 <strong>Junior Security Practitioner Certification</strong> – <em>Dfronix</em></li>
</ul>

<p>Each course added a layer to my understanding — from secure coding to network defense, encryption, and threat analysis.</p>

<h2>💼 My Internship Experience: SkillCraft Technology</h2>

<p>In <strong>September 2025</strong>, I joined <strong>SkillCraft Technology</strong> as a <strong>Cyber Security Intern</strong>. During this internship, I:</p>

<ul>
<li>Performed <strong>vulnerability assessments</strong> following <strong>OWASP Top 10</strong> standards</li>
<li>Used <strong>Nmap</strong> and <strong>Wireshark</strong> for <strong>network scanning and traffic analysis</strong></li>
<li>Analyzed <strong>phishing and malware attacks</strong> to understand real-world threats</li>
<li>Documented vulnerabilities and proposed <strong>mitigation strategies</strong></li>
</ul>

<p>This hands-on experience deepened my confidence — and my <strong>Letter of Recommendation</strong> from the <strong>Tech Lead, Pranav Bansal</strong>, affirmed that I was on the right path.</p>

<h2>💡 Projects That Shaped My Skills</h2>

<p>Over time, I built several projects that combined my love for <strong>coding and cybersecurity</strong>:</p>

<ul>
<li>🔑 <strong>CipherLock</strong> – A secure password management app with encryption and MFA (Patent Ref: <em>202421101247</em>)</li>
<li>🕵️ <strong>Spy Digger</strong> – A Python-based network scanning tool for security analysis and OS detection</li>
<li>🛍️ <strong>Nature Chocolate E-commerce Site</strong> – My experiment in building and securing full-stack applications with Razorpay integration</li>
<li>🧠 <strong>AI-Driven IoT Security Framework (Concept)</strong> – A research idea for applying AI in smart home security</li>
</ul>

<p>Each project not only tested my technical skills but also my ability to think like both a <strong>developer and a defender</strong>.</p>

<h2>🚀 What I Learned Along the Way</h2>

<ul>
<li><strong>Cybersecurity is continuous learning.</strong> New threats appear every day, and so must new defenses</li>
<li><strong>Programming is power.</strong> Knowing how software works helps you secure it better</li>
<li><strong>Community matters.</strong> Engaging with forums, CTFs, and cybersecurity groups helps you grow faster</li>
<li><strong>Documentation is key.</strong> Writing clear reports and documenting findings is as vital as finding bugs</li>
</ul>

<h2>🎯 My Vision Ahead</h2>

<p>My goal is to evolve into a <strong>Cybersecurity Engineer / Security Analyst</strong> who contributes to building <strong>AI-driven security solutions</strong> for modern challenges. I aim to bridge the gap between <strong>software development and cybersecurity</strong>, ensuring every line of code I write or review is secure by design.</p>

<h2>💬 Final Words</h2>

<p>To every student starting out — don't be afraid of the complexity. Every tool, every CVE, every capture-the-flag challenge teaches you something new. Be curious, ethical, and consistent.</p>

<p>Cybersecurity isn't just a field; it's a mindset — and my journey from student to security professional has only just begun.</p>

<hr>

<p><strong>About the Author</strong></p>

<p>Piyush Kumar is a B.Tech Computer Science student at Rungta College of Engineering and Technology, Raipur, specializing in cybersecurity. He has practical experience through multiple internships and has published a patent in password management security.</p>

<p><strong>Connect:</strong> <a href="https://github.com/firewallcracker">GitHub</a> | <a href="https://www.linkedin.com/in/piyush-kumar-37aa7420b/">LinkedIn</a></p>`
      }
    };

    const blogPost = blogPosts[slug];
    if (blogPost) {
      setPost(blogPost);
      setContent(blogPost.content);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link 
            to="/blog" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.date}</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-none blog-content"
        >
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;