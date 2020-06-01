// Write your Character component here
import React from 'react';

import { Card } from 'reactstrap';

const Character = (props) => {
    return (
        <Card className="character">
            <section className="character-header">
                <h2>{props.species}</h2>
            </section>
            <section className="character-info">

            </section>
        </Card>
    );
};

export default Character;