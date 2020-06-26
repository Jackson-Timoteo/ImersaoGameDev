class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite,  alturaSripte){
    super (matriz, imagem, x, variacaoY,  largura, altura, larguraSprite,  alturaSripte)

    this.variacaoY = variacaoY
    this.yInicial = height  - this.altura - 30;
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
        const precisao = .7;
        const colisao = collideRectRect(
          this.x, 
          this.y, 
          this.largura * precisao, 
          this.altura * precisao, 
          inimigo.x, 
          inimigo.y,
          inimigo.largura * precisao, 
          inimigo.altura * precisao
        )

        return colisao;
    } 
     
}