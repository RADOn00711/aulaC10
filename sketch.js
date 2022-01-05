//Criando Variáveis
var trex, trex_running;
var edges;
var ground, groundImage;
var chaoinvisivel;
//Pré-carregamento de imagens para criar uma animação em sprites
function preload() {
  //variável auxiliar trex_running recebendo as imagens 
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  //variável auxiliar groundImage recebendo as imagens 
  groundImage = loadImage("ground2.png");
}

//Configuração
function setup() {
  //Criando a área do jogo
  createCanvas(600, 200);

  //criando o chao invisivel
  chaoinvisivel = createSprite(200, 190, 400, 10);
  chaoinvisivel.visible = false;
  //criando o trex
  //sprite trex
  trex = createSprite(50, 160, 20, 50);
  //adicionando animação na var oficial com o rótulo running
  trex.addAnimation("running", trex_running);
  //Escala
  trex.scale = 0.5;

  //Criando as bordas para a área do jogo
  edges = createEdgeSprites();

  //Criando o solo
  //Sprite do solo
  ground = createSprite(200, 180, 400, 20);
  //adicionando uma imagem para o chão na var oficial 
  ground.addImage("ground", groundImage);
  //dividindo o tamando do chão por 2 para ele recarregar 
  ground.x = ground.width / 2;

}


function draw() {
  background("white");

  //colocando velocidade no chão
  ground.velocityX = -4;

  //mostrando no console a posição x do chão
  //console.log(ground.x);

  //Recarregando o chão
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  //registrando a posição y do trex no console
  console.log(trex.y)

  //pular quando tecla de espaço for pressionada
  if (keyDown("space")&& trex.y>=160) {
    trex.velocityY = -10;
  }

  //Gravidade para o trex voltar
  trex.velocityY = trex.velocityY + 0.5;

  // impedir que o trex caia 
  trex.collide(chaoinvisivel);

  //Trex colidindo com a borda, endereço matriz
  //trex.collide(edges[3]);

  drawSprites();
}