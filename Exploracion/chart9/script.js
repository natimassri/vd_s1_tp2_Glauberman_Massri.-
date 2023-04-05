d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      marks: [
        Plot.dot(data, { x: "mision_hs", fill: "ocupacion", fillOpacity: 0.3 }),
        Plot.ruleX(
        data,
        Plot.groupZ({x: "mean"}, {x: "mision_hs",  stroke: "ocupacion"}),
      )
      ],
    width: 1000,
    height: 300,
    facet: {
      data,
      y: "ocupacion",
      marginLeft: 200
    },
    fy: {
      axis: "left"
    },
    marginRight: 100
    });
    d3.select('#chart').append(() => chart)
  })

