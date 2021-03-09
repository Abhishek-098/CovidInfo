import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
const Table =()=>{
     const [details,setData] = useState([]);

    useEffect(()=>{
        axios
            .get(`https://api.covid19india.org/data.json`)
            .then(res=>{
                setData(res.data.statewise);
            })
            .catch(err=>{
                console.log(err);
            })
        
    },[]);
    
    details.splice(0,1);

    // console.log(first);
    const narr = details.map((values)=>{

        return(<>
            <tr>    
                    <td className ="text-center">{values.state}</td>
                    <td className ="text-center">{values.confirmed}</td>
                    <td className ="text-center">{values.active}</td>
                    <td className ="text-center">{values.recovered}</td>
                    <td className ="text-center">{values.deaths}</td>
                    <td className ="text-center">{values.lastupdatedtime}</td>
                </tr>
        </>);
    })
    
    // console.log(details.statewise);
    return(<>
        <table className="table ">
            <thead className="table-dark">
                <tr>
                    <td className ="text-center">State</td>
                    <td className ="text-center">Total Cases</td>
                    <td className ="text-center">Active Cases</td>
                    <td className ="text-center">Total Recovered</td>
                    <td className ="text-center">Total Deaths</td>
                    <td className ="text-center">Last Updated</td>
                </tr>
            </thead>
            <tbody className ="t-rows">
             {narr}
            </tbody>
        </table>
    
    </>);
}

export default Table;
