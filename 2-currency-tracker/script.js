async function drawVisualisation() {

    // Maak een lege visualisatie aan.
    let visualisation = echarts.init(document.getElementById('visualisation'));
    window.onresize = () => visualisation.resize();
    visualisation.showLoading();

    // De volgende code wordt iedere 5000 milliseconden uitgevoerd (5 seconden).
    setInterval(async function () {

        // Haal data op.

        // Configureer de visualisatie.
        /** @type EChartsOption */
        let option = {
            
        }

        // Stuur de configuratie door naar de visualisatie.
        visualisation.setOption(option);

        // Verberg het laadscherm.
        visualisation.hideLoading();

    }, 5000)
}

window.addEventListener('load', drawVisualisation);
