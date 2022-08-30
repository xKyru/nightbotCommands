$(eval if ($(1) && $(2)) {
	Math.floor(Math.random() * ($(2) - $(1) + 1) + $(1));
} else {
	Math.floor((Math.random() * 100) + 1);
})
