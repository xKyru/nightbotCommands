gato(typeof user !== "undefined" ? user : "");

function gato(nombre) {
	const user = (nombre || "").toString().trim();
	const quien = user ? user : "tú";

	const razas = [
		"Gato de azotea VIP", "Calicó del OXXO", "Pantera de microondas",
		"CEO de la caja de cartón", "Gato fiscal del SAT", "Tigre de balcón de lámina",
		"Esfinge de radiador quemado", "Sirena del atún en lata", "Licenciado en siestas",
		"Conde del tinaco", "Ministro de las croquetas", "Gato de estacionamiento",
		"Faraón del mueble de la tele", "Auditor de platos ajenos", "Gato cibernético de teclado",
		"Duque del sillón peludo", "Demonio de las 3 AM", "Gato de vecindad",
		"Tiburón de alfombra", "Ninja de cortinas viejas", "Croissant con patas"
	];

	const colores = [
		"naranja caótico", "negro medianoche misterioso", "blanco tipo queso oaxaca",
		"gris humo de camión", "crema mantequilla", "atigrado de dudosa procedencia",
		"tricolor discordante", "rosa fósforo (en su mente)", "plateado de lata de atún",
		"café con chocomilk", "amarillo pollito"
	];

	const patrones = [
		"esmoquin elegante pero sucio", "calcetines desparejados", "máscara de luchador",
		"manchas de dudosa simetría", "rayas de tigre deslavado", "rosetas de leopardo de tianguis",
		"parche pirata", "cola con anillos de mapache", "unipunto en la nariz",
		"panza peluda descubierta"
	];

	const personalidades = [
		"juez silencioso de tus decisiones de vida", "comediante incomprendido de las 3 a.m.",
		"ladrón profesional de pechuga de pollo", "guardia de seguridad del teclado mientras trabajas",
		"influencer de flojera extrema", "experto en miradas de profunda decepción",
		"co-piloto estorbo frente al monitor", "hooligan de las plantas del hogar",
		"psicólogo que te cobra con premios", "fantasma que tira cosas 'sin querer'",
		"dictador supremo de la casa"
	];

	const rarezas = [
		"le da un reboot mental si le tocas la pancita",
		"ronronea como motor de Vocho viejito",
		"cree seriamente que es un perro Dóberman",
		"colecciona ligas de cabello debajo del sillón",
		"odia la escoba con un odio ancestral y milenario",
		"tiene un plan de 12 pasos para dominar el mundo",
		"se asusta con su propia sombra",
		"comunica sus traumas mediante maullidos desgarradores frente al plato medio lleno",
		"declaró una guerra a muerte contra las bolsas de plástico",
		"corre a 100 km/h por el pasillo después de ir al baño",
		"duerme en posiciones que desafían las leyes de la física"
	];

	const titulos = [
		"Tu versión gatuna es:",
		"En el universo paralelo eres:",
		"Los astros dicen que tu gato interno es:",
		"Tu espíritu animal de cuatro patas:"
	];

	const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

	const raza = pick(razas);
	const color = pick(colores);
	const patron = pick(patrones);
	const perso = pick(personalidades);
	const rareza = pick(rarezas);
	const titulo = pick(titulos);

	const plantillas = [
		`${titulo} un **${raza}** color ${color}, patrón ${patron}. ${quien} es un(a) ${perso}. Dato perturbador: ${rareza}. 🐱`
	];

	return pick(plantillas);
}

/*
Nightbot:
!addcom !gato -cd=30 $(eval const user = `$(user)`; $(urlfetch json https://raw.githubusercontent.com/xKyru/nightbotCommands/main/gato.js))
*/
