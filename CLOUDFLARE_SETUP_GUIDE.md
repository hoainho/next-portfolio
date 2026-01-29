# 🚀 CLOUDFLARE PAGES DEPLOYMENT GUIDE

**Project**: next-portfolio (hoainho.info)
**Approach**: Server-rendered with Cloudflare Pages Functions
**Status**: Ready for deployment

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### Phase 1: Prepare Cloudflare Account

- [ ] **Create/Access Cloudflare Account**
  - Go to: https://dash.cloudflare.com
  - Sign up or login with your Cloudflare account

- [ ] **Add Domain to Cloudflare**
  - Dashboard → Add site
  - Enter: `hoainho.info`
  - Cloudflare will assign nameservers
  - Update nameservers at your domain registrar
  - ⏳ Wait for DNS propagation (24-48 hours)

- [ ] **Collect Required Information**

  Get from Cloudflare Dashboard → [Your Domain]:

  ```
  1. ACCOUNT_ID
     Dashboard → Account Home → Copy Account ID (right sidebar)

  2. ZONE_ID
     Dashboard → [hoainho.info] → Overview → Zone ID (right sidebar)

  3. API_TOKEN (for cache purge)
     Dashboard → My Profile → API Tokens → Create Token
     - Template: "Edit Cloudflare Workers"
     - OR Custom:
       * Permissions: Zone > Cache Purge
       * Resources: Zone > hoainho.info
     - Copy the token value

  4. GITHUB_TOKEN (for CI/CD)
     GitHub.com → Settings → Developer settings → Personal access tokens
     - Scopes: repo, workflow
     - Copy the token value
  ```

---

## 🔐 ENVIRONMENT VARIABLES SETUP

### For Local Development (`.env.local` - DON'T COMMIT)

```bash
# Create .env.local file
cat > .env.local << 'EOF'
# Cloudflare
CF_ACCOUNT_ID=your_account_id_here
CF_ZONE_ID=your_zone_id_here
CF_API_TOKEN=your_api_token_here

# WordPress
NEXT_PUBLIC_WORDPRESS_API_URL=https://blog.thnkandgrow.com/graphql
NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN=your_token_here

# Revalidation
NEXT_PUBLIC_REVALIDATION_SECRET=your_secret_here

# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_qzoauqn
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_brtlo2c
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=5iCt0h7Wr2UD3S5Kr

# Other
NODE_ENV=production
NEXT_PUBLIC_REVALIDATE_POSTS=600
EOF
```

**⚠️ IMPORTANT**: Never commit `.env.local` - it's in `.gitignore`

### For Cloudflare Dashboard

1. **Go to**: Dashboard → Pages → next-portfolio → Settings → Environment variables

2. **Add Environment Variables**:

| Variable Name                              | Type       | Value                                                                 | Required |
| ------------------------------------------ | ---------- | --------------------------------------------------------------------- | -------- |
| `NODE_ENV`                                 | Plain      | `production`                                                          | ✅       |
| `CF_ACCOUNT_ID`                            | **Secret** | [from Cloudflare]                                                     | ✅       |
| `CF_ZONE_ID`                               | **Secret** | [from Cloudflare]                                                     | ✅       |
| `CF_API_TOKEN`                             | **Secret** | [from Cloudflare]                                                     | ✅       |
| `NEXT_PUBLIC_WORDPRESS_API_URL`            | Plain      | `https://blog.thnkandgrow.com/graphql`                                | ✅       |
| `NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN` | **Secret** | [your token]                                                          | ✅       |
| `NEXT_PUBLIC_REVALIDATION_SECRET`          | **Secret** | [your secret]                                                         | ✅       |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`           | Plain      | `service_qzoauqn`                                                     | ✅       |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`          | Plain      | `template_brtlo2c`                                                    | ✅       |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`           | Plain      | `5iCt0h7Wr2UD3S5Kr`                                                   | ✅       |
| `NEXT_PUBLIC_LOGO`                         | Plain      | `https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg`      | ✅       |
| `NEXT_PUBLIC_AVATAR_URL`                   | Plain      | `https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/avatar-new.png` | ✅       |
| `NEXT_PUBLIC_CLOUDFRONT_URL`               | Plain      | `https://d25ajqv6ijzi49.cloudfront.net`                               | ✅       |
| `NEXT_PUBLIC_BLOG_API`                     | Plain      | `https://blog.thnkandgrow.com/wp-json/wp/v2`                          | ✅       |
| `NEXT_PUBLIC_REVALIDATE_POSTS`             | Plain      | `600`                                                                 | ✅       |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_URL`         | Plain      | `https://res.cloudinary.com/dgzdswdgg/image/upload`                   | ✅       |

**Note**:

- Variables starting with `NEXT_PUBLIC_` are accessible in browser (safe for public values)
- Variables without prefix are server-only (safe for secrets)
- Use **Secret** type for sensitive values

---

## 🔧 CLOUDFLARE PAGES PROJECT SETUP

### Method 1: GitHub Integration (Recommended)

1. **Go to**: https://dash.cloudflare.com → Pages → Create application

2. **Connect to Git**:
   - Click "Connect to Git"
   - Authorize GitHub
   - Select repository: `hoainho/next-portfolio`
   - Allow Cloudflare access

3. **Configure Build Settings**:

   ```
   Production branch:     main
   Framework preset:      Next.js
   Build command:         npm run build
   Build output dir:      (leave default or .next)
   Root directory:        (leave default)
   ```

4. **Add Environment Variables** (same as table above)

5. **Click Deploy**
   - Cloudflare auto-builds from GitHub
   - Watch build progress in Dashboard → Deployments

### Method 2: Manual CLI Deploy (Testing)

```bash
# Install Wrangler CLI
npm install -g @cloudflare/wrangler

# Login to Cloudflare
wrangler login

# Update wrangler.toml with your credentials
cat > wrangler.toml << 'EOF'
name = "next-portfolio"
account_id = "YOUR_ACCOUNT_ID"
zone_id = "YOUR_ZONE_ID"
type = "javascript"
workers_dev = true

build = { command = "npm run build", cwd = "." }
main = "server.js"

[env.production]
name = "next-portfolio-prod"
vars = { ENVIRONMENT = "production" }
EOF

# Deploy
wrangler pages deploy .next --project-name next-portfolio --branch main
```

---

## ✅ POST-DEPLOYMENT TESTS

### Test 1: Homepage Loads

```bash
curl -I https://hoainho.info/
# Should return: HTTP/1.1 200 OK
```

### Test 2: Blog Page Works

```bash
curl -I https://hoainho.info/blog
# Should return: HTTP/1.1 200 OK
```

### Test 3: API GraphQL Endpoint

```bash
curl -X POST https://hoainho.info/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}'
# Should return: {"data":{"__typename":"Query"}}
```

### Test 4: Cache Purge Endpoint

```bash
SECRET="your_secret_here"
curl "https://hoainho.info/api/revalidate?secret=$SECRET&paths=/blog,/about"
# Should return: {"success":true,"message":"Cache purged successfully"}
```

### Test 5: Performance Check

```bash
# Install lighthouse
npm install -g lighthouse

# Run audit
lighthouse https://hoainho.info/ --view
```

---

## 🚨 COMMON ISSUES & SOLUTIONS

### Issue 1: Build Fails

**Check**:

```bash
# View build logs in Cloudflare Dashboard:
Dashboard → Pages → next-portfolio → Deployments → [Latest] → Build Logs
```

**Common causes**:

- Missing environment variables
- Node version mismatch
- Missing dependencies

**Fix**:

```bash
# Locally test the build
npm install
npm run build

# Check for errors
npm run lint
npx tsc --noEmit
```

### Issue 2: Environment Variables Not Loading

**Check**:

```bash
# In browser console on the page:
console.log(process.env.NEXT_PUBLIC_BLOG_API)
# Should NOT be undefined
```

**Fix**:

1. Verify in Dashboard → Environment Variables
2. Check spelling (typos matter!)
3. Rebuild: Dashboard → Deployments → [Latest] → Retry Build

### Issue 3: GraphQL API Returns 500

**Check**:

```bash
curl -X POST https://hoainho.info/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}'
```

**Debug**:

- Check WordPress API is accessible: `curl https://blog.thnkandgrow.com/graphql`
- Verify token in env vars is correct
- Check Cloudflare logs for errors

### Issue 4: Cache Purge Not Working

**Check**:

```bash
curl "https://hoainho.info/api/revalidate?secret=WRONG_SECRET&paths=/blog"
# Should return: 401 Unauthorized
```

**Fix**:

- Verify `CF_API_TOKEN` has Cache Purge permission
- Verify `CF_ZONE_ID` is correct
- Check token hasn't expired

---

## 📊 DEPLOYMENT CHECKLIST

Before going live:

- [ ] Build succeeds locally: `npm run build`
- [ ] No TypeScript errors: `npx tsc --noEmit`
- [ ] All env vars set in Cloudflare Dashboard
- [ ] GitHub integration connected
- [ ] First deployment succeeded
- [ ] Homepage loads: `curl -I https://hoainho.info/`
- [ ] Blog page works: `curl -I https://hoainho.info/blog`
- [ ] API endpoint responds: GraphQL POST request
- [ ] Performance acceptable: Lighthouse score
- [ ] DNS points to Cloudflare: `nslookup hoainho.info`

---

## 🎯 FINAL STEPS TO DEPLOY

### Step 1: Prepare Credentials

**You need to provide**:

```
1. CLOUDFLARE_ACCOUNT_ID     = ___________________
2. CLOUDFLARE_ZONE_ID        = ___________________
3. CLOUDFLARE_API_TOKEN      = ___________________
```

**Where to find**:

- Account ID: Dashboard → Profile → Account ID
- Zone ID: Dashboard → hoainho.info → Overview → Zone ID
- API Token: Dashboard → My Profile → API Tokens → Create Token (type: Edit Cloudflare Workers)

### Step 2: Create Cloudflare Pages Project

Go to: https://dash.cloudflare.com/pages

1. Click "Create application" → "Connect to Git"
2. Select: `hoainho/next-portfolio`
3. Build command: `npm run build`
4. Add environment variables (from table above)
5. Deploy!

### Step 3: Monitor Deployment

Dashboard → Pages → next-portfolio → Deployments

Watch for:

- ✅ Build succeeded
- ✅ Deploy succeeded
- ✅ Production URL assigned

### Step 4: Update DNS (if needed)

If using CNAME method:

- Add CNAME record pointing to: `[your-project].pages.dev`
- TTL: 3600 or Auto
- Verify: `nslookup hoainho.info`

---

## 📞 NEXT STEPS

**After deployment is live**:

1. Monitor first 24 hours for errors
2. Test all features (blog, API, contact form)
3. Check analytics in Cloudflare Dashboard
4. Keep Vercel deployment active as backup for 1 week
5. After confirming stability, decommission Vercel

---

**Questions? Check the detailed guide in `CLOUDFLARE_MIGRATION_GUIDE.md`**
