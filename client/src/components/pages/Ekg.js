
import React, { Fragment } from "react";


import Plotly from 'plotly.js-dist';
import createPlotlyComponent from 'react-plotly.js/factory';


const Plot = createPlotlyComponent(Plotly);

let admins = require('../../json/temp.json');
let length = admins.length;
let data = [];


for(var i = 0; i < length; i++) {
    data.push(i*(1/520));
}


var wykresy = []

    // for(var i = 0; i < 30; i+=0.2){

    //     let wykres = {
    //         x: [i, i],
    //         y: [-5, 5],
    //         type: 'scatter',
    //         mode: 'lines',
    //         line: {
    //             color: 'rgb(240,20,0)',
    //             width: 0.5,
    //             simplify: false
    //         }
    //     }

    //     wykresy.push(wykres)
    // }

    // for(var i = 0; i < 30; i+=0.04){

    //     let wykres = {
    //         x: [i, i],
    //         y: [-5, 5],
    //         type: 'scatter',
    //         mode: 'lines',
    //         line: {
    //             color: 'rgb(240,20,0)',
    //             width: 0.05,
    //             simplify: false
    //         }
    //     }

    //     wykresy.push(wykres)
    // }
    
var ekg =  {
    x: data,
    y: admins,
    type: 'scattergl',
    marker: {color: 'green'},
    name: 'Date testing',
}


wykresy.push(ekg);


var layout = {
    width: 1700, height: 700, title: 'ECG',

    xaxis: {
      autotick: false,
      tick0: 0,
      dtick: 0.04,
      ticklen: 0,
      tickwidth: 0,
      gridcolor: '#e0a19d',
      gridwidth: 0.5,
      side: 'left',
      ticks: '',
      showticklabels: false
    },
    yaxis: {
      autotick: false,
      tick0: 0,
      dtick: 0.04,
      ticklen: 0,
      tickwidth: 0,
      gridcolor: '#e0a19d',
      gridwidth: 0.5,
      ticks: '',
      showticklabels: false
    },
    


}

const Ekg = () => {

     return (
         <div>
        <Plot
          data={
              wykresy
            }
            layout={layout}

          />
          </div>
        );
};
export default Ekg;