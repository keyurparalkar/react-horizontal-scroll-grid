import React from 'react';
import HScrollGrid from './HScrollGrid';

const Example = () => {
    const keys = [1,2,3,4,5,6];
    const cards = keys.map(elem => <li key={elem}> Test </li>);
    return (
        <>
            <HScrollGrid 
            gridWidth={400}
            gridHeight={100}
            cardWidth={100}            
            >
                {cards}
                </HScrollGrid>
        </>
    )
};

export default Example;