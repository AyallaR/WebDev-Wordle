import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { getCorrectWord, checkWord } from './getCorrectWord';
//import { services } from './services';

const app = express();
const port = 3333;
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.send((getCorrectWord()));

});

app.get('/check/:guess/:id',  (req: Request, res: Response) => {
    const g = req.params.guess;
    const i =Number(req.params.id) ;

    res.send(checkWord(g, i));

});

// app.get("/:word/:guess", (req: Request, res: Response) => {
//     const word = req.params.word;
//     const guess = req.params.guess;
//     res.send(services());

// });


app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`)
});