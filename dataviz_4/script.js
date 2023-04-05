function plotBar_4(path, id){
  d3.csv(path, d3.autoType).then(data => {
      console.log(data)
      // Guardamos el svg generado en la variable chart
      
      let chart = Plot.plot({
        grid: true,
        marks: [
          Plot.ruleY([0]),
          Plot.barY(data, Plot.groupX({y: "count"}, {x:"edad_mision",fill:"#4b1687" })),
        ],
        x:{
          label: "Edad de misión",
          labelAnchor: "right",
          tickLabelAnchor: "start",
          labelOffset : 40
        },
        y:{
          label: "Astronautas",
        },
        marginLeft: 70,
        width: 1400,
        height: 500,
        inset: 5,
        marginBottom: 100,
        style:{
          fontFamily: "Courier new",
          fontSize: 12,
        },
      });
      d3.select(id).append(() => chart)
    })
  }