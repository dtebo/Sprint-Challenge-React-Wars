// Write your Character component here
import React, {useState, useEffect} from 'react';

import { 
    Card,
    CardTitle,
    CardBody,
    CardText
} from 'reactstrap';

import './Character.css';
import Axios from 'axios';

const Character = (props) => {
    const [pokemonStats, setPokemonStats] = useState([]);

    useEffect(() => {
        // Axios.get(`https://pokeapi.co/api/v2/pokemon-species/${props.species}?limit=10&offset=0`)
        //     .then((resp) => {
        //         console.log(resp.data);

        //         let item = resp.data;

        //         setPokemonStats(item);
        //     });
        
    }, [pokemonStats, props.species]);

    return (
        <Card className="character">
            <CardTitle className="character-header">
                {props.species}
            </CardTitle>
            <CardBody className="character-info">
                <CardText>Moves: {props.moves}</CardText>
            </CardBody>
        </Card>
    );
};

export default Character;