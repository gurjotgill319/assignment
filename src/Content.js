import React, { Component } from "react";
import Game from "./data.json";

const games = Game.map(
    (Game) => 
    {
        return(
        <div className="col-4" key={Game.id}>
        <div className="card shadow-sm">
            <img src={Game.image} alt={Game.game} />
            <div className="card-body">
                <p className="card-text">{Game.description}</p>
                </div>      
            </div> 
        </div>

        );
    }
);

class Content extends Component {
    render() {
        return (
            <div className="album py-4 bg-light">
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4 ">

                {games}

            </div>
            </div>
            </div>
        );
    }
}

export default Content;
