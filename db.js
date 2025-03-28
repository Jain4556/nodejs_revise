const mongoose = require('mongoose')


const  mongoURL = 'mongodb://localhost:27017/hotels'


// set up mongodb connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const db = mongoose.connection;

db.on('connected', () => {
    console.log('connected to mongodb server');
    
})
db.on('error', () => {
    console.log('connected to mongodb server');
    
})
db.on('disconnceted', () => {
    console.log('connected to mongodb server');
    
})

module.exports = db;
