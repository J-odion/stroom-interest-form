import app from './app';
import connectDB from './config/db';

const PORT = process.env.PORT || 5002;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
