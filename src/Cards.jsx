import React from 'react';

const Cards =(props)=>{
    return(<>
        <div className ="col-md-3 col-10 my-3">
                    <div class="card prec-main">
                    <img src ={props.image} class="card-img-top" alt="..."/>
                    <div class="card-body prec-card">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                    </div>
                    </div>
        </div>
    </>);
}

export default Cards;