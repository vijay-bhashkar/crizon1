import React, {useEffect, useState} from "react";
// import { Chart, registerables, Doughnut } from 'chart.js';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,BarElement,CategoryScale,LinearScale } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale,LinearScale,BarElement);

export const Homegraph = () => {
      const data = {
        labels: ['Age 1 to 10, Total: 426pt', 'Age 1 to 10, Total: 426pt', 'background: #8085E9;', 'Age 1 to 10, Total: 426pt', 'Age 1 to 10, Total: 426pt', 'Age 1 to 10, Total: 426pt', 'Age 1 to 10, Total: 426pt', 'Age 1 to 10, Total: 426pt' ],
        datasets: [
          {
            label: 'States Wise Data',
            data: [12, 19, 3, 5, 2, 3, 1, 5],
            backgroundColor: [
              '#F7A35C',
              '#90ED7D',
              '#8085E9',
              '#F15C80',
              '#E4D354',
              '#2B908F',
              '#7CB5EC',
              '#434348'
            ],
           
            borderWidth: 1,
          },
        ],
      };


      const labels = ['Celiac Disease', 'Crohn Disease', 'Ulcerative Colitis Disease', ];
const data1 = {
  labels: labels,
  datasets: [{
    label: 'Total Patients',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: ['rgb(46,94,158)', 'rgb(46,94,158)', 'rgb(46,94,158)',
    ],
   
   
  }]
};

const config = {
  type: 'bar',
  data: data1,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  },
};
 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


  return (
    <div className="content_wrapper">
      <div className="wrapper_contentbody">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                <div className="graphicbox1"> <Bar options={options} data={data1} /></div>
                </div>
                <div className="col-lg-6">
                <div className="graphicbox1"> <Bar options={options} data={data1} /></div>
                </div>
              
            </div>
            <div className="row mt-5">
              <div className="col-lg-6">
                  <div className="graphicbox"> <Doughnut data={data}  /> </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};
