# 🚀 Vercel Deployment Guide

Complete step-by-step guide to deploy your portfolio on Vercel for FREE.

## Why Vercel?

- ✅ **Free hosting** - No credit card required
- ✅ **Automatically deploys** when you push to GitHub
- ✅ **Fast global CDN** - Your site loads quickly worldwide
- ✅ **Custom domain** - Link your own domain for free
- ✅ **Built for Next.js** - Made by the creators of Next.js
- ✅ **SSL/HTTPS** - Automatic security certificate

---

## Step 1: Create a GitHub Account (if you don't have one)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Fill in your details and verify your email
4. You're ready to go!

---

## Step 2: Push Your Project to GitHub

### A. Initialize Git (First time only)

```bash
cd c:\Users\Shadow\Desktop\School\Portfolio\portfolio-next
git init
git add .
git commit -m "Initial commit - Portfolio website"
```

### B. Create a New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `portfolio` (or any name you like)
3. Description: "My Professional Portfolio"
4. Choose **Public** (so it's accessible)
5. Click **"Create repository"**

### C. Push Your Code to GitHub

After creating the repository, you'll see commands to run. Copy them and run:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

(Replace `YOUR_USERNAME` with your actual GitHub username)

---

## Step 3: Deploy on Vercel

### A. Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Click **"Continue"** to finish setup

### B. Import Your Repository

1. Click **"New Project"** on the Vercel dashboard
2. Look for your `portfolio` repository and click **"Import"**
3. You'll see the project configuration page

### C. Configure & Deploy

1. **Project Name**: Should be pre-filled (keep it or change it)
2. **Framework Preset**: Should show "Next.js" ✅
3. **Build Command**: Should be `next build` ✅
4. **Output Directory**: Should be `.next` ✅
5. **Environment Variables**: None needed for this portfolio
6. Click **"Deploy"**

### ✅ Deployment Complete!

Vercel will now:
- Build your portfolio
- Run tests
- Deploy to their servers
- Give you a live URL (like `portfolio-123.vercel.app`)

Your portfolio is NOW LIVE! 🎉

---

## Step 4: View Your Live Portfolio

After deployment completes, click the link that shows up. Your portfolio is live!

You can visit it at: `https://your-project-name.vercel.app`

---

## Step 5: Set Up a Custom Domain (Optional)

If you own a domain or want to get one:

### A. Add Custom Domain in Vercel

1. In Vercel dashboard, go to your project
2. Click **Settings** → **Domains**
3. Enter your domain name and click **"Add Domain"**

### B. Update DNS Settings

Vercel will give you **DNS records** to add to your domain provider.

1. Log in to your domain provider (GoDaddy, Namecheap, etc.)
2. Find **DNS Settings** or **Nameservers**
3. Add the records Vercel provides
4. Wait 24-48 hours for DNS to propagate

Now your portfolio is at: `https://yourdomain.com` 🌐

---

## Step 6: Update Your Portfolio

Every time you make changes:

```bash
git add .
git commit -m "Update portfolio - describe your changes"
git push
```

Vercel automatically detects the push and **redeploys** your site! Just wait a few minutes and your changes will be live.

---

## Updating Profile Picture

1. Replace/Update your profile photo:
   - Save image as `profile.jpg` in the `public/` folder
   - Recommended size: 400x400px or larger
   - Recommended format: JPG, PNG, or WebP

2. Commit and push:
   ```bash
   git add public/profile.jpg
   git commit -m "Update profile picture"
   git push
   ```

3. Vercel redeploys automatically ✅

---

## Troubleshooting

### Build Fails

```bash
# Clear Next.js cache and try again
rm -r .next
npm run build
```

### Changes not showing up

1. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
2. Wait a few minutes for Vercel to redeploy
3. Check Vercel dashboard for build status

### Domain not working

1. Check DNS records are correctly added
2. Wait 24-48 hours for propagation
3. Visit [whatsmydns.net](https://whatsmydns.net) to verify DNS

---

## Project Structure Reminder

```
portfolio-next/
├── components/      # React components
├── pages/          # Next.js pages
├── public/         # Static files (images, etc.)
├── package.json    # Dependencies
└── README.md       # Documentation
```

---

## Vercel Dashboard Features

In your Vercel dashboard, you can:

- 📊 **Analytics** - See how many people visit
- 🔍 **Deployments** - See all your deployed versions
- ⚙️ **Settings** - Configure your project
- 🌐 **Domains** - Manage custom domains
- 📝 **Logs** - Debug any issues

---

## Support & Help

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Community**: Ask on Stack Overflow or GitHub Discussions

---

## Next Steps

After deployment:

1. ✅ Share your portfolio link with recruiters/employers
2. ✅ Add it to your LinkedIn profile
3. ✅ Send it in job applications
4. ✅ Keep it updated with new projects
5. ✅ Continue building awesome things!

---

**Congratulations! Your professional portfolio is now live! 🚀**

For questions, refer to the main [README.md](./README.md) or Vercel's documentation.
