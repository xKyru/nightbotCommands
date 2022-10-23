function announcePost(socialName){
	switch (socialName){
		case "twitter":
			return "Hay nueva publicación de twitter";
		case "instagram":
			return "Hay nueva publicación de Instagram";
		default:
			return "Opción no encontrada";
	}
}
/* ///
	switch (opt){
		case twitter:
			return "Twitter";
		case facebook:
			return "Facebook";
		case tiktok:
			return "TikTok";
		case instagram:
			return "Instagram";
		case youtube:
			return "Youtube";
		case sorteo:
			return "Sorteo";
		default:
			return "Opción no encontrada";
	}*/



/*$(eval $(let opt = '$(1)'; urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/publicaciones.js))*/