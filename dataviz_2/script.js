function plotBar(path, id){
  d3.csv(path, d3.autoType).then(data => {
      console.log(data)
      // Guardamos el svg generado en la variable chart
      let max = d3.max(data, function(d) {return d.nacionalidad;})
      

      let chart = Plot.plot({
        x: {
          grid: true,
          labelOffset: 40,
          label: "Cantidad",
        },
        marks: [
          Plot.barX(data, Plot.groupY({x: "count"}, {y: "nacionalidad", sort: {y: "x", reverse: true}, 
          fill: "#7b70b2"})),
          Plot.ruleX([0])
        ],
        y: {
          label: null,
        },
        
        marginLeft: 150,
        marginBottom: 100,
        width: 900,
        height: 450,
        style:{
          fontSize: 13,
        },
      });
      d3.select(id).append(() => chart)
    })
  }