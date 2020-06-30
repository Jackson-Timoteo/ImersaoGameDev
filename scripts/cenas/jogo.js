class Jogo{
    constructor(){
        this.inimigoAtual = 0;
    }

    setup(){
        pontuacao = new Pontuacao ();
        cenario = new Cenario(imagemCenario, 2);
        vida = new Vida(3, 3);
        
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 30, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 30,  52, 52, 104, 104, 10, 100);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 52, 220, 100, 75, 200, 150, 10, 100);
        const inimigoTroll = new Inimigo(matrizInimigoTroll, imagemInimigoTroll, width, 0, 200, 200, 400, 400, 15, 100);
      
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
      
      const inimigo = inimigos[this.inimigoAtual];
      const inimigoVisivel = inimigo.x <- inimigo.largura;
      
      inimigo.exibe()  
      inimigo.move()  
      
      if(inimigoVisivel){
        this.inimigoAtual++;
        if(this.inimigoAtual > 2){
          this.inimigoAtual = 0 
        }
      
        inimigo.velocidade = parseInt(random(10,30));
      }
          
      if (personagem.estaColedindo(inimigo, inimigoTroll)){
        image(imagemGameOver, width/2 - 200, height/3)
        noLoop()
        }
    }
    
}