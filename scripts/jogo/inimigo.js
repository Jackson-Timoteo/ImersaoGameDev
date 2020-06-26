class Inimigo extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite,  alturaSripte, velocidade, delay) {
        super (matriz, imagem, x, variacaoY,  largura, altura, larguraSprite,  alturaSripte)

        this.velocidade = velocidade
        this.delay = delay
        this.x = width + this.delay
    }

    move(){ 
        this.x = this.x - this.velocidade

        if(this.x < - this.largura - this.delay){
            this.x = width
        }

    }
}