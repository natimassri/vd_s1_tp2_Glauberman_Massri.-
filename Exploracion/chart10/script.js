d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      marks: [
        Plot.textX(
          data,
          Plot.groupY(
            { x: "sum", text: "first" },
            {
              x: "mision_hs",
              y: "ocupacion",
              text: "ocupacion",
              textAnchor: "start",
              fill: "ocupacion",
              sort: {y: "x", reverse: true}
            }
          )
        ),
        Plot.barX(
          data,
          Plot.groupY(
            { x: "sum", text: "first" },
            {
              x: "mision_hs",
              y: "ocupacion",
              text: "ocupacion",
              textAnchor: "start",
              fill: "ocupacion"
            }
          )
        )
      ],
      marginRight: 150,
      marginLeft: 10,
      width: 700,
      y: {
        label: null,
        tickFormat: null,
        tickSize: 0
      }
    
    });
    d3.select('#chart').append(() => chart)
  })

  
  