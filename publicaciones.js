announcements(type);

function announcements(announce) {
	const announceStyles = ["/announce", "/announceblue", "/announcegreen", "/announceorange", "/announcepurple"];
	const posts = {
		instapost: {
			title: "🔥𝐍𝐔𝐄𝐕𝐀 𝐅𝐎𝐓𝐎",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/ClDC8MqjAmi"
		},
		instareel: {
			title: "🔥𝐍𝐔𝐄𝐕𝐎 𝐑𝐄𝐄𝐋",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/ClxJy50Dims"
		},
		youtube: {
			title: "🔥𝐍𝐔𝐄𝐕𝐎 𝐕𝐈𝐃𝐄𝐎",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.youtube.com/watch?v=TjIv1QhuqVA"
		},
		tiktok: {
			title: "🔥𝐍𝐔𝐄𝐕𝐎 𝐓𝐈𝐊𝐓𝐎𝐊🔥",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.tiktok.com/@eritrajinx/video/7172317138420796677"
		},
		twitter: {
			title: "✨𝐒𝐎𝐑𝐓𝐄𝐎 𝐂𝐎𝐍𝐒𝐎𝐋𝐀 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎 𝐙𝐆𝟎𝟏 𝐘𝐀𝐌𝐀𝐇𝐀✨",
			msg: "Participa por un mezclador de audio de juegos ZG01 de Yamaha 💜",
			url: "https://twitter.com/EritraJinx/status/1598852763965804545"
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

/* 
𝐀
𝐁
𝐂
𝐃
𝐄
𝐅
𝐆
𝐇
𝐈
𝐉
𝐊
𝐋
𝐌
𝐍
𝐎
𝐏
𝐐
𝐑
𝐒
𝐓
𝐔
𝐕
𝐖
𝐗
𝐘
𝐙
*/