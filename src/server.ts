import express from 'express';

const app = express();

 app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ message: 'GoStack' });
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    const userTemp = {
        name,
        email
    };
    return res.status(201).json(userTemp);
})

app.listen(3333, () => {
    console.log('Server started on port 3333! 🚀');
});