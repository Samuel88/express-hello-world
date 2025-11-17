const port = process.env.PORT || 3000;
const e = require('express');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Ciao Mondo!');
});

app.listen(port, (err) => {
    if (err) {
        return console.log('Errore', err);
    } else {
        console.log(`Server attivo alla porta ${port}`);
    }
});
