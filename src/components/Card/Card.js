import React from "react";

const Card = ({pokemon}) =>{
    return (
        <div>
            <div>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h3>{pokemon.name}</h3>
                <div>
                    <ul>
                        <li>
                            タイプ:
                           
                        </li>
                            <li className="title">重さ: {pokemon.weight}</li>
                            <li className="title">高さ: {pokemon.height}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
