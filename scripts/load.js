function preload(){
    imagemCenario = loadImage("imagens/cenario/floresta.png")
    imagemPersonagem = loadImage("imagens/personagens/correndo.png")
    imagemInimigo = loadImage("imagens/inimigos/gotinha.png")
    imagemInimigoTroll = loadImage("imagens/inimigos/troll.png")
    imagemInimigoVoador = loadImage("imagens/inimigos/gotinha-voadora.png")
    imagemGameOver = loadImage("imagens/assents/game-over.png")
    imagemTelaInicial = loadImage("imagens/assents/telaInicial.png")
    imagemVida = loadImage("imagens/assents/coracao.png")
    
    fonteTelaInicial = loadFont("imagens/assents/fonteTelaInicial.otf")  

    somDoJogo = loadSound("sons/trilha_jogo.mp3");
    somDoPulo = loadSound("sons/somPulo.mp3");
  }