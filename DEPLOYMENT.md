# Vercel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- [Vercel account](https://vercel.com) (free tier available)
- GitHub repository with your code
- Node.js 18+ (for local testing)

### 2. Deploy to Vercel

#### Option A: Deploy via Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

#### Option B: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from your project directory
vercel

# For production deployment
vercel --prod
```

### 3. Environment Variables (Optional)
If you need environment variables, add them in:
- Vercel Dashboard → Project Settings → Environment Variables
- Or via CLI: `vercel env add VARIABLE_NAME`

#### Required env for enrollment forwarding
Set these in Vercel to enable the `/api/enroll` proxy to your on‑prem API:

- `ENROLL_API_URL` → HTTPS URL of your on‑prem enroll endpoint exposed via Cloudflare Tunnel, e.g. `https://school-api.example.com/enroll`
- `CF_ACCESS_CLIENT_ID` → Cloudflare Access service token Client ID
- `CF_ACCESS_CLIENT_SECRET` → Cloudflare Access service token Client Secret

These are used by the API route at `src/app/api/enroll/route.ts`.

### 4. Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## 📁 Project Structure
```
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   ├── lib/                 # Utilities and context
│   └── types/               # TypeScript types
├── vercel.json             # Vercel configuration
├── next.config.js          # Next.js configuration
└── package.json            # Dependencies
```

## ⚙️ Configuration Files

### vercel.json
- Optimized for Next.js
- Security headers included
- Static asset caching
- Redirects configured

### next.config.js
- Standalone output for optimal deployment
- Image domains configured
- Ready for production

## 🔧 Build Process
The project builds successfully with:
- Static site generation (SSG)
- Optimized bundle size
- TypeScript compilation
- ESLint validation

## 📊 Performance
- First Load JS: ~108 kB
- Static pages: 4 pages generated
- Optimized for Core Web Vitals

## 🛠️ Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚨 Troubleshooting

### Build Failures
- Check Node.js version (18+ required)
- Ensure all dependencies are installed
- Verify TypeScript compilation

### Deployment Issues
- Check Vercel build logs
- Verify environment variables
- Ensure all imports are correct

### Performance Issues
- Optimize images
- Check bundle size
- Use Next.js Image component

## 📈 Post-Deployment
1. Test all pages and functionality
2. Set up analytics (optional)
3. Configure custom domain
4. Set up monitoring

## 🔄 Continuous Deployment
- Automatic deployments on git push
- Preview deployments for pull requests
- Easy rollback to previous versions

---
**Ready to deploy!** 🎉

