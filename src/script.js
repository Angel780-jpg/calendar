const fecha = new Date();

const dia = {
  day: "numeric",
};

const mes = {
  month: "long",
};

const anio = {
  year: "numeric",
};

document.getElementById("dei");
dei.innerHTML = fecha.toLocaleDateString("es-ES", dia);

document.getElementById("mes");
mont.innerHTML = fecha.toLocaleDateString("es-ES", mes);

document.getElementById("yiear");
yiear.innerHTML = fecha.toLocaleDateString("es-ES", anio);
