import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Bar} from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';



const Charts = () => {
         const [doughnutChartData ,setDoughnutChartData] = useState([]);
         const [barChartData ,setBarChartData] = useState([]);
         const [lineChartData ,setLineChartData] = useState([]);
         const [pieChartData ,setPieChartData] = useState([]);

         useEffect(() => {
             const dataUrl = './data.json';
             Axios.get(dataUrl).then((response) => {
                   
                    prepareChartData(response.data)
             }).catch((error) => {
                    console.log(error)
             });
         },[])


     const prepareChartData = (customers) => {
        
         let carNames = [];
         let carMileage = [];
         let carHorsePower = [];
         let carDisplacement = [];
         let carAcceleration = [];


         customers.map((customer,id) => {
            carNames.push(customer.Name)
            carMileage.push(customer.Miles_per_Gallon)
            carHorsePower.push(customer.Horsepower)
            carDisplacement.push(customer.Displacement)
            carAcceleration.push(customer.Acceleration)
         })

            let data = {
                labels : carNames,
                datasets : [
                  {
                    label : 'Mileage Per Gallon',
                    data : carMileage,
                    backgroundColor : [
                      "#ADD8E6"],
                    borderColor : [
                      "#6970d5"],
                    borderWidth : 1,
                  },
                ],
              };

              let doughnutData = {
                  labels : carNames,
                  datasets : [
                    {
                      label : 'HorsePower',
                      data :  carHorsePower,
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                      ],
                      borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                      ],
                      hoverOffset: 4
                    }
                  ] 
              };

              let lineData = {
                labels : carNames,
                datasets : [{
                  label : 'Displacement',
                  data : carDisplacement,
                  fill: false,
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgba(255, 99, 132, 0.2)',
                  tension: 0.1
                }]
              };

              let pieData = {
                labels : carNames,
                datasets : [{
                  label : 'Acceleration',
                  data : carAcceleration,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                  hoverOffset: 4
                }]
              };

              setLineChartData(lineData)
              setBarChartData(data);
              setDoughnutChartData(doughnutData);
              setPieChartData(pieData);

         }

         const options = {
          scales: {
            y: {
                beginAtZero: true
              }
            } 
          }

        const lineOptions = {
          scales: {
            y: {
                beginAtZero: false
              }
            } ,
          animations: {
            tension: {
              duration: 1000,
              easing: 'linear',
              from: 1,
              to: 0,
              loop: true
            }
          },
        }
        
        

    return (
        <React.Fragment>
           <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h2 text-primary text-center">CHART ANALYTICS FOR MILEAGE AND DISPLACEMENT</p>
                        <p className="lead">Generally speaking, the higher an engine's displacement the more power it can create, while the lower the displacement the less fuel it can consume.A high-displacement engine draws in more of the air/fuel mixture per revolution; therefore more fuel is consumed.</p>
                    </div>
                </div>
                
                <div className="row">
                  <div className="col-6">
                  <Bar data={barChartData} options={options} />
                  </div>
                  <div className="col-6">
                  <Line data={lineChartData} options={lineOptions} />
                  </div>
                </div>
                <br/> 
                <div className="row mt-4">
                  <div className="col">
                  <p className="h2 text-primary text-center">HORSEPOWER AND ACCELERATION ANALYSIS</p>
                  <p className="lead">The higher the horsepower the stronger and the faster the speed. But why is that important to you as a vehicle consumer? Horsepower determines the work potential of your cars engine. If your engine has strong horsepower then it has better acceleration, which is a strong factor in your cars overall performance.</p>
                  
                    <div className="row mt-3">
                      <div className="col-6">
                          <Doughnut data={doughnutChartData}/>
                      </div>
                      <div className="col-6">
                          <Pie data={pieChartData} />
                      </div>
                    </div>
                  </div>
                </div>
                <br /><br />
           </div>
        </React.Fragment>
    )
};
export default Charts;