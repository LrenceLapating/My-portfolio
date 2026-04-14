# 🚀 Vercel Deployment Guide - One Piece Portfolio

## ✅ Pre-Deployment Checklist

Before deploying, make sure you have:
- [x] All images in the `images` folder
- [x] Updated your name in `index.html` (search "YOUR NAME HERE")
- [x] Updated all social media links
- [x] Tested the portfolio locally in your browser
- [x] All files saved

## 📁 Required Files for Deployment

Your portfolio includes:
```
portfolio/
├── images/
│   ├── Gradpic Cut.jpg
│   ├── jolly-roger.png
│   ├── luffy.png
│   ├── zoro.png
│   ├── sanji.png
│   └── nami.png
├── index.html
├── styles.css
├── script.js
└── vercel.json
```

## 🌐 Step-by-Step Vercel Deployment

### Method 1: Deploy via Vercel Website (Easiest)

#### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `onepiece-portfolio` (or any name you like)
4. Keep it **Public**
5. **DO NOT** initialize with README
6. Click **"Create repository"**

#### Step 2: Upload Your Files to GitHub

**Option A: Using GitHub Website (No Git Required)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop ALL your portfolio files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `vercel.json`
   - The entire `images` folder
3. Write commit message: "Initial commit - One Piece Portfolio"
4. Click **"Commit changes"**

**Option B: Using Git Command Line**

```bash
# Navigate to your portfolio folder
cd path/to/your/portfolio

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - One Piece Portfolio"

# Add remote (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/onepiece-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 3: Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

5. On Vercel Dashboard:
   - Click **"Add New..."** → **"Project"**
   - Find your `onepiece-portfolio` repository
   - Click **"Import"**

6. Configure Project:
   - **Project Name**: `onepiece-portfolio` (or customize)
   - **Framework Preset**: Leave as "Other"
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - Click **"Deploy"**

7. Wait 30-60 seconds for deployment

8. **Done!** 🎉 Your portfolio is live!
   - You'll get a URL like: `onepiece-portfolio.vercel.app`
   - Click **"Visit"** to see your live portfolio

### Method 2: Deploy via Vercel CLI (Advanced)

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Login to Vercel

```bash
vercel login
```

#### Step 3: Deploy

```bash
# Navigate to your portfolio folder
cd path/to/your/portfolio

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - What's your project's name? onepiece-portfolio
# - In which directory is your code located? ./
```

#### Step 4: Deploy to Production

```bash
vercel --prod
```

## 🎨 Custom Domain (Optional)

### Add Your Own Domain

1. In Vercel Dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

### Free Vercel Domain

Your portfolio automatically gets:
- `your-project-name.vercel.app`
- You can change the project name in Settings

## 🔄 Updating Your Portfolio

### After Making Changes:

**If using GitHub:**
1. Update your files locally
2. Push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push
   ```
3. Vercel automatically redeploys! ✨

**If using Vercel CLI:**
```bash
vercel --prod
```

## ⚙️ Environment Variables (If Needed)

If you add any API keys or secrets later:

1. Go to Vercel Dashboard → Your Project
2. Click **"Settings"** → **"Environment Variables"**
3. Add your variables
4. Redeploy

## 🐛 Troubleshooting

### Images Not Showing
- Check that `images` folder is uploaded
- Verify image paths in `index.html` are correct
- Check browser console (F12) for errors

### 404 Error
- Make sure `index.html` is in the root directory
- Check `vercel.json` is present

### Styles Not Loading
- Verify `styles.css` is in the same folder as `index.html`
- Clear browser cache (Ctrl+F5)

### Deployment Failed
- Check all files are committed to GitHub
- Verify no syntax errors in HTML/CSS/JS
- Check Vercel deployment logs for errors

## 📊 Analytics (Optional)

Enable Vercel Analytics:
1. Go to your project in Vercel
2. Click **"Analytics"** tab
3. Click **"Enable"**
4. See visitor stats, page views, etc.

## 🔒 Security Headers (Optional)

Add to `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 📱 Testing Your Deployment

After deployment, test:
- ✅ All pages load correctly
- ✅ Images display properly
- ✅ Navigation works
- ✅ Social media links work
- ✅ Project links work
- ✅ Flip cards work on mobile
- ✅ Responsive design on different devices

## 🎉 Your Portfolio is Live!

Share your portfolio:
- Add to your resume
- Share on LinkedIn
- Add to GitHub profile
- Share on social media

Example URL: `https://onepiece-portfolio.vercel.app`

---

**Need Help?**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- Check deployment logs in Vercel Dashboard

**Congratulations! Your One Piece portfolio is now live! 🏴‍☠️**
