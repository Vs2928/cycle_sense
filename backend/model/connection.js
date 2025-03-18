const mongoose = require('mongoose');

// User Database Connection
const userDB = mongoose.createConnection('mongodb+srv://gagangkurup10:omen16@clusterinternship.zup2cqv.mongodb.net/logindetaildb?retryWrites=true&w=majority&appName=Clusterinternship', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

userDB.on('connected', () => {
  console.log('User DB is connected');
});

userDB.on('error', (err) => {
  console.log('User DB connection error:', err);
});
