🏆 User Points Leaderboard System
A full-stack web application to display a dynamic leaderboard where users can be added, claim random points, and view real-time rankings. Built using React + Vite for frontend and Node.js + Express + MongoDB for backend.

📂 Project Structure
pgsql
Copy
Edit
UserPoints/
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── lib/
│   ├── .env
│   └── server.js
└── Frontend/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.jsx
    │   └── index.css
🚀 Features
🔘 Select a user from a dropdown list

➕ Add new users from frontend

🎲 Claim random points (1 to 10) for selected user

📈 Leaderboard updates dynamically after each claim

🏅 Top 3 users highlighted with medals

📚 Claim history stored in backend collection

🧰 Tech Stack
Frontend: React.js, Vite, Classic CSS

Backend: Node.js, Express.js, MongoDB

Database: MongoDB Atlas (or local MongoDB)

⚙️ Setup Instructions
🔧 Backend Setup
bash
Copy
Edit
cd Backend
npm install
Create a .env file:

ini
Copy
Edit
PORT=5000
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/CHAT-APP
JWT_SECRET=your_jwt_secret
Start backend server:

bash
Copy
Edit
npm run dev
🌐 Frontend Setup
bash
Copy
Edit
cd Frontend
npm install
npm run dev
Runs at: http://localhost:5173

📡 API Endpoints
Method	Endpoint	Description
POST	/api/user	Add new user
GET	/api/user	Get all users
POST	/api/points/claim	Claim random points
GET	/api/points/history	(Optional) Get claim history

📸 UI Preview
User dropdown and add input

Claim button showing earned points

Leaderboard with ranks and points

Top 3 users with medals 🥇🥈🥉

📝 To Do (Optional)
 Add claim history display

 Add avatars per user

 Add socket.io for real-time updates

🧑‍💻 Author
Abhinav Kumar Chaudhary
Frontend + Backend Dev | MERN Stack | DSA Enthusiast
