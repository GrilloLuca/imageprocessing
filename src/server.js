
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;
const image = 'src/tree.jpg';
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

app.get('/api/getImageData', (req, res) => {  
    fs.readFile(image, (err, data) => {
        if (err) throw err;
        console.log(data);
        res.send({ data: data });
      });
});

app.post('/api/world', (req, res) => {  
    console.log(req.body);  
    res.send(`I received your POST request. This is what you sent me: ${req.body.post}`, );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
