import React from 'react';

import Character from './Character';

const Page = (props) => {
    return (
        <div className="page">
            {props.pokemon.pokemon_species.map((pokemon, idx) => {
                return <Character key={`${pokemon.name}-${idx}`} species={pokemon.name} />
            })}
        </div>
    );
};

export default Page;