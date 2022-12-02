announcements(type);

function announcements(announce) {
	const announceStyles = ["/announce", "/announceblue", "/announcegreen", "/announceorange", "/announcepurple"];
	const posts = {
		instapost: {
			title: "📷NUEVA FOTO📷",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/ClDC8MqjAmi"
		},
		instareel: {
			title: "👀NUEVO REEL👀",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/Ckw-RWjjcIf"
		},
		youtube: {
			title: "📽️NUEVO VIDEO📽️",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.youtube.com/watch?v=TjIv1QhuqVA"
		},
		tiktok: {
			title: "🔥NUEVO TIKTOK🔥",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.tiktok.com/@eritrajinx/video/7172317138420796677"
		},
		twitter: {
			title: "✨SORTEO ION BUNDLE 2.0✨",
			msg: "Participa en el sorteo de skins Ion 2.0 #Valorant 💜",
			url: "https://twitter.com/EritraJinx/status/1582832735776710656"
		},
		xbox:{
			title: "✨Twitch + Xbox✨",
			msg: "Regala 2 o más sucripciones y obtén 3 meses de PC Game Pass",
			url: ""
		}
	};
	
	if(announce === "all"){
		let response = `${announceStyles[Math.floor(Math.random() * announceStyles.length)]}`;

		for(let [key, value] of Object.entries(posts)){
			response += ` ${value.title} ${value.url} `
		}

		return response;

	}
	else if(announce in posts){
		return `${announceStyles[Math.floor(Math.random() * announceStyles.length)]} ${posts[announce].title} ${posts[announce].msg} ${posts[announce].url}`;
	}else{
		let options = "";
		for(let [key, value] of Object.entries(posts)){
			options += key + " | ";
		}
		return `Opciones disponibles: ${options}all`;
	};
}

/* !addcom !anuncio $(eval const type = decodeURIComponent(`$(querystring)`); $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/publicaciones.js)) */