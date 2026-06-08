# MLO Maker - FiveM Interior Editor

A web-based MLO (Mission Location Object/Interior) editor for FiveM. Design custom interiors with an intuitive 3D interface, drag-and-drop prop placement, terrain editing, and seamless FiveM export.

## Features (Planned)

- 🎮 **3D Editor**: CodeWalker-style 3D viewport with free-flying navigation
- 🧰 **Prop Toolbox**: Drag-and-drop GTA assets and props into your scene
- 🌍 **Terrain Editor**: Paint grass, sidewalks, and terrain modifications
- 📦 **Smart Export**: One-click FiveM-ready ZIP export with all YMAPs and YDRs
- 🔍 **Search & Filter**: Find props, buildings, and assets by name/category
- 💾 **Project Management**: Save, load, and manage MLO projects

## Tech Stack

- **3D Engine**: Babylon.js
- **Frontend Framework**: React + TypeScript
- **Build Tool**: Vite
- **Hosting**: GitHub Pages
- **CI/CD**: GitHub Actions

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Editor/         # Main 3D editor component
│   ├── Toolbox/        # Prop/asset toolbox sidebar
│   ├── Viewport/       # 3D canvas viewport
│   └── ExportModal/    # Export dialog
├── scenes/             # 3D scene management
├── utils/              # Utilities (file handling, coordinates, etc.)
├── hooks/              # Custom React hooks
├── types/              # TypeScript types
└── App.tsx             # Main app component

public/
├── assets/             # Static assets (GTA data refs, etc.)
└── index.html
```

## Development

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development guidelines.

## License

MIT

---

**Status**: 🚀 In active development
