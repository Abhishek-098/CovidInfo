import React from 'react';

const Cards =(props)=>{
    return(<>
        <div className ="col-md-3 col-10 my-3">
                    <div className="card prec-main">
                    <img src ={props.image} className="card-img-top" alt="..."/>
                    <div className="card-body prec-card">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                    </div>
                    </div>
        </div>
    </>);
}

export default Cards;