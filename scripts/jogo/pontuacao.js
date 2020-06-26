class Pontuacao{
    constructor(){
        this.pontos = 0;
    }

    exibe(){
        textSize(100);  
        text(this.pontos, width - 100, 90);
    }
}
