# 🚀 MLO Maker - Quick Start Guide

**Read this first!** It explains everything step-by-step in plain English.

---

## ⚡ The Easy Way (5 minutes)

### 1️⃣ Install Node.js (One-time only)
Download and install from: **https://nodejs.org/**
- Click "LTS" (recommended)
- Run the installer
- Restart your terminal/command prompt

Verify it worked:
```bash
node --version
npm --version
```

### 2️⃣ Clone the Project
Download this repository to your computer.

### 3️⃣ Run the Setup Script
Open terminal in the project folder and run:
```bash
bash setup.sh
```

(On Windows: `bash setup.sh` or just `npm install`)

This installs all the code libraries you need. ☕ Grab a coffee, it takes 2-3 minutes.

### 4️⃣ Start Editing
```bash
npm run dev
```

Your browser opens to: **http://localhost:3000**

**That's it!** 🎉

---

## 📚 What Those Commands Actually Do

You asked about this, so here's the simple truth:

### `npm install`
- **What:** Downloads all code libraries (React, Babylon.js, etc.)
- **When to run:** Once at setup (setup.sh does this)
- **When you'd run manually:** If you add a new dependency or `node_modules/` gets deleted

### `npm run dev`
- **What:** Starts a local development server
- **When to run:** Every time you want to work
- **What happens:** Browser opens to `http://localhost:3000` with live reload
- **Stop it:** Press `Ctrl+C` in terminal

### `npm run build`
- **What:** Creates a production version in `dist/` folder
- **When to run:** When you want to deploy online
- **Output:** All the files you need to put on a web server

---

## 🎨 How the UI Works

The editor is split into two sides:

```
┌────────────────────────────────────────┬──────────────┐
│                                        │   Toolbox    │
│          3D Viewport                   │  (Props,     │
│      (Babylon.js 3D View)              │   Furniture, │
│     - Rotate with mouse                │   Terrain)   │
│     - Pan with middle-click             │              │
│     - Scroll to zoom                    │  Categories: │
│                                        │  • Buildings │
│                                        │  • Furniture │
│                                        │  • Props     │
│                                        │  • Terrain   │
└────────────────────────────────────────┴──────────────┘
```

### Controls:
- **Rotate view:** Left-click drag
- **Pan view:** Right-click drag  
- **Zoom:** Scroll wheel
- **Select props:** Click in toolbox

---

## 🔧 Development Workflow

### Hot Reload (Changes Auto-Refresh)

Edit any file and save:
- `.tsx` files (React components)
- `.css` files (Styles)
- `.ts` files (Code)

The page automatically refreshes. **No need to restart!**

### File Structure

```
src/
├── App.tsx                          # Main app component
├── components/
│   ├── Viewport.tsx                 # 3D rendering (Babylon.js)
│   └── Toolbox.tsx                  # Prop browser
├── styles/
│   ├── globals.css                  # Global styles
│   ├── App.css                      # Layout
│   └── Toolbox.css                  # Toolbox UI
└── main.tsx                         # Entry point
```

---

## ❌ Troubleshooting

### "npm: command not found"
- You haven't installed Node.js yet
- Or you didn't restart your terminal
- **Fix:** Install Node.js from nodejs.org and restart terminal

### "Port 3000 already in use"
- Another app is using port 3000
- **Fix 1:** Close the other app and try again
- **Fix 2:** Use a different port: `npm run dev -- --port 3001`

### Dependencies failed to install
- Your npm cache might be corrupt
- **Fix:** Run: `npm cache clean --force` then `npm install`

### Changes aren't showing up
- Your browser might be caching
- **Fix:** Press `Ctrl+Shift+R` (hard refresh)

---

## 🚀 Next Steps

1. Run `npm run dev` and explore the 3D viewport
2. Click props in the toolbox
3. We'll add drag-and-drop soon
4. We'll add export functionality soon

---

## 💡 Tips

- **Dark Theme:** Good for long editing sessions, easy on eyes
- **Grid Reference:** Use the grid to align objects
- **Search:** Use the search box to find props quickly
- **Zoom:** Scroll wheel to zoom in/out

---

## 🆘 Need Help?

If something doesn't work:
1. Check the terminal for error messages
2. Try restarting with `npm run dev`
3. Delete `node_modules/` and run `npm install` again

---

## 📖 Learning Resources

- **React:** https://react.dev
- **Babylon.js:** https://doc.babylonjs.com
- **TypeScript:** https://www.typescriptlang.org/docs

---

**Happy editing! 🎨**
