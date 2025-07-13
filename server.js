 const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next();
});

app.post('/register', (req, res) => {
  const { name, email, course } = req.body;

  if (!name || !email || !course) {
    return res.status(400).json({ error: 'name, email aur course sab mandatory hain' });
  }

  console.log('Incoming Registration:', { name, email, course });
  res.send(`Registration successful for ${name}`);
});

app.listen(PORT, () => {
  console.log(`Server chal raha hai http://localhost:${PORT}`);
});
