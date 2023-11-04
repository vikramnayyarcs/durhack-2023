import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/search', async (req, res) => {
    res.json({ message: 'success' });
});

app.listen(5030, () => {
    console.log('Server running on localhost:5030');
});

export default app;