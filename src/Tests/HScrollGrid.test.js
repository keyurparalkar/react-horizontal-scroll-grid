/**
 *  @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import HScrollGrid from '../Components/HScrollGrid.js';


it("Matches Snapshots", ()=> {
    const { asFragment } = render(<HScrollGrid/>);

    expect(asFragment()).toMatchSnapshot();
});


describe('Checking HScrollGrid Attributes', ()=>{
    it('Does HScrollGrid has GridWidth, GridHeight, cardWidth?', ()=>{
        const { getByTestId } = render(<HScrollGrid 
            gridWidth={500}
            gridHeight={200}
            cardWidth={250}
            backgroundColor="grey"
        />);
    
        const ulNode = getByTestId('test-ul');
        expect(ulNode.style['_values']['--gridWidth'].indexOf('undefined')).toBe(-1);
        expect(ulNode.style['_values']['--gridHeight'].indexOf('undefined')).toBe(-1);
        expect(ulNode.style['_values']['--cardWidth'].indexOf('undefined')).toBe(-1);
        expect(ulNode.style['_values']['--cBgCol'].indexOf('undefined')).toBe(-1);
    });

    it('Does HScrollGrid has GridWidth=500px and GridHeight=200px ?',()=>{
        const { getByTestId } = render(<HScrollGrid data-testid="test-parent-container"
                gridWidth={500}
                gridHeight={200}        
        />);

        const ulNode = getByTestId('test-ul');

        expect(ulNode.style['_values']['--gridWidth']).toBe('500px');
        expect(ulNode.style['_values']['--gridHeight']).toBe('200px');

    });

    it('Is BackgroundColor blue for all children?', () => {
        const cards = [<li key="1">Test</li>]
        const { getByTestId } = render(<HScrollGrid
            gridWidth={400}
            gridHeight={100}
            cardWidth={100}
            backgroundColor="blue">{cards}</HScrollGrid>);
    
            const ulNode = getByTestId('test-ul');
    
            expect(ulNode.style['_values']['--cBgCol']).toBe("blue");
            
    });
});


