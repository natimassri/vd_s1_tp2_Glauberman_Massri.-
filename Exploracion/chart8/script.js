d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    // Guardamos el svg generado en la variable chart
    
    let chart = Plot.plot({
      marks:[
        Plot.dot(data,{
          x:'anio_mision', y : 'mision_hs', fill:'mision_hs'})
      ],
      color: {
        type:"linear",
        scheme: "turbo",
        legend: true,
      },
      height: 260,
      width: 530,
      inset: 30,
    });
    d3.select('#chart').append(() => chart)
  })