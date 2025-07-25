require('dotenv').config()
const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const app = express();
const port =  process.env.PORT || 8080;
const mongoose = require('mongoose');

app.use(express.json());
app.use('/api/v1/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Eye Care ML Project API');
});
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log('Connected to MongoDB');
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error'
  });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Route Not Found' });
});

