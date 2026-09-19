gato(typeof user !== "undefined" ? user : "");

function gato(nombre) {
	const user = (nombre || "").toString().trim();
	const quien = user ? user : "tú";

	const razas = [
		"Persa", "Siamés", "Maine Coon", "Bengalí", "Ragdoll", "British Shorthair",
		"Sphynx", "Azul Ruso", "Angora Turco", "Sagrado de Birmania", "Abisinio",
		"Scottish Fold", "Exotic Shorthair", "Noruego de los Bosques", "Siberiano",
		"Oriental", "Balinés", "Burmés", "Bombay", "Chartreux", "Korat",
		"Mau Egipcio", "Ocicat", "Savannah", "Munchkin", "Manx", "Cymric",
		"Cornish Rex", "Devon Rex", "Selkirk Rex", "Peterbald", "Don Sphynx",
		"Van Turco", "Snowshoe", "Tonkinés", "Havana Brown", "Nebelung",
		"Somalí", "LaPerm", "American Curl", "American Bobtail", "Japanese Bobtail",
		"Singapura", "Sokoke", "Burmilla", "Pixiebob", "Highlander",
		"Lykoi (gato lobo)", "Toyger", "Chausie", "Khao Manee", "Turkish Angora",
		"European Shorthair", "Gato común europeo", "Calicó de barrio",
		"Gato naranja de tesorería", "Gato de azotea", "Pantera de sofá"
	];

	const colores = [
		"negro azabache", "blanco nieve", "naranja fuego", "crema vainilla",
		"gris azul", "chocolate", "canela", "lila", "plateado", "dorado",
		"atigrado gris", "atigrado naranja", "carey", "calicó", "smoke",
		"chinchilla", "point seal", "point chocolate", "point lila", "point flame",
		"bicolor tuxedo", "arlequín", "van", "ahumado", "fawn", "red tabby"
	];

	const patrones = [
		"sólido", "atigrado mackerel (rayas de tigre)", "atigrado clásico (mármol)",
		"atigrado moteado", "ticked (como el Abisinio)", "colorpoint",
		"bicolor", "tricolor calicó", "carey / tortie", "torbie",
		"rosetas de leopardo", "sombreado", "esmoquin", "calcetines blancos",
		"máscara de bandido", "cola de anillos", "bigotes teñidos de leche"
	];

	const pelajes = [
		"pelo corto sedoso", "pelo largo de nube", "pelo semilargo esponjoso",
		"pelo rizado rex", "casi sin pelo (elegante y tibio)", "pelo denso de invierno",
		"pelo brillante de pantera", "pelo mullido de peluche"
	];

	const ojos = [
		"ojos verdes esmeralda", "ojos azules glaciales", "ojos dorados",
		"ojos ámbar", "ojos odd-eyed (uno de cada color)", "ojos cobre",
		"ojos avellana", "ojos turquesa"
	];

	const personalidades = [
		"juez silencioso del hogar", "comediante de las 3 a.m.",
		"CEO de la caja de cartón", "sirena vocal que exige atún",
		"ninja de las cortinas", "terapeuta profesional de regazo",
		"ladrón certificado de pollo", "guardia de seguridad del teclado",
		"influencer de siestas", "arquitecto de torres de almohadas",
		"cazador de motas de polvo", "rey/reina del microondas a las 6:00",
		"experto en miradas de decepción", "co-piloto no solicitado del monitor"
	];

	const rarezas = [
		"tiene un bigote más largo que el otro",
		"ronronea en stereo",
		"cree que es un perro cuando hay visitas",
		"colecciona tapones de botella",
		"odia el cilantro (y a veces a ti, 0.3 segundos)",
		"tiene un plan de 12 pasos para abrir la nevera",
		"duerme en forma de croissant",
		"te vigila mientras comes como un auditor fiscal",
		"comunica solo con parpadeos lentos",
		"declaró la guerra a una bolsa de plástico"
	];

	const titulos = [
		"Tu tipo de gato es:",
		"El oráculo felino ha hablado:",
		"Diagnóstico oficial:",
		"Carta astral gatuna:",
		"Resultado del escáner 🐱:",
		"Tu forma gatuna revelada:"
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
		`${titulo} ${raza} ${color}, de ${pelo}, patrón ${patron} y ${ojo}. ${quien} es un(a) ${perso}. Detalle único: ${rareza}. 🐱`,
		`${titulo} un(a) ${raza} ${color} con ${ojo}. Pelaje: ${pelo} + ${patron}. Rol en la casa: ${perso}. Rareza: ${rareza}. 🐾`,
		`${titulo} ${raza}. Color ${color}, ${patron}, ${pelo}. ${quien} encarna a un(a) ${perso} y además ${rareza}. 😻`,
		`🔮 ${titulo} ${color.toUpperCase()} ${raza}. Mirada: ${ojo}. Estilo: ${patron}. Oficio: ${perso}. Easter egg: ${rareza}.`
	];

	return pick(plantillas);
}

/*
Nightbot (sin argumento):
!addcom !gato $(eval const user = `$(user)`; $(urlfetch json https://raw.githubusercontent.com/USUARIO/REPO/main/gato.js))

Nightbot (si quieres pasar query):
!addcom !gato $(eval const user = decodeURIComponent(`$(querystring)` ) || `$(user)`; $(urlfetch json https://raw.githubusercontent.com/USUARIO/REPO/main/gato.js))
*/
