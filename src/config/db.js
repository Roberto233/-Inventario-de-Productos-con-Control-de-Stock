const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/inventario', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
<<<<<<< HEAD
    console.log('✅ MongoDB conectado');
  } catch (error) {
    console.error('❌ Error de conexión:', error);
=======
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error de conexión:', error);
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
    process.exit(1);
  }
};

<<<<<<< HEAD
module.exports = connectDB;
=======
module.exports = connectDB;
>>>>>>> be8c1894970d6ea5661a67e5fcdd8b2c34133974
