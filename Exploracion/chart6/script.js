d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      grid: true,
      marks: [
        Plot.barY(data, Plot.groupX({y: "count"}, {x: "ocupacion", fill:"genero", sort:"pop"})),
        Plot.ruleY([0])
      ],
      x: {
        label: null,
      },
      marginLeft: 50,
      width: 1200,
      height: 500,
      inset: 30,
      color: {
        scheme: "prgn",
        legend: true,
      },
      style:{
        fontFamily: "Courier new",
        fontSize: 12,
      },
    });
    d3.select('#chart').append(() => chart)
  })