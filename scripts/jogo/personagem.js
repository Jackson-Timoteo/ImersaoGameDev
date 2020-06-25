class Personagem extends Animacao{
  constructor(matriz, imagem, x, largura, altura, larguraSprite,  alturaSripte){
    super (matriz, imagem, x, largura, altura, larguraSprite,  alturaSripte)

    this.yInicial = height  - this.altura;
    this.y = this.yInicial;
    this.velocidadePulo = 0;
    this.gravidade = 3;
  }
    pula() {
      this.velocidadePulo =  - 30;
    }

    aplicaGravidade() {
      this.y = this.y + this.velocidadePulo
      this.velocidadePulo =  this.velocidadePulo + this.gravidade

      if(this.y > this.yInicial) {
        this.y = this.yInicial
      }
    }

      estaColedindo(inimigo){
        const colisao = collideRectRect(
          this.x, 
          this.y, 
          this.largura, 
          this.altura, 
          inimigo.x, 
          inimigo.y,
          inimigo.largura, 
          inimigo.altura
        );

        return colisao;
    }
}