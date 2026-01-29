# 🚀 HƯỚNG DẪN MIGRATE NEXT.JS TỪ VERCEL SANG CLOUDFLARE PAGES

**Status**: ✅ Ready for Implementation
**Project**: next-portfolio (hoainho.info)
**Framework**: Next.js 14.2.3
**Date**: 2025-01-29

---

## 📋 MỤC LỤC

1. [Phân tích khả năng tương thích](#1-phân-tích-khả-năng-tương-thích)
2. [Chuẩn bị mã nguồn](#2-chuẩn-bị-mã-nguồn)
3. [Cấu hình Cloudflare Pages](#3-cấu-hình-cloudflare-pages)
4. [Xử lý API Routes & SSR](#4-xử-lý-api-routes--ssr)
5. [Static Assets, Images & Routing](#5-static-assets-images--routing)
6. [Deployment & Validation](#6-deployment--validation)
7. [Best Practices & Logging](#7-best-practices--logging)
8. [Troubleshooting Guide](#8-troubleshooting-guide)
9. [Implementation Checklist](#9-implementation-checklist--risk-assessment)
10. [Quick Command Reference](#10-quick-command-reference)

---

## 1. PHÂN TÍCH KHẢ NĂNG TƯƠNG THÍCH

### 1.1 Hiện Trạng Dự Án

| Yếu tố                  | Chi tiết                                 | Status |
| ----------------------- | ---------------------------------------- | ------ |
| **Framework**           | Next.js 14.2.3 (stable)                  | ✅     |
| **Rendering**           | Static Export (`output: 'export'`)       | ✅     |
| **Images**              | Unoptimized (S3 + CloudFront)            | ✅     |
| **API Routes**          | 2 routes (/api/graphql, /api/revalidate) | ✅     |
| **Runtime**             | Edge Runtime cho GraphQL route           | ✅     |
| **Middleware**          | Không sử dụng                            | ✅     |
| **@vercel/\* packages** | Không có dependencies                    | ✅     |

**Kết luận**: ✅ **Hoàn toàn khả thi trên Cloudflare Pages**

### 1.2 So sánh Vercel vs Cloudflare Pages

| Feature                | Vercel      | Cloudflare                   | Migration Path      |
| ---------------------- | ----------- | ---------------------------- | ------------------- |
| **Static Export**      | ✅          | ✅                           | Direct              |
| **SSR (full)**         | ✅          | ⚠️ Partial                   | Adapter needed      |
| **ISR**                | ✅ Native   | ❌ No native                 | Manual webhook      |
| **API Routes**         | ✅          | ✅ Functions                 | Direct              |
| **Edge Runtime**       | ✅          | ✅                           | Direct              |
| **Image Optimization** | ✅ Built-in | ❌                           | Already disabled ✅ |
| **Execution Time**     | 60s         | 30s (Pages) / 600s (Workers) | OK for this project |

### 1.3 Điểm Mạnh cho Migration

- ✅ `output: 'export'` → Perfect cho static hosting
- ✅ Không middleware → Không cần Cloudflare Workers adaptation
- ✅ Không Vercel-lock dependencies
- ✅ API routes minimal (2 only)
- ✅ Edge runtime compatible

### 1.4 Thách Thức

- ⚠️ **Revalidation API** → Vercel ISR không tồn tại trên CF (need webhook)
- ⚠️ **Cache invalidation** → Approach khác nhau
- ⚠️ **Secrets management** → Current `.env` có secrets (need rotation)

---

## 2. CHUẨN BỊ MÃ NGUỒN

### 2.1 Pre-migration Checklist

```bash
# Step 1: Backup hiện tại
git branch backup/vercel-prod
git push origin backup/vercel-prod

# Step 2: Kiểm tra build
npm run build
ls -la out/  # Verify static export

# Step 3: Lint & type check
npm run lint
npx tsc --noEmit
```

### 2.2 next.config.mjs - Hiện Tại (✅ Đã tốt)

```javascript
/** @type {import('next').NextConfig} */
import path from "path";
import withPlaiceholder from "@plaiceholder/next";

const nextConfig = {
  output: "export", // ✅ Perfect for CF Pages
  images: {
    unoptimized: true, // ✅ Using S3/CloudFront
  },
  transpilePackages: ["highlight.js"],
  sassOptions: {
    includePaths: [path.join(process.env.PWD, "styles")],
  },
  productionBrowserSourceMaps: true,
};

export default withPlaiceholder(nextConfig);
```

**Không cần thay đổi** - cấu hình đã tối ưu cho Cloudflare.

### 2.3 Environment Variables - ⚠️ CẢNH BÁO BẢO MẬT

**Hiện tại có secrets trong `.env`**:

- `NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN`
- `NEXT_PUBLIC_REVALIDATION_SECRET`

**Action cần thiết**:

1. Rotate secrets (regenerate từ WordPress)
2. Remove `.env` from git history:
   ```bash
   git rm --cached .env
   echo ".env" >> .gitignore
   git commit -m "Remove .env with secrets from git history"
   ```
3. Store secrets an toàn (1Password, Bitwarden, etc.)

---

## 3. CẤU HÌNH CLOUDFLARE PAGES

### 3.1 Tạo Project (Option A: GitHub Integration)

```
1. Đăng nhập: https://dash.cloudflare.com
2. Workers & Pages → Create Application
3. Connect to Git → Select hoainho/next-portfolio
4. Build settings:
   - Framework: Next.js
   - Build command: npm run build
   - Build output directory: out
   - Root directory: .
```

### 3.2 Environment Variables

Add to Cloudflare Dashboard (Project Settings → Environment Variables):

| Variable                                   | Type       | Value                                                                 |
| ------------------------------------------ | ---------- | --------------------------------------------------------------------- |
| `NODE_ENV`                                 | Plain      | `production`                                                          |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`           | Plain      | `service_qzoauqn`                                                     |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`          | Plain      | `template_brtlo2c`                                                    |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`           | Plain      | `5iCt0h7Wr2UD3S5Kr`                                                   |
| `NEXT_PUBLIC_LOGO`                         | Plain      | `https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg`      |
| `NEXT_PUBLIC_AVATAR_URL`                   | Plain      | `https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/avatar-new.png` |
| `NEXT_PUBLIC_CLOUDFRONT_URL`               | Plain      | `https://d25ajqv6ijzi49.cloudfront.net`                               |
| `NEXT_PUBLIC_BLOG_API`                     | Plain      | `https://blog.thnkandgrow.com/wp-json/wp/v2`                          |
| `NEXT_PUBLIC_REVALIDATE_POSTS`             | Plain      | `600`                                                                 |
| `NEXT_PUBLIC_WORDPRESS_API_URL`            | Plain      | `https://blog.thnkandgrow.com/graphql`                                |
| `NEXT_PUBLIC_WORDPRESS_AUTH_REFRESH_TOKEN` | **Secret** | [rotated token]                                                       |
| `NEXT_PUBLIC_REVALIDATION_SECRET`          | **Secret** | [new secret]                                                          |
| `NEXT_PUBLIC_CLOUDINARY_CLOUD_URL`         | Plain      | `https://res.cloudinary.com/dgzdswdgg/image/upload`                   |
| `CF_ZONE_ID`                               | **Secret** | [get from Dashboard]                                                  |
| `CF_API_TOKEN`                             | **Secret** | [create with Cache Purge permission]                                  |

### 3.3 Get Cloudflare Credentials

```bash
# Zone ID: Dashboard → Domain → Info → Zone ID

# API Token: Profile → API Tokens → Create Token
# - Permissions: Zone > Cache Purge
# - Scope: Zone > hoainho.info
```

---

## 4. XỬ LÝ API ROUTES & SSR

### 4.1 Current API Routes

```
app/api/
├── graphql/route.ts       (POST) → Forward to WordPress
└── revalidate/route.ts     (GET)  → ISR revalidation (⚠️)
```

### 4.2 GraphQL Route (`/api/graphql`)

**Hiện tại**: ✅ Compatible, no changes needed

```typescript
export const runtime = "edge";
export async function POST(request: NextRequest) {
  // Proxy to WordPress GraphQL
}
```

**On Cloudflare**: Works as-is in Functions

### 4.3 Revalidation Route - ⚠️ REQUIRES MIGRATION

**Problem**: `revalidateTag()` / `revalidatePath()` are Vercel-specific

**Solution: Webhook-based Cache Purge**

Replace `/api/revalidate/route.ts`:

```typescript
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const secret = req.searchParams.get("secret");
  const paths = req.searchParams.get("paths")?.split(",") || [];

  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Call Cloudflare API to purge cache
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/zones/${process.env.CF_ZONE_ID}/purge_cache`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.CF_API_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          files: paths.map((p) => `https://hoainho.info${p}`),
        }),
      },
    );

    if (!response.ok) {
      throw new Error(`CF API error: ${response.statusText}`);
    }

    return NextResponse.json({ success: true, purged: paths });
  } catch (error) {
    console.error("Cache purge failed:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown" },
      { status: 500 },
    );
  }
}
```

**Alternative: WordPress Webhook**

Configure WordPress to trigger cache purge when posts are published:

```php
// In WordPress functions.php or via plugin
add_action('publish_post', function() {
    wp_remote_post('https://hoainho.info/api/revalidate', [
        'headers' => ['Authorization' => 'Bearer SECRET_TOKEN'],
        'body' => json_encode([
            'secret' => 'YOUR_SECRET',
            'paths' => '/blog,/'
        ]),
    ]);
});
```

---

## 5. STATIC ASSETS, IMAGES & ROUTING

### 5.1 Static Assets

- ✅ `/public` automatically served as root
- ✅ Auto gzip compression
- ✅ Browser caching automatic

**No changes needed.**

### 5.2 Images

**Current setup**: S3 + CloudFront ✅

```typescript
images: {
  unoptimized: true,  // Keep as-is
}

// Images still from:
// https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/...
// https://d25ajqv6ijzi49.cloudfront.net/...
```

**No migration needed** - works perfectly on CF Pages.

### 5.3 Routing

**Dynamic routes** work identically:

- `/blog/[slug]` → works
- `/blog/author/[name]` → works
- `/blog/category/[slug]` → works

**No changes needed.**

### 5.4 Caching Strategy (Optional Optimization)

Create `public/_headers`:

```
[/api/*]
Cache-Control: no-cache

[/api/graphql]
Cache-Control: no-store

[/blog/*]
Cache-Control: public, max-age=3600

[/*.js]
Cache-Control: public, max-age=31536000, immutable

[/*.css]
Cache-Control: public, max-age=31536000, immutable

[/images/*]
Cache-Control: public, max-age=86400
```

---

## 6. DEPLOYMENT & VALIDATION

### 6.1 Pre-deployment Checklist

```bash
# 1. Build verification
npm run build
ls -la out/

# 2. Lint & types
npm run lint
npx tsc --noEmit

# 3. Test locally
npx http-server out/
# Visit http://localhost:8080

# 4. Secrets audit
cat .env
# Ensure not committed to git
```

### 6.2 Deploy Steps

```bash
# 1. Push to GitHub
git add .
git commit -m "Prepare for CF migration"
git push origin main

# 2. Cloudflare auto-deploys
# Watch: Dashboard → Deployments

# 3. Verify build succeeded
# Check build logs for errors
```

### 6.3 Post-deployment Testing

#### **🔴 Critical Tests**

- [ ] Homepage loads (`/`): `curl -I https://hoainho.info/`
- [ ] Blog page (`/blog`): Verify content displays
- [ ] Blog posts (`/blog/[slug]`): Click random links
- [ ] API works: `curl -X POST https://hoainho.info/api/graphql`
- [ ] Images load: Check S3/CloudFront URLs
- [ ] Email form: Send test email
- [ ] HTTPS enforced: `curl http://hoainho.info → 301 to https`

#### **🟡 Performance Tests**

```bash
# Page speed
npm install -g lighthouse
lighthouse https://hoainho.info/ --view

# Cache headers
curl -I https://hoainho.info/

# API response time
time curl -X POST https://hoainho.info/api/graphql
```

#### **🟢 Functional Tests**

- [ ] Dynamic routes work
- [ ] 404 pages work
- [ ] Environment variables loaded
- [ ] Analytics tracking active

### 6.4 Rollback Plan

```bash
# Option 1: Instant CF rollback
# Dashboard → Deployments → Select previous → Rollback

# Option 2: Git-based
git revert HEAD
git push origin main

# Option 3: Emergency DNS change (if on external registrar)
# Point DNS back to Vercel temporarily
```

---

## 7. BEST PRACTICES & LOGGING

### 7.1 Add Logging to API Routes

```typescript
// app/api/graphql/route.ts
export async function POST(request: NextRequest) {
  const startTime = Date.now();
  const clientIP = request.headers.get("CF-Connecting-IP");

  try {
    // ... request handling ...

    const duration = Date.now() - startTime;
    console.log(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        type: "graphql_request",
        status: response.status,
        duration_ms: duration,
        client_ip: clientIP,
        success: response.ok,
      }),
    );

    return NextResponse.json(data);
  } catch (error) {
    console.error(
      JSON.stringify({
        timestamp: new Date().toISOString(),
        type: "graphql_error",
        error: error instanceof Error ? error.message : "Unknown",
      }),
    );

    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

### 7.2 Monitor Performance

```bash
# Create comparison script
cat > compare-deployments.sh << 'EOF'
#!/bin/bash

VERCEL="https://hoainho.info"
CF="https://next-portfolio.pages.dev"

echo "Homepage status:"
echo "  Vercel: $(curl -s -o /dev/null -w "%{http_code}" $VERCEL/)"
echo "  CF: $(curl -s -o /dev/null -w "%{http_code}" $CF/)"

echo "API health:"
curl -s -X POST $VERCEL/api/graphql -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}' | grep -q "data" && echo "  Vercel: OK" || echo "  Vercel: FAIL"
curl -s -X POST $CF/api/graphql -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}' | grep -q "data" && echo "  CF: OK" || echo "  CF: FAIL"
EOF

chmod +x compare-deployments.sh
./compare-deployments.sh
```

### 7.3 Set Up Alerts

Cloudflare Dashboard → Notifications → Create Notification:

- Alert on error rate > 5%
- Alert on response time > 2000ms
- Alert on build failure

---

## 8. TROUBLESHOOTING GUIDE

### Issue 1: API Routes Return 404

**Symptom**: `POST /api/graphql → 404 Not Found`

**Solution**:

```bash
# Check build output
npm run build
ls -la out/
# API routes should NOT be in out/ (they're Functions)

# Verify on Cloudflare: Project → Functions → should see api/* routes

# If not showing:
# 1. Ensure route.ts exists: find app/api -name "route.ts"
# 2. Re-deploy: wrangler pages deploy out/
# 3. Check build logs for errors
```

### Issue 2: Revalidation Broken

**Symptom**: `revalidateTag()` / `revalidatePath()` not working

**Solution**: Already covered in Section 4.3 - use Cloudflare API for cache purge

### Issue 3: Environment Variables Undefined

**Symptom**: `process.env.NEXT_PUBLIC_BLOG_API → undefined`

**Solution**:

```bash
# 1. Verify in Cloudflare Dashboard → Environment Variables
# 2. Check for typos in variable names
# 3. Rebuild & redeploy:
#    Dashboard → Deployments → Retry Build
# 4. Git commit to trigger new build:
#    git commit --allow-empty -m "Trigger rebuild"
#    git push origin main
```

### Issue 4: Slow API Response

**Symptom**: API takes 2+ seconds to respond

**Causes**: WordPress backend slow, not CF issue

**Solution**:

- Check WordPress backend performance
- Add caching to GraphQL responses (see Section 7.1)
- Monitor WordPress health: `https://blog.thnkandgrow.com/wp-json/wp/v2/posts?per_page=1`

### Issue 5: CORS Errors

**Symptom**: `Access to XMLHttpRequest blocked by CORS policy`

**Solution**:

```typescript
// app/api/graphql/route.ts - Add CORS headers
export async function POST(request: NextRequest) {
  // ... handle request ...

  return NextResponse.json(data, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}
```

### Issue 6: Dynamic Routes Return 404

**Symptom**: `/blog/my-slug → 404` but `/blog/page works`

**Solution**:

```typescript
// app/(landing)/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const response = await fetch(process.env.NEXT_PUBLIC_BLOG_API + "/posts");
  const posts = await response.json();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

Ensure `generateStaticParams` fetches all possible slugs at build time.

### Issue 7: Images Not Loading

**Symptom**: Images from S3 show 404

**Solution**:

```bash
# Check S3 bucket is accessible
curl -I https://hn-portfolio.s3.ap-southeast-1.amazonaws.com/logo.jpeg
# Should return 200, not 403/404

# Check CloudFront
curl -I https://d25ajqv6ijzi49.cloudfront.net/logo.jpeg

# If stale: Clear CloudFront cache
aws cloudflare create-invalidation --distribution-id E123ABC --paths "/*"
```

---

## 9. IMPLEMENTATION CHECKLIST & RISK ASSESSMENT

### Phase 1: Pre-migration (Week 1)

**Checklist**:

- [ ] Backup Vercel deployment: `git branch backup/vercel-prod`
- [ ] Rotate secrets (WordPress token, revalidation secret)
- [ ] Remove `.env` from git history
- [ ] Test local build: `npm run build`
- [ ] Create Cloudflare account
- [ ] Add domain to Cloudflare (wait for DNS propagation)
- [ ] Document Cloudflare credentials (Zone ID, API Token)

**Risk**: 🟢 **LOW** - Backup ensures safe rollback

### Phase 2: Staging Deployment (Week 1)

**Checklist**:

- [ ] Create CF Pages project
- [ ] Configure build settings (Next.js, npm run build, out/)
- [ ] Add all environment variables
- [ ] Deploy staging: git push to feature branch
- [ ] Run full test suite (Section 6.3)
- [ ] Compare performance vs Vercel (use compare script)
- [ ] Load testing (optional): `artillery quick --count 100`

**Risk**: 🟡 **MEDIUM** - Identifies issues before production

### Phase 3: Production Cutover (Week 2)

**Checklist**:

- [ ] Verify DNS points to Cloudflare
- [ ] Point domain to CF Pages (Dashboard or DNS update)
- [ ] Final pre-production tests
- [ ] Update DNS records (if using external registrar)
- [ ] Monitor first 24 hours
- [ ] Keep Vercel live (emergency fallback)

**Risk**: 🔴 **HIGH** - Production is live
**Mitigation**: Staged DNS, alerts configured, team on standby

### Phase 4: Post-migration (Week 2-3)

**Checklist**:

- [ ] Monitor 24+ hours for errors
- [ ] Collect performance data (Lighthouse, response times)
- [ ] User feedback (GitHub issues, email)
- [ ] Update documentation
- [ ] Decommission Vercel (after 1+ week stability)

**Risk**: 🟢 **LOW** - If Phase 3 successful

---

## 10. QUICK COMMAND REFERENCE

### Build & Test

```bash
# Development
npm run dev

# Build static export
npm run build

# Test locally
npx http-server out/

# Lint & type check
npm run lint
npx tsc --noEmit
```

### Deploy

```bash
# Git-based (recommended)
git push origin main
# Cloudflare auto-deploys

# CLI-based
npx wrangler pages deploy out/

# Manual
wrangler pages upload out/ --project-name next-portfolio
```

### Monitor & Debug

```bash
# View deployments
wrangler pages deployments list

# Real-time logs
wrangler tail

# Test homepage
curl -I https://hoainho.info

# Test API
curl -X POST https://hoainho.info/api/graphql \
  -H "Content-Type: application/json" \
  -d '{"query":"{ __typename }"}'

# Test revalidation
curl "https://hoainho.info/api/revalidate?secret=XXX&paths=/blog"
```

### Rollback

```bash
# Option 1: CF Dashboard
# Deployments → Select previous version → Rollback

# Option 2: Git
git revert HEAD
git push origin main

# Option 3: Emergency (point DNS back to Vercel)
```

---

## ✅ MIGRATION COMPLETE CHECKLIST

Before declaring success:

```markdown
## Functionality

- [ ] Homepage: ✓ visual match
- [ ] Blog index: ✓ visual match
- [ ] Blog posts: ✓ visual match
- [ ] API /api/graphql: ✓ working
- [ ] API /api/revalidate: ✓ working
- [ ] Email form: ✓ working
- [ ] Images: ✓ loading

## Performance

- [ ] Lighthouse: **_/100 (vs _** before)
- [ ] TTFB: <500ms
- [ ] Cache headers: ✓ correct

## Security

- [ ] HTTPS: ✓ enforced
- [ ] Secrets: ✓ not exposed
- [ ] Authentication: ✓ working

## Monitoring

- [ ] Alerts: ✓ configured
- [ ] Logging: ✓ active
- [ ] Analytics: ✓ tracking

## Sign-off

- Validated by: ******\_\_\_\_******
- Date: ******\_\_\_\_******
- Status: ✓ COMPLETE
```

---

## 📞 SUPPORT

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Next.js Docs**: https://nextjs.org/docs
- **Status Page**: https://www.cloudflarestatus.com/
- **Cloudflare Support**: https://support.cloudflare.com/

---

**Last Updated**: 2025-01-29
**Ready for Implementation**: ✅ YES
