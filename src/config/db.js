// Import Mongoose
import mongoose from 'mongoose';

// Function to connect to MongoDB
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true, // Optional: Enables automatic creation of indexes
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        // Optionally handle the error here
    }
};

// Export the function to connect to MongoDB
export default connectToDatabase;
