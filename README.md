# API Telegram per Google Apps Script (GAS)

Objectiu:
* no haver d'anar replicant les funcions que interactuen amb Telegram (enviar text, enviar fotos, enviar arxius ... etc. ) a cada script nou per a un Bot.
* recollir totes les funcions que interactuen amb Telegram en una llibreria.

**La idea és usar-la com l'api de Python [pyTelegramBotAPI](https://pypi.org/project/pyTelegramBotAPI/)**.

## Incorporació de la llibreria 

Dins del IDE per crear el script del nou Bot, anar a Recursos -> Biblioteques i incorporar la llibreria amb clau  **M7XUSZ9l1ZefA986hGMaTmvTIwh-nf2sw**.

![](https://i.imgur.com/ZifDLMg.png)

![](https://i.imgur.com/hMDsU0C.png)

![](https://i.imgur.com/a2AWyPg.png)

## Ús de la llibreria

Definir l'objecte bot com a objecte global per a tot el codi. Poseu a token el TOKEN del vostre bot.
```javascript=
var token = ""
var bot = new APITelegram.XatBot(token);
```

A partir de llavors totes les funcions de Telegram s'han de referenciar com a mètodes de l'objecte bot.

Aquí un exemple (**poseu el valor de variable id pel vostre identificador de Telegram**):
```javascript=
var token = ""
var bot = new APITelegram.XatBot(token);

function testBot(){
  var id = ""
  bot.sendText(id,"Provant llibreria");
  bot.sendText(id,bot.escriu_frase("Provant llibreria","en"));
}

}
```
Per executar-lo fer:

![](https://i.imgur.com/2MgAlc8.png)

I al Telegram apareix:

![](https://i.imgur.com/r0hMTpv.png)



## Codi llibreria

S'ha agafat la llibreria que ha fet en Ferran Mas per al curs [1920XATE](https://odissea.xtec.cat/course/view.php?id=65204) i s'ha modificat per crear la classe XatBot i posar com a mètodes les funcions d'en Ferran.

El codi el teniu [aquí](code/APITelegram.gs).

