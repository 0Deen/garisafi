const express = require("express");
const fs = require("fs-extra");
const cors = require("cors");
const app = express();
const PORT = 5000;

const USERS_FILE = "./users.json";

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
  const newUser = req.body;
  let users = [];

  try {
    if (await fs.exists(USERS_FILE)) {
      users = await fs.readJSON(USERS_FILE);
    }

    const emailExists = users.some(user => user.email === newUser.email);
    if (emailExists) {
      return res.status(409).json({ message: "Email already exists" });
    }

    users.push(newUser);
    await fs.writeJSON(USERS_FILE, users, { spaces: 2 });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!(await fs.exists(USERS_FILE))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const users = await fs.readJSON(USERS_FILE);
    const user = users.find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
