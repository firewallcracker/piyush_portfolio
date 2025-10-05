# Personal Portfolio Website

A fully responsive personal portfolio website built with React, TailwindCSS, and Framer Motion.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Easy Content Updates**: JSON-based content management
- **Contact Form**: EmailJS integration for contact functionality
- **Blog System**: Markdown-based blog posts
- **Modern UI**: Clean and professional design

## Pages/Sections

- **Home**: Hero section with introduction and call-to-action buttons
- **About**: Profile, education, certifications, and skills
- **Projects**: Showcase of projects with tech stack and links
- **Blog**: Simple blog system with markdown support
- **Contact**: Contact information and functional contact form

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Content Management

### Personal Information
Edit `src/data/config.json` to update:
- Name and title
- Bio and contact information
- Education details
- Certifications

### Projects
Edit `src/data/projects.json` to:
- Add new projects
- Update existing project details
- Modify tech stacks and descriptions

### Skills
Edit `src/data/skills.json` to:
- Add new skills by category
- Update existing skills
- Create new skill categories

### Blog Posts
Add markdown files to `src/posts/` folder:
- Create `.md` files for new posts
- Follow the existing format for consistency

## EmailJS Setup

To enable the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the EmailJS configuration in `src/pages/Contact.js`:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     formData,
     'YOUR_PUBLIC_KEY'
   );
   ```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
  }
}
```

### Fonts
Add custom fonts in `src/index.css` or update the Tailwind configuration.

## Folder Structure

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Projects.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── data/
│   │   ├── config.json
│   │   ├── projects.json
│   │   └── skills.json
│   ├── posts/
│   │   └── first-post.md
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── README.md
```

## Technologies Used

- **React**: Frontend framework
- **React Router**: Client-side routing
- **TailwindCSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **EmailJS**: Email service for contact form

## Deployment

The project can be deployed to:
- **Vercel**: `npm run build` then deploy the `build` folder
- **Netlify**: Connect your GitHub repository for automatic deployments
- **GitHub Pages**: Use `gh-pages` package for deployment

## License

This project is open source and available under the [MIT License](LICENSE).