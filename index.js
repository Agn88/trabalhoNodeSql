const express = require('express');
const connection = require('./database/connection');
const usersRoutes = require('./routes/usersRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const subscriptionRoutes = require('./routes/subscriptionRoutes');
const authRoutes = require('./routes/authRoutes');
const jwt = require('jsonwebtoken');

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function VerifyJWT(req, res, next){
  const token = req.body.token || req.query.token

  if(!token){
      return res.status(403).json({auth:false, message: 'No token provided'})
  }

  jwt.verify(token, 'secret_key', (err, user)=>{
    if(err){
      return res.status(403),json({message: 'Invalid Token'})
    }
    req.user = user
    next()
  })
}


app.use('/users', VerifyJWT, usersRoutes);
app.use('/courses', VerifyJWT, coursesRoutes);
app.use('/subscription', VerifyJWT, subscriptionRoutes);
app.use('/login', authRoutes);
app.use('/logout', authRoutes);

connection.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    app.listen(3333, () => {
      console.log('Server started');
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
