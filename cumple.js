(function () {
  var offsetMs = 6 * 60 * 60 * 1000;
  var mx = new Date(Date.now() - offsetMs);
  var y = mx.getUTCFullYear();
  var m = mx.getUTCMonth();
  var d = mx.getUTCDate();

  if (m === 8 && d === 23) {
    return "Hoy es mi cumpleaños 🥳🥳🥳";
  }

  var year = (m > 8 || (m === 8 && d > 23)) ? y + 1 : y;
  var target = Date.UTC(year, 8, 23, 6, 0, 0);
  var s = Math.max(0, Math.floor((target - Date.now()) / 1000));
  var days = Math.floor(s / 86400);
  s %= 86400;
  var hours = Math.floor(s / 3600);
  s %= 3600;
  var mins = Math.floor(s / 60);
  s %= 60;

  function unit(n, one, many) {
    return n + " " + (n === 1 ? one : many);
  }

  return (
    "Faltan " +
    unit(days, "día", "días") + " " +
    unit(hours, "hora", "horas") + " " +
    unit(mins, "minuto", "minutos") + " " +
    unit(s, "segundo", "segundos") +
    " para mi cumpleaños 🥳"
  );
})()
