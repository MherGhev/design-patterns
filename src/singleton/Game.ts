class Game{
    private static instance: Game;

    public score: number;

    constructor() {
        if (Game.instance) {
            return Game.instance;
        }

        this.score = 0;

        Game.instance = this;
    }

    public startGame = () => {
        console.log("Game starting.");
        console.log("Score: ", this.score);
    }

}

export default Game;