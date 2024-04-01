import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';  

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/ping', (req: Request, res: Response) => {
    res.json({ message: 'pong' });
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
