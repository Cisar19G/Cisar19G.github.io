//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=0; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=0;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=false;
var tiScore=false;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Que crack"; messageTime=""; messageError="q nuv, intenta otra vez"; messageErrorG="q nuv, intenta otra vez"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="UmVsYWNpb25hcg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[];
var c=["#FF00FF","#FF00FF","#FF0000","#FF0000","#80FF00","#80FF00","#FF0080","#FF0080","#FFFF00","#FFFF00","#552B42","#552B42","#808000","#808000","#80FFFF","#80FFFF"];
var x=["193","156","42","52","77","132","17","79","148","16","128","154","42","193","158","39"];
var y=["155","95","96","195","56","159","60","158","20","152","60","191","113","55","122","26"];
var t=["Barcelona","Madrid","Londres","Liverpool","Paris","Lyon","Oslo","Bergen","Estocolmo","Lund","Zurich","Berna","Lisboa","Oporto","Berlín","Munich"];
var cM=["#FF00FF","#FF0000","#004080","#80FF00","#FF0080","#FFFF00","#552B42","#808000","#80FFFF"];
var tM=["España","Inglaterra","Francia ","Italia","Noruega","Suecia ","Suiza ","Portugal","Alemania"];
var indexColor=0;
