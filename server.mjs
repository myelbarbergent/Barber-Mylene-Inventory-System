import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('The server is running on PORT 5000');
})

const PORT = 5000;
app.listen(PORT, () => {
    console.log('server is running on port ${PORT}');
});