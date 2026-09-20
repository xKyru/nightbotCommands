gato(typeof user !== "undefined" ? user : "");

function gato(nombre) {
	const user = (nombre || "").toString().trim();
	const quien = user ? user : "tú";

	const razas = [
		"Gato de azotea", "Calicó de barrio", "Pantera de sofá",
		"Gato fiscal naranja", "CEO de la caja", "Gato de tesorería",
		"Tigre de balcón", "Leopardo de tendedero", "Esfinge de radiador",
		"Guardián del microondas", "Ninja de cortinas", "Sirena del atún",
		"Gato de teclado", "Auditor de plato", "Croissant con patas",
		"Gato de mochila", "Licenciado en siestas", "Gato de azotea VIP",
		"Pantera de lavadora", "Gato de techo de lámina", "Conde de la caja",
		"Gato de vecindad", "Ministro de croquetas", "Gato de estacionamiento",
		"Faraón del armario", "Gato de terraza", "Capitán del refrigerador"
	];

	const colores = [
		"negro azabache", "blanco nieve", "naranja fuego", "crema vainilla",
		"gris azul", "chocolate", "canela", "lila", "plateado", "dorado",
		"atigrado gris", "atigrado naranja", "carey", "calicó", "humo",
		"gris"
	];

	const patrones = [
		"sólido", "atigrado",
		"bicolor", "tricolor calicó", "carey", "torbie",
		"rosetas de leopardo", "sombreado", "esmoquin", "calcetines blancos",
		"máscara de bandido", "cola de anillos",
	];

	const pelajes = [
		"pelo corto sedoso", "pelo largo de nube", "pelo semilargo esponjoso",
		"pelo rizado", "casi sin pelo", "pelo denso de invierno",
		"pelo brillante de pantera", "pelo mullido"
	];

	const ojos = [
		"ojos verdes esmeralda", "ojos azules glaciales", "ojos dorados",
		"ojos ámbar", "ojos con heterocromía ", "ojos cobre",
		"ojos avellana", "ojos turquesa"
	];

	const personalidades = [
		"juez silencioso del hogar", "comediante de las 3 a.m.",
		"CEO de la caja de cartón", "sirena vocal que exige atún",
		"ninja de las cortinas", "terapeuta profesional de regazo",
		"ladrón certificado de pollo", "guardia de seguridad del teclado",
		"influencer de siestas", "arquitecto de torres de almohadas",
		"cazador de partículas de polvo",
		"experto en miradas de decepción", "co-piloto no solicitado del monitor"
	];

	const rarezas = [
		"tiene un bigote más largo que el otro",
		"ronronea en stereo",
		"cree que es un perro cuando hay visitas",
		"colecciona tapones de botella",
		"odia el cilantro (y a veces a ti)",
		"tiene un plan de 12 pasos para abrir el refrigerador",
		"duerme en forma de croissant",
		"te vigila mientras comes",
		"comunica solo con parpadeos lentos",
		"declaró la guerra a una bolsa de plástico"
	];

	const titulos = [
		"Tu tipo de gato es:"
	];

	const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

	const raza = pick(razas);
	const color = pick(colores);
	const patron = pick(patrones);
	const pelo = pick(pelajes);
	const ojo = pick(ojos);
	const perso = pick(personalidades);
	const rareza = pick(rarezas);
	const titulo = pick(titulos);

	const plantillas = [
		`${titulo} ${raza} ${color}, de ${pelo}, patrón ${patron} y ${ojo}. ${quien} es un(a) ${perso}. Detalle único: ${rareza}. 🐱`
	];

	return pick(plantillas);
}

/*
Nightbot:
!addcom !gato -cd=10 $(eval const user = `$(user)`; $(https://raw.githubusercontent.com/xKyru/nightbotCommands/refs/heads/main/gato.js))
*/
