async function drawVisualisation() {

  // Maak een lege visualisatie aan.
  let visualisation = echarts.init(document.getElementById('visualisation'));
  window.onresize = () => visualisation.resize();
  visualisation.showLoading();

  // Haal data op

  // Configureer de visualisatie.
  /** @type EChartsOption */
  let option = {
    title: {
      text: "Luchtvervuiling (PM10 in µg/m3)"
    },
    legend: {},

  }
  // Stuur de configuratie door naar de visualisatie.
  visualisation.setOption(option);

  // Verberg het laadscherm.
  visualisation.hideLoading();

}

window.addEventListener('load', drawVisualisation);