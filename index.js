const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'This is a small change' })
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);
