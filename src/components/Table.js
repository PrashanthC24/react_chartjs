import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Bar} from 'react-chartjs-2';
import axios from 'axios';

const Table = () => {
         const [customers ,setCustomers] = useState([]);
         const [errorMessage , setErrorMessage] = useState('');

         useEffect(() => {
             const dataUrl = './data.json';
             Axios.get(dataUrl).then((response) => {
                    setCustomers(response.data);
                    
             }).catch((error) => {
                    setErrorMessage(error);
             });
         },[])

    return (
        <React.Fragment>
           <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">FOURWHEELER SPECIFICATION</p>
                        <p className="lead">A car (or automobile) is a wheeled motor vehicle used for transportation. Most definitions of cars say that they run primarily on roads, seat one to eight people, have four wheels, and mainly transport people rather than goods.</p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col">
                        <table className="table table-hover table-striped text-center table-primary">
                            <thead className="indigo white-text">
                            <tr>
                                <th>SL.No</th>
                                <th>NAME</th>
                                <th>MILEAGE</th>
                                <th>CYLINDERS</th>
                                <th>DISPLACEMENT</th>
                                <th>HORSEPOWER</th>
                                <th>WEIGHT(lbs)</th>
                                <th>ACCELERATION</th>
                                <th>ORIGIN</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                customers.length > 0 ? 
                                    <React.Fragment>
                                        {
                                            customers.map((customer,id) => {
                                                return(
                                                    <tr key={id}>
                                                        <th>{id+1}</th>
                                                        <th>{customer.Name}</th>
                                                        <th>{customer.Miles_per_Gallon}</th>
                                                        <th>{customer.Cylinders}</th>
                                                        <th>{customer.Displacement}</th>
                                                        <th>{customer.Horsepower}</th>
                                                        <th>{customer.Weight_in_lbs}</th>
                                                        <th>{customer.Acceleration}</th>
                                                        <th>{customer.Origin}</th>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </React.Fragment> : null
                                }
                            </tbody>        
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default Table;