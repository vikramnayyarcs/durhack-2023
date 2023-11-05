// @ts-ignore
import express from 'express';
// @ts-ignore
import cors from 'cors';
import {PrismaClient} from "@prisma/client";
import {apiCall} from "./api";


const app = express();
const prisma:any  = new PrismaClient();

app.use(express.json());
app.use(cors());


app.get('/api/search', async (req, res) => {
    const searchPrompt = req.body.searchPrompt as string;
    console.log(searchPrompt)
    const result = await apiCall(searchPrompt);
    return res.json(result);
});

app.post('/api/searchDb', async  (req, res) =>{
    const query = req.body;
    const customQueryResult = await prisma.$queryRaw`${query}`;
    res.send("okay");
    return customQueryResult;
});

app.post('/api/insertData', async (req, res) => {
    const query = req.body;
    const customQueryResult = await prisma.$queryRaw`${query}`;
    res.send("okay");
});



app.listen(5001, () => {
    console.log('Server running on localhost:5001');
});

export default app;