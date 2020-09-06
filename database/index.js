import mongoose from 'mongoose';

mongoose.connect(process.env.MONGODB, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

mongoose.Promise = global.Promise;

export default mongoose;