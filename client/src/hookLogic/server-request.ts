//פונקציה שמחזירה לי את המילה מהדאטה שבשרת

export async function getRandonWord(): Promise<string> {
    const randonIndexWord = fetch(`http://localhost:3333/`).then((response) =>
        response.json()
    );
    return randonIndexWord;
  }

  export async function getWordById(id: string): Promise<string> {
    const wordById = fetch(`http://localhost:3333/${id}`).then((response) =>
      response.json()
    );
    return wordById;
  }

  export async function checkWord(guess:string, id:string): Promise<string> {
    const checkWord = fetch(`http://localhost:3333/${guess}/${id}`).then((response) =>
      response.json()
    );
    return checkWord;
  }