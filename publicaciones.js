announcements(type);

function announcements(announce) {
	const announceStyles = ["/announce", "/announceblue", "/announcegreen", "/announceorange", "/announcepurple"];
    let response = `${announceStyles[Math.floor(Math.random() * announceStyles.length)]}`;
	const posts = {
		instapost: {
			title: "📷𝐍𝐔𝐄𝐕𝐀 𝐅𝐎𝐓𝐎📷",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/Co8aR6hLz7S"
		},/*
		instareel: {
			title: "👀𝐍𝐔𝐄𝐕𝐎 𝐑𝐄𝐄𝐋👀",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.instagram.com/p/CogP82eDoBR"
		},/*
		youtube: {
			title: "🎥𝐍𝐔𝐄𝐕𝐎 𝐕𝐈𝐃𝐄𝐎🎥",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.youtube.com/watch?v=B09toQKEAG4"
		},
		tiktok: {
			title: "🔥𝐍𝐔𝐄𝐕𝐎 𝐓𝐈𝐊𝐓𝐎𝐊🔥",
			msg: "Me ayudas mucho al darle like, comentar y compartir 💜",
			url: "https://www.tiktok.com/@eritrajinx/video/7202701406694870278"
		},*/
		/*twitter: {
			title: "✨𝐒𝐎𝐑𝐓𝐄𝐎 𝐂𝐎𝐍𝐒𝐎𝐋𝐀 𝐃𝐄 𝐀𝐔𝐃𝐈𝐎 𝐙𝐆𝟎𝟏 𝐘𝐀𝐌𝐀𝐇𝐀✨",
			msg: "Participa por un mezclador de audio de juegos ZG01 de Yamaha 💜",
			url: "https://twitter.com/EritraJinx/status/1628503701429141504"
		},*/
		skins:{
			skin1:{
				title: "❤️‍🔥𝐒𝐎𝐑𝐓𝐄𝐎 𝐒𝐊𝐈𝐍 | 𝐅𝐎𝐗𝐅𝐈𝐑𝐄 𝐀𝐇𝐑𝐈❤️‍🔥",
				msg: "",
				/*msg: "Participa por una skin de Zilean. Incluye Campeón + Skin + Chroma #LPP 💜"*/
				url: "https://twitter.com/EritraJinx/status/1598852763965804545"
			},
			skin2:{
				title: "✨𝐒𝐎𝐑𝐓𝐄𝐎 𝐒𝐊𝐈𝐍 | 𝐒𝐏𝐀𝐂𝐄 𝐆𝐑𝐎𝐎𝐕𝐄 𝐆𝐑𝐀𝐆𝐀𝐒✨",
				msg: "",
				url: "https://twitter.com/EritraJinx/status/1611067632014266370"
			}
		}

	};

    switch(announce){
        case "all":
            for(let [key, value] of Object.entries(posts)){
                response += ` ${value.title} ${value.url} `;
				if(Object.entries(value).length > 1){
					for(let [innerKey, innerValue] of Object.entries(value)){
						response += ` ${innerValue.title} ${innerValue.url} `;
					}
				}
            }
            return response;
        case(announce.includes(" ")):
            const announceArray = announce.split(" ");
            if(announceArray.length > 0){
                announceArray.forEach(arrayElement => {
                    if(arrayElement in posts){
                        response += `${announceStyles[Math.floor(Math.random() * announceStyles.length)]} ${posts[announce].title} ${posts[announce].msg} ${posts[announce].url}`;
                    }
                })
            }
            return response;
        case announce in posts:
            if(announce === "skins"){

                for(let [key, value] of Object.entries(posts.skins)){
                    response += ` ${value.title} ${value.msg} ${value.url} `;
                }
    
                return response;
            }else{
                return `${announceStyles[Math.floor(Math.random() * announceStyles.length)]} ${posts[announce].title} ${posts[announce].msg} ${posts[announce].url}`;
            }
        default: 
            let options = "";
            for(let [key, value] of Object.entries(posts)){
                options += key + " | ";
            }
            return `Opciones disponibles: ${options}all`;
    }
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
