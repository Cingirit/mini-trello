const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { sequelize } = require('./models');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
app.use('/api/boards', require('./routes/boardRoutes'));
app.use('/api/lists', require('./routes/listRoutes'));
app.use('/api/tasks', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;

  sequelize.sync({ alter: true })
  .then(() => {
    console.log('Veritabanı senkronize edildi.');
    app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
  })
  .catch((err) => {
    console.error('Veritabanı senkronizasyon hatası:', err);
  });