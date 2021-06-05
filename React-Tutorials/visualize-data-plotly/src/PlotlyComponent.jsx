import React from 'react';
import Plot from "react-plotly.js"

function PlotlyComponent(props) {
  const linspaceFn = (startValue, stopValue, cardinality) => {
  var arr = [];
  var step = (stopValue - startValue) / (cardinality - 1);
  for (var i = 0; i < cardinality; i++) {
    arr.push(parseFloat((startValue + (step * i)).toFixed(3)));
  }
  return arr;
}
  const t = linspaceFn(0, 20, 100)
  const x = t.map(i => (Math.cos(i)))
  const y = t.map(i => Math.sin(i))
  const z = t

  return (
    <div>
      <Plot
        onClick={(data) => {
          console.log(data.points[0])
        }}

        data={[
          {
            x: x,
            y: y,
            z: z,
            mode: 'markers', 
            type:'scatter3d',
            marker: {
              size:12,
              color:z,     
              colorscale:'Viridis', 
              opacity:0.8
            }
          }
        ]}
      />
    </div>
  );
}

export default PlotlyComponent;