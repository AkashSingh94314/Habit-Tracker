const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://akashsingh94314:D4ICr1e2rUP6c5um@cluster0.rinpj0h.mongodb.net/?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost/habit-tracker');

const db = mongoose.connection;

//if error then pritnt message
db.on('error', console.error.bind(console, 'error in connectin DB'));

// server is up then run a message 
db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;


