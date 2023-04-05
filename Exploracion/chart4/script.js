d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      grid: true,
      marks: [
        Plot.barY(data, Plot.groupX({y: "count"}, {x: "status", fill:"genero"})),
        Plot.ruleY([0])
      ],
      marginLeft: 100,
      color: {
        range: ["rgb(235,8,252)","rgb(48,49,247)"],
        legend: true,
      },
    });
    d3.select('#chart').append(() => chart)
  })
