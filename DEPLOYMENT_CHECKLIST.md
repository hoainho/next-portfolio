# ✅ CLOUDFLARE PAGES DEPLOYMENT CHECKLIST

**Project**: next-portfolio (hoainho.info)
**Status**: Ready for deployment
**Last Updated**: 2025-01-29

---

## 📋 STEP-BY-STEP DEPLOYMENT GUIDE

### Phase 1: Gather Required Information ⏱️ 5-10 minutes

**What you need**:

```
☐ Cloudflare Account (free or paid)
  → https://dash.cloudflare.com

☐ Cloudflare Account ID
  → Dashboard → Home → Right sidebar → Account ID
  → Format: abc123def456...
  → Store in: ACCOUNT_ID=_________________

☐ Cloudflare Zone ID
  → Dashboard → hoainho.info → Overview → Right sidebar → Zone ID
  → Format: xyz789abc123...
  → Store in: ZONE_ID=_________________

☐ Cloudflare API Token
  → Dashboard → My Profile → API Tokens → Create Token
  → Use template: "Edit Cloudflare Workers" OR
  → Custom: Permissions = Zone > Cache Purge, Resource = Zone > hoainho.info
  → Store in: API_TOKEN=_________________

☐ GitHub Personal Access Token (optional, for CI/CD)
  → GitHub.com → Settings → Developer settings → Personal access tokens → Generate
  → Scopes: repo, workflow
  → Store in: GITHUB_TOKEN=_________________
```

✅ **Checklist**: Have all 3 (or 4) tokens ready before proceeding!

---

### Phase 2: Create Cloudflare Pages Project ⏱️ 10-15 minutes

**Steps**:

1. **Go to Cloudflare Dashboard**

   ```
   https://dash.cloudflare.com
   ```

2. **Navigate to Pages**

   ```
   Left sidebar → Workers & Pages → Pages
   ```

3. **Create Application**

   ```
   Button: "Create application"
   ```

4. **Connect to Git**

   ```
   Option: "Connect to Git"
   → Authorize GitHub
   → Select repository: hoainho/next-portfolio
   → Confirm permissions
   ```

5. **Configure Build Settings**

   ```
   Production branch:     main
   Framework preset:      Next.js (auto-detected)
   Build command:         npm run build
   Build output dir:      (leave empty)
   Root directory:        (leave empty)
   ```

6. **Click "Save and Deploy"**
   - Cloudflare starts first build
   - May take 2-5 minutes

✅ **Checklist**: Project created on Cloudflare

---

### Phase 3: Add Environment Variables ⏱️ 10-15 minutes

**After first deployment (even if it fails), add env vars**:

1. **Go to Project Settings**

   ```
   Dashboard → Pages → next-portfolio → Settings → Environment variables
   ```

2. **Add Variables** (Copy-paste from table below)

   **Production Environment**:

   ```
   NODE_ENV                                   = production          (Plain)
   CF_ACCOUNT_ID                              = [your account id]   (Secret)
   CF_ZONE_ID                                 = [your zone id]      (Secret)
   CF_API_TOKEN                               = [your api token]    (Secret)
   NEXT_PUBLIC_WORDPRESS_API_URL              = https://blog.thnkandgrow.com/graphql                                                    (Plain)
   NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN   = [your wp token]     (Secret)
   NEXT_PUBLIC_REVALIDATION_SECRET            = [your secret]       (Secret)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID             = service_qzoauqn     (Plain)
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID            = template_brtlo2c    (Plain)
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY             = 5iCt0h7Wr2UD3S5Kr   (Plain)
   NEXT_PUBLIC_LOGO                           = https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg                         (Plain)
   NEXT_PUBLIC_AVATAR_URL                     = https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/avatar-new.png                   (Plain)
   NEXT_PUBLIC_CLOUDFRONT_URL                 = https://d25ajqv6ijzi49.cloudfront.net                                                  (Plain)
   NEXT_PUBLIC_BLOG_API                       = https://blog.thnkandgrow.com/wp-json/wp/v2                                             (Plain)
   NEXT_PUBLIC_REVALIDATE_POSTS               = 600                 (Plain)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_URL           = https://res.cloudinary.com/dgzdswdgg/image/upload                                      (Plain)
   ```

3. **For Each Variable**:
   - Click "+ Add variable"
   - Enter **Variable name** from table
   - Select **Type**: Plain or Secret
   - Enter **Value**
   - Click "Save"

4. **Verify All Variables Added**
   - Count should be 16 total

✅ **Checklist**: All 16 environment variables added

---

### Phase 4: Update Domain DNS (if needed) ⏱️ 5-30 minutes

**Option A: Already using Cloudflare nameservers** (Easiest)

```
Skip this - DNS is already managed by Cloudflare
Just add domain in Cloudflare Dashboard
```

**Option B: Using external registrar** (e.g., NameCheap, GoDaddy)

1. **Get CNAME target from Cloudflare**

   ```
   Dashboard → Pages → next-portfolio → Overview
   → Copy the "pages.dev" domain (e.g., next-portfolio.pages.dev)
   ```

2. **Add CNAME record at registrar**

   ```
   Host:   @  (or your domain)
   Type:   CNAME
   Value:  next-portfolio.pages.dev
   TTL:    Auto (or 3600)

   Example for NameCheap:
   - Host: @
   - Type: CNAME Record
   - Value: next-portfolio.pages.dev
   - TTL: Automatic
   ```

3. **Verify DNS propagation** (5-30 min)

   ```bash
   nslookup hoainho.info
   # Should show: next-portfolio.pages.dev

   # Or check online: https://www.nslookup.io/
   ```

✅ **Checklist**: Domain points to Cloudflare Pages

---

### Phase 5: Trigger Rebuild ⏱️ 2-5 minutes

After adding environment variables, rebuild with new vars:

1. **Go to Deployments**

   ```
   Dashboard → Pages → next-portfolio → Deployments
   ```

2. **Find Latest Build**

   ```
   Click on the latest deployment
   ```

3. **Retry Build**

   ```
   Button: "Retry Build"
   OR
   Push to GitHub (auto-triggers rebuild)
   ```

4. **Monitor Build Progress**
   ```
   Watch for ✅ "Build succeeded"
   Check logs if it fails
   ```

✅ **Checklist**: Rebuild completed with env vars

---

### Phase 6: Test Deployment ⏱️ 10-15 minutes

**Critical Tests** (must all pass):

```bash
# Test 1: Homepage loads
curl -I https://hoainho.info/
# Expected: HTTP/1.1 200 OK

# Test 2: Blog page loads
curl -I https://hoainho.info/blog
# Expected: HTTP/1.1 200 OK

# Test 3: GraphQL API works
curl -X POST https://hoainho.info/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}'
# Expected: {"data":{"__typename":"Query"}}

# Test 4: Cache purge endpoint works
SECRET="your_secret_here"
curl "https://hoainho.info/api/revalidate?secret=$SECRET&paths=/blog"
# Expected: {"success":true,"message":"Cache purged successfully"}

# Test 5: Performance check
lighthouse https://hoainho.info/ --view
```

**Manual Tests** (in browser):

- [ ] Visit https://hoainho.info → Homepage loads
- [ ] Visit https://hoainho.info/blog → Blog page loads with posts
- [ ] Click on a blog post → Post detail page loads
- [ ] Visit https://hoainho.info/about → About page loads
- [ ] Visit https://hoainho.info/contact → Contact page loads
- [ ] Fill contact form → Email sends successfully
- [ ] Check console (F12) → No JavaScript errors
- [ ] Check Network tab (F12) → No 404 errors for resources

✅ **Checklist**: All tests pass, site is live!

---

## 🎯 QUICK CREDENTIALS REFERENCE

**Save these securely** (e.g., 1Password, LastPass, etc.):

```
CLOUDFLARE_ACCOUNT_ID:      ________________________
CLOUDFLARE_ZONE_ID:         ________________________
CLOUDFLARE_API_TOKEN:       ________________________
CF_REVALIDATION_SECRET:     ________________________
```

---

## 🚨 IF BUILD FAILS

**Check build logs**:

```
Dashboard → Pages → next-portfolio → Deployments → [Latest] → Build Logs
```

**Common issues**:

| Issue                                 | Solution                                                                                                                     |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `Build error: command not found: npm` | Cloudflare will use Node auto-detection. Check [this](https://developers.cloudflare.com/pages/platform/build-configuration/) |
| `Missing environment variable`        | Add to Dashboard → Settings → Environment variables                                                                          |
| `Build takes >20 minutes`             | Check for infinite loops. Rebuild with fresh git push                                                                        |
| `403 Forbidden errors`                | Check file permissions in GitHub repo                                                                                        |

**Debug steps**:

```bash
# 1. Test locally
npm install
npm run build

# 2. Check for errors
npm run lint
npx tsc --noEmit

# 3. Verify git
git log --oneline -5
git status

# 4. Push to GitHub
git push origin master

# 5. Watch Cloudflare Dashboard
Dashboard → Pages → Deployments → Watch real-time logs
```

---

## 📊 SUCCESS CRITERIA

After deployment, verify:

- [ ] **Build**: ✅ "Build succeeded" in Dashboard
- [ ] **Deploy**: ✅ "Deploy succeeded" in Dashboard
- [ ] **Domain**: ✅ https://hoainho.info resolves
- [ ] **Homepage**: ✅ Loads in <2 seconds
- [ ] **Blog**: ✅ Posts display correctly
- [ ] **APIs**: ✅ GraphQL and revalidate respond
- [ ] **Forms**: ✅ Contact form sends email
- [ ] **HTTPS**: ✅ All pages use HTTPS
- [ ] **Console**: ✅ No JavaScript errors
- [ ] **Performance**: ✅ Lighthouse >80

---

## 🎓 NEXT STEPS AFTER DEPLOYMENT

**Week 1** (Monitoring):

- Monitor error rates in Cloudflare Dashboard
- Check visitor analytics
- Test all features regularly
- Keep Vercel active as backup

**Week 2+** (Optimization):

- Review Cloudflare analytics
- Optimize based on metrics
- Decommission Vercel if all stable
- Setup scheduled cache purges if needed

---

## 📞 NEED HELP?

**Cloudflare Docs**: https://developers.cloudflare.com/pages/
**Next.js Docs**: https://nextjs.org/docs
**GitHub Issues**: https://github.com/hoainho/next-portfolio/issues

---

## 📝 DEPLOYMENT LOG

```
Date Started:    _______________
Date Completed:  _______________
Deployed by:     _______________
Status:          ☐ Success  ☐ Issues
Notes:           _______________
```

---

**Ready to deploy? Follow the checklist above step-by-step! 🚀**
