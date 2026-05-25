# buckspense.online

Welcome to the official repository for the supporting static landing website, privacy center, and download portal of **Buckspense**—a 100% offline, privacy-first personal financial expense tracker for Android.

The live website is hosted at: **[https://buckspense.online/](https://buckspense.online/)**

---

## 📁 Repository Directory Structure

The framework is built using lightweight, high-performance static Vanilla HTML, CSS, and Javascript:

```text
buckspense/
├── index.html                  # Home Page (Product showcase, feature overview, and enquiries form)
├── privacy.html                # Privacy Policy (Tailored for offline SQLite/Room Android app guidelines)
├── SPECS.md                    # Technical architectural specification blueprint for the Android App
├── assets/
│   ├── css/
│   │   └── style.css           # Core styling system (HSL tokens, glassmorphism, responsive elements)
│   ├── js/
│   │   └── main.js             # Mobile drawer, active nav hooks, and enquiry form validation/modal handlers
│   └── images/
│       └── logo.svg            # Custom modern vector graphic logo
└── README.md                   # This project guide
```

---

## 💻 Local Development Setup

Because the site uses pure static files without heavy build dependencies, you can run it instantly using any basic local web server:

### Option A: VS Code Live Server (Easiest)
1. Open the project folder in VS Code.
2. Install the **Live Server** extension.
3. Click the **Go Live** button in the status bar at the bottom right.

### Option B: Python SimpleHTTPServer
If you have Python installed, open your shell in the workspace directory and execute:
```bash
# Python 3
python -m http.server 8000
```
Then navigate to `http://localhost:8000/` in your web browser.

---

## 🚀 Deployment Instructions

To push the pages live to your custom domain `https://buckspense.online/`, you can deploy this static repository to **GitHub Pages**:

1. Ensure all changes are committed and pushed to your **`main`** branch (or **`develop`** for staging).
2. Go to your repository settings on GitHub -> **Pages**.
3. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
4. Set the branch to **`main`** and the folder to **`/ (root)`**, then click **Save**.
5. Under **Custom domain**, enter `buckspense.online`, save, and ensure **Enforce HTTPS** is checked.
