import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dashboardData } from './backend/data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

app.get('/api/dashboard', (req, res) => {
  const role = req.query.role || 'manager';
  if (!dashboardData[role]) {
    return res.status(400).json({ error: 'Invalid role' });
  }
  res.json({ role, data: dashboardData[role] });
});

app.get('/api/roles', (req, res) => {
  res.json({ roles: Object.keys(dashboardData) });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
