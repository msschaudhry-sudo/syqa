# SYQA Capital — Launch Guide

**Goal:** syqacapital.com live in ~30 minutes.
**Path:** Cloudflare Pages, direct upload (fastest, no GitHub needed).
**You already have:** the domain syqacapital.com secured.

---

## Honest note on the Cloudflare iOS app

The **Cloudflare iPhone app does not support Pages deployment.** It's designed for monitoring existing sites, DNS management, and account status — not for uploading files to create new Pages projects. Attempting to deploy via iOS will lead to dead ends.

**Use your MacBook for the initial launch.** Once deployed, you can use the iOS app to monitor traffic, check DNS, and manage the site from your phone going forward.

If you absolutely have no access to a Mac right now, the fastest alternative is Cloudflare Pages on a borrowed laptop / desktop — any computer with Safari, Chrome, or Firefox will work. The web dashboard is the tool you need.

---

## What you're deploying

A **static website** — pure HTML/CSS/JS. No database, no build step. Cloudflare serves it from 300+ global edge data centers, meaning near-instant load times from Tokyo, Abu Dhabi, Riyadh, Dubai, Singapore, everywhere.

The `syqa-website/` folder contains all files the site needs. You will upload the folder as-is.

---

## STEP 1 — Create Cloudflare account (2 min)

On your MacBook:

1. Open Safari or Chrome → go to **https://dash.cloudflare.com/sign-up**
2. Sign up with your email (use a personal email for now — you can change to subhan@syqacapital.com later once that's routing)
3. Verify your email (check inbox, click the confirmation link)
4. You're logged in to the Cloudflare dashboard

---

## STEP 2 — Create the Pages project (5 min)

1. In the left sidebar, click **Workers & Pages**
2. Click **Create application** (top right)
3. Click the **Pages** tab (not Workers)
4. Click **Upload assets**
5. You'll see "Project name" — enter: `syqacapital` (lowercase, no dashes)
6. "Production branch" — leave as `main`
7. Click **Create project**

You'll now see an upload screen.

---

## STEP 3 — Upload the site files (3 min)

1. On your Mac, locate the `syqa-website` folder (it's in the files I gave you)
2. On the Cloudflare upload screen, you have two options:
   - **Drag and drop** the entire `syqa-website` folder into the upload zone, OR
   - Click **select from computer** and choose the folder

   IMPORTANT: drag the folder itself OR select multiple files. If Cloudflare asks "upload folder or files" — upload as folder.

3. Wait for upload (usually 10–20 seconds for this site size)
4. Click **Deploy site**
5. Cloudflare shows a deployment screen. Wait ~30 seconds for it to finish building.
6. You'll see: **"Success! Your project is live"**
7. Cloudflare gives you a temporary URL like `syqacapital.pages.dev` — click it to verify the site works

**Open that URL in a new tab.** Confirm the site loads correctly. Check:
- Home page displays with pine background
- Navigate to Firm, Focus, Leadership pages
- Quote band shows the new quote ("We favour depth of relationship...")
- Japanese toggle (JP button) works
- No broken images or missing styles

If everything looks right, proceed to Step 4.

---

## STEP 4 — Connect your domain syqacapital.com (10 min)

### 4A. Add your domain to Cloudflare

1. From the Cloudflare dashboard, click **Websites** in the left sidebar
2. Click **+ Add a site**
3. Enter: `syqacapital.com` (no www, no https)
4. Click **Continue**
5. Select the **Free plan** (sufficient for your needs)
6. Click **Continue** at the bottom
7. Cloudflare scans your existing DNS records (may take 30 seconds)
8. Click **Continue** after the scan

### 4B. Update nameservers at your domain registrar

This tells the internet that Cloudflare now manages your domain's DNS.

1. Cloudflare shows you two nameservers — something like:
   ```
   bella.ns.cloudflare.com
   rick.ns.cloudflare.com
   ```
   (Yours will be different — **copy exactly what Cloudflare shows you**.)

2. Open a new tab → log into your **domain registrar** (wherever you bought syqacapital.com — GoDaddy, Namecheap, Google Domains/Squarespace, Porkbun, etc.)

3. Find the **Nameservers / DNS settings** section for syqacapital.com

4. Replace the existing nameservers with Cloudflare's two nameservers

5. Save changes at your registrar

6. Return to the Cloudflare tab → click **Done, check nameservers**

**Propagation:** DNS changes can take anywhere from 5 minutes to 24 hours. Usually it's under an hour. Cloudflare will email you when propagation is complete.

### 4C. Link the domain to your Pages project

Once DNS is propagated (you'll get the email, OR you can just wait 15 minutes and try):

1. Go to **Workers & Pages** → click your `syqacapital` project
2. Click the **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter: `syqacapital.com`
5. Click **Continue** → **Activate domain**

6. Repeat for the www version:
   - Click **Set up a custom domain** again
   - Enter: `www.syqacapital.com`
   - Click **Continue** → **Activate domain**

7. Cloudflare automatically:
   - Provisions an SSL certificate (makes `https://` work)
   - Sets up proper DNS records
   - Starts routing traffic

Wait 2–5 minutes, then open **https://syqacapital.com** in a browser.

**Your site is live.** 🎯

---

## STEP 5 — Post-launch verification (5 min)

Open your new live site and check:

- [ ] `https://syqacapital.com` loads with the green padlock (SSL working)
- [ ] `https://www.syqacapital.com` also works (redirects to main domain)
- [ ] All 7 pages render: Home, Firm, Focus, Leadership, News, Contact, Legal
- [ ] JP/EN language toggle works across pages
- [ ] Navigation menu works on mobile (hamburger icon)
- [ ] Quote band shows: "We favour depth of relationship over breadth of activity, and work that compounds over time."
- [ ] 6 leadership cards visible on Leadership page (Tokyo + Seoul)
- [ ] Focus areas show Commercial RE · Hospitality · Real Asset Equity

If anything is broken, tell me exactly what and I'll fix it.

---

## Future updates to the site

To update the site later (add photos, news items, edit copy):

1. Make changes to the files locally on your Mac
2. Go to Cloudflare → Workers & Pages → `syqacapital` project
3. Click **Create deployment** → upload the updated `syqa-website` folder
4. New version goes live in ~30 seconds

Each deployment is versioned — if something breaks, you can roll back to any previous version with one click.

---

## What you can do from the Cloudflare iOS app after launch

Once the site is live, the iOS app IS useful for:
- Monitoring traffic and visitors in real-time
- Checking bandwidth usage
- Viewing security events (bot attacks, blocked requests)
- Managing DNS records if needed
- Getting alerts on downtime

But for actual deployments and content updates, always use the desktop web dashboard.

---

## If something goes wrong

**"The upload failed"** → Refresh the page, try again. If it keeps failing, your folder may be too large (unlikely for this site). Check your internet connection.

**"Site loads but shows a 404"** → Cloudflare didn't recognize `index.html` as the home page. Re-upload making sure `index.html` is at the folder root, not inside a subfolder.

**"Custom domain isn't connecting"** → DNS propagation can take up to 24 hours. Wait and check back. Most of the time it's under 1 hour.

**"The SSL certificate isn't provisioning"** → Give it 15 minutes after connecting the custom domain. Cloudflare auto-provisions Let's Encrypt SSL. If it still fails after an hour, the issue is usually DNS propagation not being complete.

**For anything else:** take a screenshot of the error and ask Claude in a new chat — paste the Master Handoff Prompt first so context is preserved.

---

## Your email: hello@syqacapital.com

**Important:** owning the domain doesn't automatically give you an email address at it. You need a mail service.

**Two options, ranked:**

1. **Google Workspace** ($6/user/month) — professional, familiar Gmail interface, Japanese business context supported. Set up at `workspace.google.com`. Takes ~20 minutes.

2. **Cloudflare Email Routing** (free, temporary solution) — forwards emails from hello@syqacapital.com to your existing Gmail/personal email. Good for initial launch, not for sending email FROM the address. Set up in Cloudflare Dashboard → your domain → Email Routing.

My recommendation: Use Cloudflare Email Routing today so hello@syqacapital.com works for receiving inquiries. Upgrade to Google Workspace in the next 2 weeks for full send/receive.

---

Good luck. You've got a clean build and a secured domain — the hard part is done. This last step is just mechanical. 30 minutes from now, syqacapital.com is live.
