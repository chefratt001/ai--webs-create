const express = require('express');
const bodyParser = require('body-parser');
const leadController = require('./controllers/leadController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.post('/submit-lead', leadController.submitLead);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});