import express from 'express';
import cors from 'cors';
import {PrismaClient} from "@prisma/client";

const app = express();


type Row = {
    id: number;
    
}


app.use(express.json());
app.use(cors());

app.get('/api/search', async (req, res) => {
    res.json({ message: 'success' });
});

app.post('/api/search', async (req, res) => {
   res.json({message: "put query here"});
});



app.listen(5001, () => {
    console.log('Server running on localhost:5001');
});

export default app;