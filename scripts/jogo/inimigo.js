class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite,  alturaSripte, velocidade) {
        super (matriz, imagem, x, variacaoY,  largura, altura, larguraSprite,  alturaSripte)

        this.velocidade = velocidade
        this.x = width 
    }

    move(){ 
        this.x = this.x - this.velocidade

    }

    aparece(){
        this.x = width
    }
}