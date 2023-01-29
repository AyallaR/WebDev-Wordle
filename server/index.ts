import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { getRandomtWord, checkWord, getWordById } from './getCorrectWord';


const app = express();
const port = 3333;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send((getRandomtWord()));
});

app.get("/:id", (req: Request, res: Response) =>{
    const wid =Number(req.params.id) ;
    res.send(getWordById(wid));

});

app.get('/:guess/:id',  (req: Request, res: Response) => {
    const g = req.params.guess;
    const i =Number(req.params.id) ;
    res.send(checkWord(g, i));
});


app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`)
});