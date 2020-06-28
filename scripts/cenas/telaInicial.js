class TelaInicial{
    constructor(){

    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._btn();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0 , 0, width, height);
    }

    _texto(){
        textFont(fonteTelaInicial)  
        textAlign(CENTER)
        textSize(60)
        text('As Aventuras De', width / 2 , 100)
        text('Hipsta', width / 2 , 150)
    }

    _btn(){
        botaoGerenciador.y = height / 7 * 5; 
        botaoGerenciador.draw();
    }
}