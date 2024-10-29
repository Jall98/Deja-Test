// backend/app.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const landRoutes = require('./routes/land');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/land', landRoutes);

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
