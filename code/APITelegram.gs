// https://api.telegram.org/botAPI_KEY/getUpadtes
//https://api.telegram.org/botAPI_KEY/setWebhook?url=url_WebAppUrl 


/* Opcions de comandes del bot 
ajuda - Informació sobre el bot 
info - Informació sobr eles Jornades 
tallers - Tallers assignats 
entrada - Codi QR per entrar o validar-se 
certificat - Certificat d'assistencia 
idioma - Selecciona d'idioma de comunicació del xatot
iden - Identificació 
*/


// Com API Telebot 
// Funcions per enviar a Telegram 
var XatBot = function(token){
  var telegramUrl = "https://api.telegram.org/bot" + token;
  
  this.sendPhoto = function(id,foto,caption)
   {
     var url = telegramUrl + "/sendPhoto?chat_id=" + id + "&photo=" + foto+"&caption=" + caption ;
     var response = UrlFetchApp.fetch(url);
     Logger.log(response.getContentText());
   }

   this.sendDocument = function(id,fitxer)
   {
     var url = telegramUrl + "/sendDocument?chat_id=" + id + "&document=" + fitxer;
     var response = UrlFetchApp.fetch(url);
     Logger.log(response.getContentText());
   }
   
   this.sendDocument2 = function(chatId,id,caption)
   {
     var fileId = id ;
     var img = DriveApp.getFileById(id);  
     var blob2 = img.getBlob().getAs("text/plain");
     var payload = {
          method: "sendDocument",
          chat_id: String(chatId),
          photo: blob2,
          caption : caption,
          parse_mode: "HTML"
          //disable_web_page_preview: true,
      };
 
      var options = {
        method: "POST",
        payload: payload,
        muteHttpExceptions : true
      };
     
     var request = UrlFetchApp.fetch( telegramUrl + '/', options);
     Logger.log(request.getContentText());
   }

   this.sendVideo = function(id,fitxer)
   {
     var url = telegramUrl + "/sendVideo?chat_id=" + id + "&video=" + fitxer;
     var response = UrlFetchApp.fetch(url);
     Logger.log(response.getContentText());
   }

   this.deleteMessage = function(id,id_missatge)
   {
     var url = telegramUrl + "/deleteMessage?chat_id=" + id + "&message_id=" + id_missatge;
     var response = UrlFetchApp.fetch(url);
     Logger.log(response.getContentText());
   }

   this.sendLocation = function(id,lat,long)
   {
     var url = telegramUrl + "/sendlocation?chat_id=" + id + "&latitude=" + lat + "&longitude=" + long ;
     var response = UrlFetchApp.fetch(url);
     Logger.log(response.getContentText());
   }

   this.getFile = function(file_id) 
   {
     var url = telegramUrl + "/getFile?file_id=A...EC";
     var response = UrlFetchApp.fetch(url);
     Logger.log(response.getContentText());
   }


   this.sendText = function(chatId,text,keyBoard)
   {
     keyBoard = keyBoard || 0;
     if(keyBoard.inline_keyboard || keyBoard.keyboard)
     {
      var data = {
       method: "post",
       payload: {
         method: "sendMessage",
         chat_id: String(chatId),
         text: text,
         parse_mode: "HTML",
         reply_markup: JSON.stringify(keyBoard)
       }
      }
     }
     else
     {
      var data = {
        method: "post",
        payload: {
          method: "sendMessage",
          chat_id: String(chatId),
          text: text,
          parse_mode: "HTML"
        }
      }
     }

     UrlFetchApp.fetch( telegramUrl + '/', data);

  }

   this.sendText3 = function(id,text)
   {
    var url = telegramUrl + "/sendMessage?chat_id=" + id + "&text=" +text ;
    var response = UrlFetchApp.fetch(url);
    Logger.log(response.getContentText());
   }

   this.sendPhoto2 = function(chatId,id,caption)
   {

    var fileId = id ;
    var img = DriveApp.getFileById(id);  
    var blob2 = img.getBlob();
 

    var payload = {
          method: "sendPhoto",
          chat_id: String(chatId),
          photo: blob2,
          caption : caption,
          parse_mode: "HTML"
          //disable_web_page_preview: true,
    };
 
    var options = {
     method: "POST",
     payload: payload,
     muteHttpExceptions : true
    };
     
    var request = UrlFetchApp.fetch( telegramUrl + '/', options);
    Logger.log(request.getContentText());
  }


   this.sendPhoto3 = function(chatId,blob2,caption)
   {

     var payload = {
          method: "sendPhoto",
          chat_id: String(chatId),
          photo: blob2,
          caption : caption,
          parse_mode: "HTML"
    
          //disable_web_page_preview: true,
     };
 
     var options = {
       method: "POST",
       payload: payload,
       muteHttpExceptions : true
     };
     
     var request = UrlFetchApp.fetch( telegramUrl + '/', options);
     Logger.log(request.getContentText());
   }


    this.downloadFile = function(fileURL,folder) 
    {
  
      var fileName = "";
      var fileSize = 0;
  
      var response = UrlFetchApp.fetch(fileURL, {muteHttpExceptions: true});
      var rc = response.getResponseCode();
  
      if (rc == 200) {
        var fileBlob = response.getBlob()
        var folder = DocsList.getFolder(folder);
        if (folder != null) {
         var file = folder.createFile(fileBlob);
         fileName = file.getName();
         fileSize = file.getSize();
        }
      }  
      
    }
    
    this.escriu_frase = function(frase,idioma)
    {
       if(idioma.length == 2 && idioma !="ca") var frase= LanguageApp.translate(frase, 'ca', idioma); // Si els dos idiomes coincideixen dona error, per això excluim fer traducció si l'idioma de l'usuari és el catalè 
       return frase ; 
  
    }
};

