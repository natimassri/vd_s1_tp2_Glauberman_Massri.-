d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      grid: true,
      marks: [
        Plot.rectY(data, Plot.binX({ y: "sum" }, { x: "anio_mision", y: "eva_mision_hs" })),
        Plot.rectY(
          data,
          Plot.binX(
            { y: "sum" },
            { x: "anio_mision", y: "eva_mision_hs", fillOpacity: 0.1, facet: "exclude" }
          )
        ),
        Plot.frame(),
      ],
      facet: {
        data: data, 
        x: "ocupacion",
        y: "", 
        marginRight: 50, 
        marginLeft: 50
      }, 
      fx: {
        insetLeft: 10,
        insetRight: 10,
        padding: 0.2
      },
      fy: {
        insetTop: 10,
        insetBottom: 10,
        padding: 0
      }, 
      width: 1000,
    });
    d3.select('#chart').append(() => chart)
  })

