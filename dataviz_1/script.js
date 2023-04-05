function plotLine(path, id){
  d3.csv(path, d3.autoType).then(data => {
      console.log(data)
      // Guardamos el svg generado en la variable chart
      
      let chart = Plot.plot({
        grid: true,
        marks: [
          Plot.line(data.filter(d=> d.genero=="masculino"), 
          Plot.groupX({y: "count"}, {x:"anio_mision",stroke:"#4b1687" })),
          
          Plot.dot(data.filter(d=> d.genero=="masculino"), 
          Plot.groupX({y: "count"}, {x:"anio_mision", fill: "#4b1687"})),

          Plot.line(data.filter(d=> d.genero=="femenino"), 
          Plot.groupX({y: "count"}, {x:"anio_mision", stroke: "#9290c2"})),

          Plot.dot(data.filter(d=> d.genero=="femenino"), 
          Plot.groupX({y: "count"}, {x:"anio_mision", fill: "#9290c2"})),

          Plot.ruleY([0], {stroke:"#e5e5e5"})
        ],
        y:{
          grid:true,
          label: "Cantidad"
        },                  //PONER LEYENDA EN EL TITULO
        x:{
          labelOffset: 50,
          label : "Año mision",
          tickFormat: "d",
        },
        marginLeft: 60,
        marginBottom: 50,
        style:{
          fontFamily: "Courier new",
          fontSize: 12,
        },
      });
      d3.select(id).append(() => chart)
    })
}