d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      marks:[
        Plot.dot(data,{x:'mision_hs', y : 'anio_nacimiento', fill:'ocupacion', opacity:1})
      ],
      color: {
        scheme: "warm",
        legend: true,
      },
    grid: true,
    line: true,
    nice: true,
    });
    d3.select('#chart').append(() => chart)
  })