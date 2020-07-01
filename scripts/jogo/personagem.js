class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite,  alturaSripte){
    super (matriz, imagem, x, variacaoY,  largura, altura, larguraSprite,  alturaSripte)

    this.variacaoY = variacaoY
    this.yInicial = height  - this.altura - this.variacaoY;
    this.y = this.yInicial;
    this.velocidadePulo = 0;
    this.gravidade = 3;
    this.alturaDoPulo = -30;
    this.pulos = 0;
    this.invencivel = false
  }
    pula() {
      if(this.pulos < 3){
        this.velocidadePulo =  this.alturaDoPulo;
        this.pulos++
      }
      
    }

    aplicaGravidade() {
      this.y = this.y + this.velocidadePulo
      this.velocidadePulo =  this.velocidadePulo + this.gravidade

      if(this.y > this.yInicial) {
        this.y = this.yInicial
        this.pulos = 0
      }
    }
      tornaInvencivel(){
        this.invencivel = true
        setTimeout(() => {
          this.invencivel = false

        }, 1000)
      }

      estaColedindo(inimigo){
        if(this.invencivel){
          return false
        }

        const precisao = .65;
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