// !addcom !so $(eval let usuario='$(query)'; let usuarioTwitch='$(twitch $(query) "{{displayName}}")'; let usuarioUrl='$(twitch $(query) {{url}})'; $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/shoutout.js))
// !addcom !so $(eval let usuario="$(query)"; var usuarioTwitch="$(twitch usuario)"; $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/shoutout.js))


//!addcom !so $(eval var usuario="$(query)".toLowerCase(); var usuarioTwitch="$(twitch $(usuario))"; $(urlfetch https://raw.githubusercontent.com/xKyru/nightbotCommands/main/shoutout.js))

let announcements = [
    "announce",
    "announcepurple",
    "announcegreen",
    "announceorange"
]

if(!userName){
    "Error en el comando: !so [userName]";
}else{
    var usuarioTwitch='$(twitch $(userName) "{{displayName}}")'
    for(announce in announcements){
        `/${announce} ${usuarioTwitch}`;
        setTimeout(() => {
            
        }, 5100);
    }
}