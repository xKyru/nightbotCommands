
	let opt = '$(1)';  
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
	}



//$(eval $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/publicaciones.js))