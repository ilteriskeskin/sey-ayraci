![ornek](https://cdn.discordapp.com/attachments/924773509262110801/927007876407504896/seybot.PNG)

**:warning: Bu proje şaka amaçlıdır ama yer yer işe yarayabilir. :warning:**

Aslında bu proje Fatih Kadir Akın'ın [dahi](https://github.com/f/dahi) projesinden esinlenerek ortaya çıkmıştır.
---

Bu proje rootcf tarafından, Ali İlteriş Keskin([ilteriskeskin](https://github.com/ilteriskeskin)) tarafından yapılan "Şey" ayracının Discord Botları için yapılmış bir versiyonudur.
Sadece V13 botlarda çalışır. Eğer kullanıcı 'şey' kelimesini birleşik yazdığında kullanıcıyı uyarır.

### Ana Dosyanın (main ya da index.js) içine;
```javascript
client.on("messageCreate", async message => {

    let mesaj = message.content.split(' ');
    try {
        for (var i = 0; i <= mesaj.length; i++) {

            if (mesaj[i] != "şey" && mesaj[i].endsWith("şey")) {
                const embed = new MessageEmbed()
                    .setColor("#000000")
                    .addField("**Şey** her zaman ayrı yazılır! Mesajınız şöyle olmalıdır", "```" + message.content.split('şey').join(' şey') + "```");
                message.reply({ embeds: [embed] });



                break;
            }
            else {

            }
        }


    }
    catch {

    }
});
   ```
