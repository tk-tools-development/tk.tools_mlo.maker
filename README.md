# MLO Maker - FiveM Interior Editor

A modern web-based 3D editor for creating MLO (Map Layout Objects) interiors for FiveM.

## ⚡ Quick Start (5 minutes)

### Step 1: Install Node.js
Download and install from: **https://nodejs.org/** (get the LTS version)

After installing, verify it worked:
```bash
node --version
npm --version
```

### Step 2: Clone or Download This Repository
If you have Git:
```bash
git clone <repository-url>
cd tk.tools_mlo.maker
```

### Step 3: Run Setup (One Command)
```bash
bash setup.sh
```

This will automatically install all dependencies (takes 2-3 minutes the first time).

### Step 4: Start Development
```bash
npm run dev
```

Your browser will open automatically to: **http://localhost:3000**

---

## 📝 What to Do With Those Commands

You asked about these - here's what they actually do:

| Command | What It Does | When to Use |
|---------|------------|-----------|
| `npm install` | Downloads all libraries | Setup.sh does this automatically |
| `npm run dev` | Starts local editor on localhost:3000 | When you want to test/develop |
| `npm run build` | Creates production files in `dist/` folder | When ready to deploy |

**TL;DR: Just run `setup.sh` once, then `npm run dev` every time you want to work.**

---

## 🎨 UI Features

The editor has:
- **Left: 3D Viewport** - Babylon.js 3D editor with free camera
- **Right: Toolbox** - Browse and select props, furniture, terrain
- **Dark theme** - Easy on the eyes for long work sessions

---

## 📂 Project Structure

```
tk.tools_mlo.maker/
├── src/
│   ├── App.tsx                 # Main app
│   ├── main.tsx                # Entry point
│   ├── components/
│   │   ├── Viewport.tsx        # 3D rendering (Babylon.js)
│   │   └── Toolbox.tsx         # Prop browser sidebar
│   └── styles/
│       ├── globals.css         # Global styles
│       ├── App.css             # App layout
│       └── Toolbox.css         # Toolbox styles
├── index.html                  # HTML entry
├── package.json                # Dependencies
├── vite.config.ts              # Build config
└── tsconfig.json               # TypeScript config
```

---

## 🚀 Next Steps

After running `npm run dev`:

1. **Explore the 3D viewport** - Use mouse to rotate/pan
2. **Select props** from the toolbox on the right
3. **Drag props into the viewport** (coming soon)
4. **Export your MLO** (coming soon)

---

## 🛠️ Development Tips

### Hot Reload
- Edit `.tsx` or `.css` files and **save** - page automatically refreshes
- No need to restart the dev server

### Common Issues

**"npm: command not found"**
→ Node.js not installed or not in PATH. Restart your terminal after installing.

**Port 3000 already in use**
→ Close other apps using port 3000, or run: `npm run dev -- --port 3001`

**Build fails**
→ Run: `npm install` again, then `npm run build`

---

## 📱 Browser Support
- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ⚠️ Limited (Babylon.js may be slower)

---

## 🤝 Contributing

This is set up for easy development:
1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes
3. Push and create a Pull Request

---

## 📝 License

[Add your license here]
