const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://sandovalEzequiel01:n0WJjKCzmkK9Kd3T@cluster0.h9mx3nx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB conectado');
  } catch (err) {
    console.error('MongoDB error de conexion:', err);
    process.exit(1);
  }
};

module.exports = connectDB;