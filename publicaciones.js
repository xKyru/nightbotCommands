announcements(type);

function announcements(announce) {
	const announceStyles = ["/announce", "/announceblue", "/announcegreen", "/announceorange", "/announcepurple"];
	const posts = {
		instapost: {
			title: "๐ท๐๐๐๐๐ ๐๐๐๐๐ท",
			msg: "Me ayudas mucho al darle like, comentar y compartir ๐",
			url: "https://www.instagram.com/p/CmkzI8RDXBV"
		},
		instareel: {
			title: "๐๐๐๐๐๐ ๐๐๐๐๐",
			msg: "Me ayudas mucho al darle like, comentar y compartir ๐",
			url: "https://www.instagram.com/p/Cm3Kw_hALkO"
		},
		youtube: {
			title: "๐ฅ๐๐๐๐๐ ๐๐๐๐๐๐ฅ",
			msg: "Me ayudas mucho al darle like, comentar y compartir ๐",
			url: "https://www.youtube.com/watch?v=B09toQKEAG4"
		},
		tiktok: {
			title: "๐ฅ๐๐๐๐๐ ๐๐๐๐๐๐๐ฅ",
			msg: "Me ayudas mucho al darle like, comentar y compartir ๐",
			url: "https://www.tiktok.com/@eritrajinx/video/7186398745536236806"
		},
		twitter: {
			title: "โจ๐๐๐๐๐๐ ๐๐๐๐๐๐๐ ๐๐ ๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐๐โจ",
			msg: "Participa por un mezclador de audio de juegos ZG01 de Yamaha ๐",
			url: "https://twitter.com/EritraJinx/status/1598852763965804545"
		},
		skins:{
			skin1:{
				title: "โจ๐๐๐๐๐๐ ๐๐๐๐ | ๐๐๐๐๐๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐",
				msg: "",
				/*msg: "Participa por una skin de Zilean. Incluye Campeรณn + Skin + Chroma #LPP ๐"*/
				url: "https://twitter.com/EritraJinx/status/1610826039634149376"
			},
			skin2:{
				title: "โจ๐๐๐๐๐๐ ๐๐๐๐ | ๐๐๐๐๐ ๐๐๐๐๐๐ ๐๐๐๐๐๐โจ",
				msg: "",
				url: "https://twitter.com/EritraJinx/status/1611067632014266370"
			}
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
		if(announce === "skins"){
			let response = `${announceStyles[Math.floor(Math.random() * announceStyles.length)]}`;

			for(let [key, value] of Object.entries(posts.skins)){
				response += ` ${value.title} ${value.msg} ${value.url} `;
			}

			return response;
		}else{
			return `${announceStyles[Math.floor(Math.random() * announceStyles.length)]} ${posts[announce].title} ${posts[announce].msg} ${posts[announce].url}`;
		}
	}else{
		let options = "";
		for(let [key, value] of Object.entries(posts)){
			options += key + " | ";
		}
		return `Opciones disponibles: ${options}all`;
	};
}

/* !addcom !anuncio $(eval const type = decodeURIComponent(`$(querystring)`); $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/publicaciones.js)) */

/* 
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
๐
*/
