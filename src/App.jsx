import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import './index.css';
import Table from './Table';

const App = () =>{
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
                                    <p className="card-text text-center">12345678</p>
                                </div>
                            </div>
                            </div>
                            <div className ="col-md-4 col-10 my-2">
                            <div className="card">
                                <h5 className="card-header text-center">Recovered</h5>
                                <div className="card-body">
                                    <p className="card-text text-center">1234567890</p>
                                </div>
                            </div>
                            </div>
                            <div className ="col-md-4 col-10 my-2">
                            <div className="card">
                                <h5 className="card-header text-center">Deaths</h5>
                                <div className="card-body">
                                    <p className="card-text text-center">0987654321</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className ="row my-5">
                            <h2>Details</h2>
                        </div>
                        </div>
                        <div className ="col-12">
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