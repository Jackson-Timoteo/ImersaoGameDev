class Jogo{
    constructor(){
        this.indice = 0;
        this.mapa = fita.mapa
    }

    setup(){
        pontuacao = new Pontuacao ();
        cenario = new Cenario(imagemCenario, 2);
        vida = new Vida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial);
        
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30,  52, 52, 104, 104, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 220, 100, 75, 200, 150, 10);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15);
      
        inimigos.push(inimigo);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoTroll);
      
    }

    keyPressed(key){
        if (key === 'ArrowUp'){
            personagem.pula()
            somDoPulo.play()
        
          }
    }

    draw(){
        cenario.exibe();
        cenario.move();
        pontuacao.exibe();
        pontuacao.addPonto();
        personagem.exibe();
        personagem.aplicaGravidade();
        vida.draw();
      
      const linhaAtual = this.mapa[this.indice]

      const inimigo = inimigos[linhaAtual.inimigo];
      const inimigoVisivel = inimigo.x <- inimigo.largura;

      inimigo.velocidade = linhaAtual.velocidade;
      
      inimigo.exibe()  
      inimigo.move()
      
      if(inimigoVisivel){
        this.indice++;
        inimigo.aparece()
        if(this.indice > this.mapa.length - 1){
          this.indice = 0 
        }
        
      }
          
      if (personagem.estaColedindo(inimigo, inimigoTroll)){
        
        vida.perdeVida()
        personagem.tornaInvencivel()
      if (vida.vidas === 0){
        image(imagemGameOver, width/2 - 200, height/3)
        noLoop()
      }
        
        }
    }
    
}