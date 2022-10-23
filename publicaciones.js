announcements(type);

function announcements(announce) {
	/* URL posts */
	const posts = {
		instapic: {
			msg: "📷NUEVA FOTO📷 Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/Cj4Ns0RjgZc"
		},
		instareel: {
			msg: "👀NUEVO REEL👀 Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/Cj4Ns0RjgZc"
		},
		youtube: {
			msg: "📽️NUEVO VIDEO📽️ Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.youtube.com/watch?v=dUcjHlO7LjQ"
		},
		tiktok: {
			msg: "🔥NUEVO TIKTOK🔥 Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.tiktok.com/@eritrajinx/video/7157397576126352646"
		},
		sorteo: {
			msg: "✨SORTEO ION BUNDLE 2.0✨ Participa en el sorteo de skins Ion 2.0 #Valorant 💜",
			url: "https://twitter.com/EritraJinx/status/1582832735776710656"
		},
		sorteo2: {
			msg: "",
			url: ""
		},
		sorteo3: {
			msg: "",
			url: ""
		}
	};

	if(announce in posts){
		return "/announce " + $(posts[announce].msg) + " " +  $(posts[announce].url);
	}else{
		return "Opción no encontrada.";
	};
}

/* $(eval const type = decodeURIComponent(`$(querystring)`); $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/publicaciones.js)) */
