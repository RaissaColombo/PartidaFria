var tela = 0;//começar nessa;
//tela 1:/ de instruções
//tela 2:/ de créditos
//tela 3:/ de jogo
//tel

var myFont;

var img; // imagem fundo menu
var img2; // imagem fundo jogo

//informações para botão intruções:
var xMinBotao1 = 150;
var larguraBotao = 200;
var xMaxBotao1 = xMinBotao1 + larguraBotao;
var yMinBotao1 = 200;
var alturaBotao = 60;
var yMaxBotao1 = yMinBotao1 + alturaBotao;

//informações para botão créditos:
var yMinBotao2 = 280;
var yMaxBotao2 = yMinBotao2 + alturaBotao;

//informações botão play:
var xMinBotaoP = 210;
var larguraBotaoP = 75;
var xMaxBotaoP = xMinBotaoP + larguraBotaoP;
var yMinBotaoP = 360;
var alturaBotaoP = 60;
var yMaxBotaoP = yMinBotaoP + alturaBotaoP;

//informações botão voltar ("menu"):
var xMinBotaoV = 10;
var larguraBotaoV = 75;
var xMaxBotaoV = xMinBotaoV + larguraBotaoV;
var yMinBotaoV = 10;
var alturaBotaoV = 60;
var yMaxBotaoV = yMinBotaoV + alturaBotaoV;

//var para botões alternativas:
var localx = 26
var larguraBotao_P = 450
var xMaxBotao3 = localx + larguraBotao_P

//var pontuação final:
var pontuacaoCerta = 0
var fase;

//var auxiliares:
var status1 = false;
var status2 = false;
var status3 = false;
var status4 = false;
var status5 = false;
var status6 = false;
var status7 = false;
var status8 = false;
var status9 = false;
var status10 =false;

function botaoMenu (texto, yMin, yMax,posicao, opcao){  //botões da capa do jogo
   if (mouseX > xMinBotao1 && mouseX < xMaxBotao1 && mouseY > yMin && mouseY < yMax){
      fill(250);
        if(mouseIsPressed) {
            if(mouseButton == LEFT){
            tela = opcao;
            }
        }
    }
    
    else{
      fill(237,170,125); //preenchimento do botão (sem)   
    }
 
    rect (xMinBotao1,yMin,larguraBotao,alturaBotao,20); //criando botões ; o ultimo arredonda
    textSize (26);
    fill (0);
    text (texto,posicao,yMin + 40);
} //botoes capa

function mouseClicked(){
  if (tela == 0){ //tela ==0
    if (mouseX > xMinBotaoP && mouseX < xMaxBotaoP && mouseY > yMinBotaoP && mouseY < yMaxBotaoP){
      fill (250);
      tela = 1;
           }        
    else{
      fill(237,170,125); //preenchimento do botão (sem)   
    }
  }
}

function botaoPlay (){
  
   //if (mouseX > xMinBotaoP && mouseX < xMaxBotaoP && mouseY > yMinBotaoP && mouseY < yMaxBotaoP){
      //fill (250);
        //if (mouseIsPressed) {
           // if (mouseButton == LEFT){
            //tela = 1;
            //}
        //}
   // }
   // else{
      //fill(237,170,125); //preenchimento do botão (sem)   
    //}
  fill(237,170,125);
  rect (xMinBotaoP,yMinBotaoP,larguraBotaoP,alturaBotaoP,40);
  triangle (xMinBotaoP + 20, 405,yMinBotaoP - 85 , 390, xMinBotaoP+ 20, 370);
}

function retornoMenu (){    //função para o botão de retorno ao menu:
  fill(0) 
  textSize(20)
  text("menu",25, 45); 
   
   if (mouseX > xMinBotaoV && mouseX < xMaxBotaoV && mouseY > yMinBotaoV && mouseY < yMaxBotaoV){
      fill (250);
        if (mouseIsPressed) {
            if (mouseButton == LEFT){
            tela = 0;
            }
        }
    }
    else{
      noFill (); //preenchimento do botão (sem)   
    }
 
  rect (xMinBotaoV , yMinBotaoV ,larguraBotaoV,alturaBotaoV,40);
} //botoes menu (para retorno)

function telaInicial (){
  
    background(70,120,160); //cor do fundo
    image(img,0,0, 500,500)
    textSize (52);
    fill(0); // cor da letra
    textFont(myFont);
    text("Partida ",120,60); // título do jogo
    text("Fria",180,120)
    //strokeWeight(2)
    //stroke(48) // borda da letra
    //fill(0);
    
    //textSize(52);
    //text("PARTIDA FRIA", 100, 45,280);
    

  botaoMenu("Instruções", yMinBotao1, yMaxBotao1, 180, "Instrucoes")// posição e tela
  
  botaoMenu("Créditos", yMinBotao2, yMaxBotao2, 194, "Credito");
  
  botaoPlay()
} 

function telaInstrucoes (){
  
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() //função (informções contidas) de voltar ao menu
  
  
  // título página:
  textSize (50);
  fill(0); // cor da letra
  //stroke(100);// borda da letra
  text("Instruções:",130,60);
  
  //informações do jogo:
  textSize(24);
  text("Use o botão esquerdo do mouse para clicar sobre a resposta correta;",30,120,440); // o ultimo é até onde o texto vai antes da quebra.
  textSize(24);
  text("Ao responder a questão você será direcionado à uma página de resposta;",30,210,445);
  textSize(24);
  text("Após completar o quiz, aparecerá a quantidade de acertos realizados durante o jogo;",30,300,445);
  textSize(25);
  text("Bom quiz!! ;)",180,460,445);

} 

function telaCredito (){
  
  background(244,220,161);
  
  
  image(img2,0,0, 500,500)/// tentar mudar opacidade
  
  retornoMenu() //função (informções contidas) de voltar ao menu
 
  
  // título página:
  textSize (50);
  fill(10); //Define a cor usada para preencher as formas.
  //R, G & B --> fill(255, 204, 0);
  text("Créditos:",160,60);
  
  //informçãos:
  textSize(35);
  text("Paulo Roberto",70,110);
  text("Raissa Colombo",70,300);
  
  textSize(18);
  text("Função: Educador",70,135);
  text("Função: Programadora",70,330);
  
  textSize(16);
  fill(50);
  text("Professor de Geografia",70,150,400);
  text("Estudante de Ciências e Tecnologia na UFRN",70,345,400);
  //image(imagemEducador,20,110);
  //image(imagemProgramadora,20,280);
}

function alternativas (texto,tam, localx, localt, yMin, yMax,ytexto, opcao, proximaTela){ //botoes resposta das questões
    if (mouseX > localx && mouseX < xMaxBotao3 && mouseY > yMin && mouseY < yMax){
      fill (237,170,125);
        if (mouseIsPressed) {
            if (mouseButton == LEFT){
             //tela = opcao;
              
              if(opcao==200){ //Resposta correta
                telaRespostaCerta(opcao, proximaTela)
               
              }else{
                if(opcao==300){ //Resposta errada
                  telaRespostaErrada(opcao, proximaTela)
                
                }
              }
              
              
            }
        }
    }
    else{
      fill(220); // cor de preenchimento do botão   
    }
 
    rect (localx , yMin, larguraBotao + 250,alturaBotao,20);  //criando botões ; o ultimo arredonda
    textSize (tam);
    fill (0);
    text (texto,localt,yMin + ytexto);
  
}

function telaRespostaCerta(proximaTela, proximaFase){
  tela = proximaTela;
  console.log("CERTA - proximaFase="+proximaFase)
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu () //função (informções contidas) de voltar ao menu
  //cronometro() //passar automático para outra fase
  
  textSize (80);
  fill(1,49,83); //Define a cor usada para preencher as formas.
  text("MUITO BEM!!!",30,300);
  
  textSize (20);
  fill(0); //Define a cor usada para preencher as formas.
  text("OBS: Aperte a tecla de espaço para continuar!",24,450);
  
  //pontuacaoCerta = pontuacaoCerta + 1; //contagem de pontos
  

  if (keyIsDown(32)){ ///passar telaaaaaaaaaaa no espaço
  tela = proximaFase;
    
  }
}

function telaRespostaErrada(proximaTela, proximaFase){
  tela = proximaTela; 
  console.log("ERRADA - proximaFase="+proximaFase)
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  ///temporizador
  
  textSize (250);
  fill(195,56,45); //Define a cor usada para preencher as formas.
  //R, G & B --> fill(255, 204, 0);
  text("X",155,300);
  
  textSize (20);
  fill(0); //Define a cor usada para preencher as formas.
  text("OBS: Aperte a tecla de espaço para continuar!",24,450);
  
  retornoMenu() //função (informções contidas) de voltar ao menu
  
  if (keyIsDown(32)){ ///passar telaaaaaaaaaaa no espaço
  tela = proximaFase;
  }
}

function telaFase1 (){ //primeira fase
  fase = 1;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() //função de voltar ao menu      
  
  textSize (50);
  fill(0); //Cor preenchimento de formas.
  text("Partida 1",140,60);
    
  //pergunta:
  textSize(22) 
  text("QUE FATO HISTÓRICO MARCOU O FINAL",60,130,450) 
  text(" DA GUERRA FRIA?",150,160,450)
  
  //alternativas:  
  alternativas ("QUEDA DO MURO DE BERLIN",18,26, 150,200, 260,40,200,4);//texto,tam,localx,localt,yMin,yMax,opcao,prox.tela;
  
  alternativas ("BOMBAS ATÔMICAS EM HIROSHIMA E NAGASAKI",18,26,65,270,335,40,300,4) //xretan.; xtexto; i.marcação da cor; f.marcação da cor; tela direcionada.
  
  alternativas ("EXPANSIONISMO ALEMÃO",18,26,145,340,410,40,300,4)
  
  alternativas ("A MORTE DE ADOLF HITLER",18,26, 150,410,470,40,300,4)
}

function telaFase2 (){
  fase = 2;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() //função de voltar ao menu. 
  
  textSize (50);
  fill(0);
  text("Partida 2",140,60);
    
  //pergunta:
  textSize(14) 
  text("    O AMERICAN WAY OF LIFE INFLUENCIOU GRANDEMENTE O MUNDO, INCLUSIVE A EUROPA, SOBRETUDO A PARTIR DO FIM DA SEGUNDA G.M., TENDO A ECONOMIA AMERICANA SE TORNADO O PILAR DO COMÉRCIO GLOBAL, POR ISSO, QUANDO ENTRA EM CRISE, O MUNDO INTEIRO SOFRE OS SEUS EFEITOS NEFASTOS",20,90,455) 
  text("O MOMENTO HISTÓRICO QUE MELHOR DEFINE O TEXTO ACIMA É:",55,180,450)
  
  //alternativas:
    
  alternativas ("GUERRA DAS CORÉIAS",18,26, 160,200, 260,40,300,6); 
  
  alternativas ("GUERRA DO VIETNAM",18,26,160,270,335,40,300,6) 
  
  alternativas ("GUERRA DA CRIMÉIA",18,26, 165,340,410,40,300,6)
 
  alternativas ("GUERRA FRIA",18,26,195,410,470,40,200,6)

}

function telaFase3 (){
  fase = 3;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu()
  
  textSize (50);
  fill(0);
  text("Partida 3",140,60);
    
  //pergunta:
  textSize(22) 
  text("Em que época histórica o mundo foi ",60,110,455) 
  text ("chamado de “mundo Bi-polar”?", 90,150,455)
        
  //alternativas:
  alternativas ("NA ÉPOCA DA PRIMEIRA GUERRA MUNDIAL",18,26, 90,200, 260,40,300,8); 
  
  alternativas ("NA ÉPOCA DA SEGUNDA GUERRA MUNDIAL",18,26,90,270,335,40,300,8) 
  
  alternativas ("NA ÉPOCA DA GUERRA FRIA",18,26, 140,340,410,40,200,8)
 
  alternativas ("O MUNDO É CHAMADO ASSIM ATUALMENTE",18,26,90,410,470,40,300,8)
  
}

function telaFase4 (){
  fase = 4;
  background(244,220,161);
  image(img2,0,0,500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 4",140,60);
    
  //pergunta:
  textSize(22) 
  text("QUAIS OS DOIS SISTEMAS ECONÔMICOS QUE  ",35,110,455) 
  text ("ENTRARAM EM CONFLITO DURANTE A GUERRA", 32,140,450)
  text("FRIA?",220,170,450)
  
  //alternativas:
  alternativas ("SOCIALISMO E CAPITALISMO",18,26,135,200, 260,40,200,10); 
  
  alternativas ("SOCIALISMO E COMUNISMO",18,26,135,270,335,40, 300, 10) 
  
  alternativas ("COMUNISMO E COLETIVISMO",18,26,135,340,410, 40,300, 10)
 
  alternativas ("CAPITALISMO E ANARQUISMO",18,26,135,410,470,40, 300, 10)
  
}

function telaFase5(){
  fase = 5;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 5",140,60);
  
  //pergunta:
  textSize(22) 
  text("QUAIS OS DOIS BLOCOS MILITARES QUE  ",70,110,455) 
  text ("SE FORMARAM SURANTE A GUERRA FRIA", 70,140,450)
  text("E QUAIS PAÍSES OS LIDERARAM?",110, 170,450)
  
  //alternativas:
  alternativas ("OTAN - (EUA) E BENELUX - (BÉLGICA)",16,26,125,200, 260,40,300,12); 
  
  alternativas ("TRÍPLICE ENTENTE - (REINO UNIDO) E OTAN - (EUA)",16,26,75,270,335,40,300, 12) 
  
  alternativas ("TRÍPLICE ALIANÇA - (ALEMANHA) E OTAN - (EUA)",16,26,83,340,410,40, 300, 12)
 
  alternativas ("OTAN - (EUA) E PACTO DE VARSÓVIA - (UNIÃO SOVIÉTICA)",16,26,45,410,470,40, 200, 12)
  
}

function telaFase6(){
  fase = 6;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 6",140,60);
  
  //pergunta:
  textSize(19.8) 
  text("O PACTO DE VARSÓVIA, CRIADO EM 1955 E",75,110,455) 
  text ("EXTINTO EM 1991, TEVE COMO PRINCIPAL OBJETIVO:", 26,140,450)

  //alternativas:
  alternativas ("REUNIR OS PAÍSES SOCIALISTAS CONTRA A OTAN",16,26,75,200,260,40,300,14); 
  alternativas ("CONSOLIDAR A INFLUÊNCIA SOVIÉTICA SOBRE OS PAÍSES DA EUROPA OCIDENTAL",12.3,26,36,270,335,40,200, 14) 
  
  alternativas ("CONSOLIDAR A INFLUÊNCIA SOCIALISTA NA EUROPA OCIEDENTAL",15,26,40,340,410,40, 300, 14)
 
  alternativas ("CONTER A INFLUNCIA SOVIÉTICA SOBRE OS PAÍSES DA EUROPA OCIDENTAL",13,26,40,410,470,40, 300, 14)
  
}

function telaFase7(){
  fase = 7;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 7",140,60);
  
  //pergunta:
  textSize(17.5) 
  text("A URSS TRANSFORMOU-SE, APÓS 1945, NUMA DAS",60,95,455) 
  text ("POTÊNCIAS MUNDIAIS, TANTO NO CAMPO ECONÔMICO",40,120,450)
  text("COMO TÉCNICO. UM DOS MELHORES EXEMPLOS DESSA",45, 145,450)
  text("TRANSFORMAÇÃO É O:",150,170,450)

  alternativas ("DESENVOLVIMENTO DA POLÍTICA ESPACIAL,",14,26,135,200,260,25,200,16);
  text("REPRESENTADA PELA 1° VIAGEM EM TORNO DA TERRA POR GAGARIN",50,245,500)
  
  alternativas ("DESENVOLVIMENTO DA INDSTRIA CINEMATOGRÁFICA",14,26,90,270,335,25,300, 16)
  text("E DAS TEORIAS EM TORNO DA FUSÃO NUCLEAR",110,315,500)
  
  alternativas ("DESENVOLVIMENTO DA INDÚSTRIA AUTOMOBILÍSTICA",14,26,90,340,410,25,300,16)
 text("E O INCREMENTO DO SISTEMA INDUSTRIAL PRIVADO", 95,385,500)
 
  alternativas ("CRESCIMENTO DO MERCADO INTERNO, COM O DESENVOLVIMENTO",14,26,50,410,470, 25,300, 16)
  text("DE NOVAS TCNICAS DE CULTIVO AGRPICOLA E AUMENTO DE SALÁRIOS",36,455)
}

function telaFase8(){
  fase = 8;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 8",140,60);
  
  //pergunta:
  textSize(14) 
  text("''",30,95,455)
  text("É LÓGICO QUE OS EUA DEVEM FAZER O QUE LHES FOR POSSÍVEL PARA ",45,95,455) 
  text ("AJUDAR A PROMOVER O RETORNO AO PODER ECONÔMICO NORMAL NO ",33,120,450)
  text("MUNDO, SEM O QUE NÃO PODE HAVER ESTABILIDADE POLÍTICA NEM ",45,145,450)
  text("GARANTIA DE PAZ. '' (PLANO MARSHALL 5. VI. 1947). ESSE PLANO:",50,170,450)
  
  //alternativas:
  alternativas ("ASSEGURAVA A PENETRAÇÃO DE CAPITAIS NORTE-AMERICANOS NO",14,26,45,200,260,25,300,16);
  text("CONTINENTE EUROPEU, SOBRETUDO EM SUA PARTE ORIENTAL",67,245,500)
  
  alternativas ("GARANTIA, AOS NORTE-AMERICANOS, O  RETORNO A UMA POLÍTICA",13,26,60,270,335,25,300, 16)
  text("ISOLACIONISTA, VOLTADA UNICAMENTE PARA OS SEUS INTERESSES INTERNOS",33,315,500)
  
  alternativas ("PRETENDIA DETER AS AMEAÇAS SOVIÉTICAS SOBRE OS PAÍSES DO ORIENTE",12,26,55,340,410,25,300,16)
 text("MÉDIO, CUJA PRODUÇÃO DE PETRÓLEO ERA VITAL PARA AS ECONOMIAS OCIDENTAIS",30,385,500)

  alternativas ("ERA UM INSTRUMENTO DECISIVO NA LUTA CONTRA O AVANÇO DO",14,26,55,410,470, 25,200, 16)
  text("COMUNISMO NA EUROPA ARRASTADA PELO PÓS-GUERRA",80,455)
}

function telaFase9(){
  fase = 9;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 9",140,60);
  
  //pergunta:
  textSize(14) 
  text("EM 1955, OS PAÍSES DO LESTE EUROPEU INSTITUEM UMA ALIANÇA ",60,95,455) 
  text ("MILITAR. A ESSÊNCIA DESSA ALIANÇA ESTÁ EM UM COMPROMISSO",55,120,450)
  text("DE AJUDA MÚTUA, EM CASO DE AGRESSÃO ARMADA DE OUTRAS",60,145,450)
  text("NAÇÕES. ESTAMOS NOS REFERINDO AO PACTO DE:",95,170,450)
  
  //alternativas:
  alternativas ("BANDUNG",28,26,180,200,260,40,300,16);
  
  alternativas ("VARSÓVIA",28,26,177,270,335,40,200, 16)
  
  alternativas ("POTSDAM",28,26,180,340,410,40,300,16)
 
  alternativas ("SUEZ",28,26,210,410,470,40,300, 16)
  }

function telaFase10(){
  fase = 10;
  background(244,220,161);
  image(img2,0,0, 500,500)
  
  retornoMenu() 
  
  textSize (50);
  fill(0); 
  text("Partida 10",140,60);
  
  //pergunta:
  textSize(16) 
  text ("UM DOS SÍMBOLOS DA GUERRA FRIA FOI A CONSTRUÇÃO",60,120,450)
  text("DO MURO DE BERLIM. QUAL DAS ALTERNATIVAS ABAIXO",62,145,450)
  text("EXPLICA A EXISTÊNCIA DESSE MURO?",115,170,450)
  
  //alternativas:
  alternativas ("O MURO DE BERLIM FOI CONSTRUÍDO NA DÉCADA DE 1940 PARA ",13,26,75,200,260,25,300,16);
  text("IMPEDIR A INVASÃO DA CAPITAL ALEMÃ PELO EXÉRCITO ALIADO",72,245,500)
  
  alternativas ("O MURO DE BERLIM FOI  UMA LINHA IMAGINÁRIA",13,26,125,270,335,25,300, 16)
  text("PARA DIVIDIR AS DUAS ALEMANHAS (UMA SOCIALISTA E OUTRA CAPITALISTA)",35,315,500)
  
  alternativas ("EM 1961 FOI CONSTRUÍDO O MURO DE BERLIM; PARA DIVIDIR",13,26,85,340,410,25,200,16)
 text("A CIDADE EM DUAS PARTES: UMA CAPITALISTA E OUTRA SOCIALISTA",62,385,500)
 
  alternativas ("O MURO DE BERLIM FOI CONTRUÍDO, COM FINANCIAMENTO SOVIÉTICO,",11.5,26,70,410,470, 25,300, 16)
  text("AO REDOR DA CIDADE PARA PROTEGER A CAPITAL ALEMÃ DA INFLUÊNCIA CAPITALISTA",35,455)
}

function telaFinal(){
  fase = 30;
  background(255)
  fill(0)
  textSize(40)
  text ("Você acertou:",110,180)
  text( pontuacaoCerta,240,240 )
  text("QUESTÕES",170,300)
}

function preload (){
  img = loadImage("guerra_fria.jpg") // imagem capa
  img2 = loadImage( "guerra_fria_2.jpg") //imagem capa cinza
  myFont = loadFont("fonte.ttf");
} 

function setup (){
    createCanvas(500,500);
  
 } 

function draw (){
  
  cursor("grab") //mãozinha 
  
    if (tela == 0){
      telaInicial();
   }
  
    if (tela == "Instrucoes"){
      telaInstrucoes();
    }
  
    if (tela == "Credito"){
      telaCredito();
    }
  
    if (tela == 1){ 
      telaFase1();
        
    }
        if (tela == 200 && fase==1){  //Resposta correta
          telaRespostaCerta(200,4)
          
          if(status1==false){
            pontuacaoCerta ++;
            status1=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==1){  //Resposta errada
          telaRespostaErrada(300,4)
        }
        
    if (tela == 4){ //////////////////
      telaFase2()
    }
        if (tela == 200 && fase==2){ //Resposta certa
          telaRespostaCerta(200,6)
          
          if(status2==false){
            pontuacaoCerta ++;
            status2=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==2){ //Resposta errada
          telaRespostaErrada(300,6)
        }
        
    if (tela == 6){ ///////////
      telaFase3()
    }
        if (tela == 200 && fase==3){
          telaRespostaCerta(200,8)
          if(status3==false){
            pontuacaoCerta ++;
            status3=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==3){
          telaRespostaErrada(300,8)
        }
        
    if (tela == 8){ ///////////////
       telaFase4()
    }
        if (tela == 200 && fase==4){
          telaRespostaCerta(200,10)
          if(status4==false){
            pontuacaoCerta ++;
            status4=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==4){
          telaRespostaErrada(300,10)
        }
    
    if (tela == 10){ 
       telaFase5()
    }
        if (tela == 200 && fase==5){
          telaRespostaCerta(200,12)
          if(status5==false){
            pontuacaoCerta ++;
            status5=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==5){
          telaRespostaErrada(300,12)
        }
    
    if (tela == 12){
      telaFase6()
    }
        if (tela == 200 && fase==6){
          telaRespostaCerta(200,14)
          if(status6==false){
            pontuacaoCerta ++;
            status6=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==6){
          telaRespostaErrada(300,14)
        }
    
    if (tela == 14){
      telaFase7()
    }
        if (tela == 200 && fase==7){
          telaRespostaCerta(200,16)
          if(status7==false){
            pontuacaoCerta ++;
            status7=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==7){
          telaRespostaErrada(300,16)
        }
    
    if (tela == 16){
        telaFase8()
    }
        if (tela == 200 && fase==8){
          telaRespostaCerta(200,18)
          if(status8==false){
            pontuacaoCerta ++;
            status8=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==8){
          telaRespostaErrada(300,18)
        }
    
  if (tela == 18){
        telaFase9()
    }
        if (tela == 200 && fase==9){
          telaRespostaCerta(200,20)
          if(status9==false){
            pontuacaoCerta ++;
            status9=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==9){
          telaRespostaErrada(300,20)
        }
  
  if (tela == 20){
        telaFase10()
    }
        if (tela == 200 && fase==10){
          telaRespostaCerta(200,30)
          if(status10==false){
            pontuacaoCerta ++;
            status10=true;
          }
          console.log("Pontuação atual: "+pontuacaoCerta)
          
        }
        if (tela == 300 && fase==10){
          telaRespostaErrada(300,30)
        }
  
    if (tela == 30){
      telaFinal()
}
}