 PepBoard
PepBoard is a collaborative real-time whiteboard built with Node.js, Express, and Socket.IO. It allows multiple users to draw simultaneously on a shared canvas, making it great for brainstorming, teaching, or quick collaborative sketches.

🚀 Features
🎨 Real-time drawing with WebSockets
🧑‍🤝‍🧑 Multi-user support
⚡ Fast and lightweight using Express
🌐 Easy to deploy on any Node.js environment
🖌️ Freehand drawing on canvas
🎨 Change color and brush size
🔄 Undo and Redo functionality
📐 Tool selection (e.g., pencil, eraser)

Project Structure
final/
├── express.js              # Entry point of the server
├── node_modules/          # Project dependencies
├── package.json           # Project metadata and scripts
├── package-lock.json      # Dependency tree lock
├── public/                # Static files (HTML, CSS, JS)
│   ├── index.html         # Main UI for the board
│   └── ...                # Client-side scripts and styles
└── README.md              # Project documentation

INSTRUCTIONS

Clone the Repository
git clone https://github.com/CJ1626/Collab-whiteboard.git
cd Collab-whiteboard
npm install
npm start
Then open your browser and navigate to:
http://localhost:3000
