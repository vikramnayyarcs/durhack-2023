// @ts-ignore
import express from 'express';
// @ts-ignore
import cors from 'cors';
import {PrismaClient} from "@prisma/client";
import fetch = NodeJS.fetch;
import {fetchGPTResponse} from "./gpt-api";






const app = express();
const prisma = new PrismaClient();


app.use(express.json());
app.use(cors());


app.get('/api/search', async (req, res) => {


    const searchTerm = req.query.searchTerm as string;
    const result = await fetchGPTResponse(searchTerm);
    return res.json(result);
});

app.post('/api/searchDb', async  (req, res) =>{
    const query = req.body;
    const customQueryResult = await prisma.$queryRaw`${query}`;

})

app.post('/api/insertData', async (req, res) => {
   const {endTime, artistName, trackName, msPlayed} = req.body;

   // data:{endTime, artistName, trackName, msPlayed}
   res.json({message: "put query here"});
});



app.listen(5001, () => {
    console.log('Server running on localhost:5001');
});

export default app;