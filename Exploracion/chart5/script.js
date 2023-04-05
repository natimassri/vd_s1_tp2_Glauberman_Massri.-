d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      round: true,
      marks: [
        Plot.rect(data, Plot.bin({fill: "count"}, {x: "anio_mision", y: "edad_mision"})),
        Plot.ruleY([20]),
        Plot.ruleX([2008]),
      ],
      color:{
        scheme: 'purples',
        legend: true,
      },
      marginLeft : 50,
      marginTop : 30,
    });
    d3.select('#chart').append(() => chart)
  })
