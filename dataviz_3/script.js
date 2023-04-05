function plotBar_3(path, id){
  d3.csv(path, d3.autoType).then(data => {
      console.log(data)
      // Guardamos el svg generado en la variable chart
      
      let chart = Plot.plot({
        grid: true,
        marks: [
          Plot.barY(data, Plot.groupX({y: "sum"}, {x: "anio_mision", y: "mision_hs", fill: "ocupacion", sort:"ocupacion"})),
          Plot.ruleY([0])
        ],
        x: {
          label: null,
          tickFormat: "d",
        },
        y:{
          tickFormat: "d",
        },
        marginLeft: 70,
        width: 1200,
        height: 500,
        inset: 5,
        color:{
          range: ["#40037f", "#65499f", "#8883bd", "#b2b1d5", "#bfc1de"],
          legend: true,
          
        },
        style:{
          fontFamily: "Courier new",
          fontSize: 12,
        },
      });
      d3.select(id).append(() => chart)
    })
  }