async function drawVisualisation() {

  // Maak een lege visualisatie aan.
  let visualisation = echarts.init(document.getElementById('visualisation'));
  window.onresize = () => visualisation.resize();
  visualisation.showLoading();

  // Haal het stratenplan van Gent op.
  let gent = await getJson('https://data.stad.gent/api/v2/catalog/datasets/straten-gent/exports/geojson');
  echarts.registerMap('gent', { geoJSON: gent })

  // Haal de locaties van de fietsstations op.
  let stations = 

  // Haal de actuele beschikbaarheden van de fietsen op.
  let beschikbaarheden =

  // Combineer de locaties en de beschikbaarheden, dit is de data die gevisualiseerd zal worden.
  let data = 

  // Verberg het laadscherm.
  visualisation.hideLoading();

  // Stel de configuratie op
  /** @type EChartsOption */
  let option = {
    title: {
      text: 'Donkey Republic beschikbaarheid'
    },
    dataset: {
      source: data
    },
    geo: {
      map: 'gent',
      roam: true,
      geoIndex: 0
    },
    
    // Voeg series toe.
  };

  // Laad de configuratie in.
  visualisation.setOption(option);
}

window.addEventListener('load', drawVisualisation);