//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=120; timeIni=120; timeBon=0;
var successes=0; successesMax=3; attempts=0; attemptsMax=1;
var score=0; scoreMax=3; scoreInc=1; scoreDec=1
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
var timeOnMessage=5; messageOk=""; messageTime=""; messageError=""; messageErrorG=""; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9wYXJyYWZvcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var actMaxWidth="600"; actMaxHeight="400";profG=0;dirMedia="Ordenar_parrafos_resources/media/";
var indexG=0;
var words1G=["MSBMZXkgZGUgTmV3dG9u","McKwIExleSBkZSBOZXd0b24gZGljZSBxdWU=","VW4gb2JqZXRvIGVuIHJlcG9zbw==","TyBhIHZlbG9jaWRhZCBjb25zdGFudGU=","U2UgbWFudGllbmUgZW4gZXNlIGVzdGFkbw==","QSBtZW5vcyBxdWU=","VW5hIGZ1ZXJ6YSBleHRlcm5hIGludGVydmVuZ2E="];
var words2G=["MsKwIExleSBkZSBOZXd0b24=","TGEgc2VndW5kYSBsZXkgZGUgTmV3dG9u","RGljZSBxdWUgbGEgYWNlbGVyYWNpw7NuIGRl","VW4gb2JqZXRvIGVzIGRpcmVjdGFtZW50ZSBwcm9wb3JjaW9uYWw=","QSBsYSBzdW1hIGRlIHRvZGFzIGxhcyBmdWVyemFz","UXVlIGFjdHVhbiBzb2JyZSBlbA=="];
var words3G=["M8KwIExleSBkZSBOZXd0b24=","TGEgdGVyY2VyYSBsZXkgZGUgTmV3dG9uIGRpY2UgcXVl","VG9kbyBvYmpldG8gYWwgYXBsaWNhciB1bmEgYWNjacOzbiBzb2JyZSBlbA==","U2UgY3JlYSB1bmEgcmVhY2Npw7Nu","RGUgaWd1YWwgbWFnbml0dWQ=","RW4gc2VudGlkb3MgY29udHJhcmlvcw=="];
var c1=[15,25,19,23,25,11,29];
var c2=[16,24,26,38,30,19];
var c3=[16,33,42,20,17,22];
