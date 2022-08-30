// !addcom !so $(eval let usuario='$(query)'; let usuarioTwitch='$(twitch $(query) {{displayName}})'; let usuarioUrl='$(twitch $(query) {{url}})'; $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/shoutout.js))

if(!usuario){
    "Error en el comando: !so [canal]";
}else if(!usuarioTwitch || !usuarioUrl){
    "Usuario no encontrado";
}else{
    `/announcepurple Sigue a ${usuarioTwitch} en su canal: ${usuarioUrl}`;
}

