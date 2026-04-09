# Kim Charles A. Emping - Professional Portfolio

A modern, responsive portfolio website showcasing the professional achievements, projects, and skills of Kim Charles A. Emping, a BSIT student from Holy Cross of Davao College.

## Features

✨ **Modern Design**
- Clean, professional, and responsive layout
- Beautiful gradient hero section
- Smooth animations and transitions

📱 **Fully Responsive**
- Mobile-first design
- Works perfectly on all devices
- Optimized navigation for mobile and desktop

🚀 **Performance**
- Built with Next.js for optimal performance
- Static site generation for fast loading
- Deployed on Vercel for global CDN

📋 **Sections**
- **Hero**: Eye-catching introduction
- **About**: Personal bio and education
- **Skills**: Technical expertise organized by category
- **Projects**: Featured work with descriptions
- **Experience**: Work history and internships
- **Contact**: Easy ways to get in touch

## Technologies Used

- **Next.js** - React framework
- **Tailwind CSS** - Styling
- **JavaScript/React** - Frontend logic
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Building for Production

```bash
npm run build
npm run start
```

## Deployment on Vercel

### Option 1: Deploy with Git (Recommended)

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy" and your site will be live!

### Option 2: Deploy with Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and your portfolio will be deployed

### Custom Domain

1. In Vercel dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain and follow the DNS instructions

## File Structure

```
portfolio-next/
├── pages/
│   ├── index.jsx           # Main page
│   ├── _app.jsx            # App wrapper
│   └── _document.jsx       # Document head
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About section
│   ├── Skills.jsx          # Skills section
│   ├── Projects.jsx        # Projects showcase
│   ├── Experience.jsx      # Work experience
│   ├── Contact.jsx         # Contact form
│   └── Footer.jsx          # Footer
├── public/                 # Static assets
│   └── profile.jpg         # Profile picture
├── globals.css             # Global styles
├── tailwind.config.js      # Tailwind config
├── package.json            # Dependencies
└── next.config.js          # Next.js config
```

## Customization

### Update Profile Picture
1. Replace `public/profile.jpg` with your own photo
2. Ensure it's square (recommended 400x400px or larger)

### Update Content
- Edit component files in `components/` folder to update sections
- All data is hardcoded, so modify directly in components

### Change Colors
- Edit `tailwind.config.js` to change color scheme
- Update `globals.css` for custom styles

## Important Notes

- The contact form is a placeholder. For actual email functionality, consider using:
  - Formspree (free)
  - Netlify Forms
  - AWS SES
  - SendGrid

- Images are optimized automatically by Next.js

- The portfolio is fully static and can be deployed anywhere

## Performance Optimization

- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ CSS minification
- ✅ JavaScript bundling
- ✅ Zero JavaScript for static content where possible

## License

This project is open source and available under the MIT License.

## Author

**Kim Charles A. Emping**
- Email: charles.kim.emping@gmail.com
- Phone: +63 909 829 4986
- LinkedIn: [kim-charles-emping](https://www.linkedin.com/in/kim-charles-emping-149138402/)
- GitHub: [WqNTqP](https://github.com/WqNTqP)

---

Built with ❤️ for HCD Graduation Requirements
