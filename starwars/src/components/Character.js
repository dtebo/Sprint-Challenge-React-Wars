// Write your Character component here
import React from 'react';

import { 
    Card,
    CardTitle,
    CardBody,
    CardText
} from 'reactstrap';

const Character = (props) => {
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