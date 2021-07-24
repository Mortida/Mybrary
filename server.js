// Check if we are Not in production
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

const express = require('express');// Import express
const app = express();// Create app by calling express() fun
const expressLayouts = require('express-ejs-layouts');// Import expressLayouts
const indexRouter = require('./routes/index'); // Import Router

// Config our express application
app.set('view engine', 'ejs'); // Set our view engine to ejs as our engine
app.set('views', __dirname + '/views'); // Set our views dir
app.set('layout', 'layouts/layout'); // Hook up Express Layouts
app.use(expressLayouts); // Tell our Express to use expressLayouts
app.use(express.static('public')); // Tell Express where our public file will be

const mongoose = require('mongoose'); // Import mongoose
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}); // connect mongoose
const db = mongoose.connection; // check if our DB connected to the internet
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

app.use('/', indexRouter); // Tell our app to use indexRouter

app.listen(process.env.PORT || 3000); // Server Listen on port 3000
