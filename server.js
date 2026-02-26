const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("EduConnect Backend Running");
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    db.prepare("INSERT INTO users (name,email,password,role) VALUES (?,?,?,?)")
      .run(name, email, password, role);

    res.json({ message: "Registered" });
  } catch (e) {
    res.status(400).json({ error: String(e) });
  }
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  const user = db.prepare("SELECT * FROM users WHERE email=? AND password=?")
    .get(email, password);

  if (user) {
    const { password: _, ...safeUser } = user;
    res.json({ message: "Login success", user: safeUser });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});