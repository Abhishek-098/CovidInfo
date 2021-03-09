import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useEffect,useState} from 'react';
import './index.css';
import Table from './Table';

const App = () =>{
    const [details,setData] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://api.covid19india.org/data.json`)
            .then(res=>{
                setData(res.data.statewise[0]);
            })
            .catch(err=>{
                console.log(err);
            })
        
    },[]);
    
    
    return(<>
        <section className ="main">
            <div className = 'container'>
                <div className ="row">
                    <div className ="col-10 mx-auto">
                        <div className ="row justify-content-center">
                            <h1 className ="my-5">Covid-19 Info DashBoard</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className ="col-md-4 col-10 my-2">
                            <div className="card">
                                <h5 className="card-header text-center">Total Cases</h5>
                                <div className="card-body">
                                    <p className="card-text text-center">{details.confirmed}</p>
                                </div>
                            </div>
                            </div>
                            <div className ="col-md-4 col-10 my-2">
                            <div className="card">
                                <h5 className="card-header text-center">Recovered</h5>
                                <div className="card-body">
                                    <p className="card-text text-center">{details.recovered}</p>
                                </div>
                            </div>
                            </div>
                            <div className ="col-md-4 col-10 my-2">
                            <div className="card">
                                <h5 className="card-header text-center">Deaths</h5>
                                <div className="card-body">
                                    <p className="card-text text-center">{details.deaths}</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className ="row my-5">
                            <h2>Details</h2>
                        </div>
                        </div>
                        <div className ="col-12 table-bottom">
                        <div className ="row scroll">
                            
                            <Table/>
                        </div>

                        </div>
                    
                </div>
            </div>
        </section>

    </>);
}

export default App;