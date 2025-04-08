const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express on Render!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'API is working' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
