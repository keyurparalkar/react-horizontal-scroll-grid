/**
 *  @jest-environment jsdom
 */

import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import HScrollGrid from '../Components/HScrollGrid.js';


configure({ adapter: new Adapter() });

// it("Matches Snapshots", ()=> {
//     const { asFragment } = render(<HScrollGrid/>);

//     expect(asFragment()).toMatchSnapshot();
// });

it('Does Root Element Exists?', () => {
    // const keys = [1, 2];
    // const cards = keys.map(elem => <li key={elem}> Test </li>);
    const cards = [<li key="1">Test</li>]
    const mockElem0 = shallow(<HScrollGrid>{cards}
    </HScrollGrid>);

    expect(mockElem0.find('.hscroll-grid')).toHaveLength(1);
});

it('Does BackgroundColor exits for children?', () => {
    const cards = [<li key="1">Test</li>]
    const { getByTestId } = render(<HScrollGrid
        gridWidth={400}
        gridHeight={100}
        cardWidth={100}
        backgroundColor="blue">{cards}</HScrollGrid>);

        const ulNode = getByTestId('test-ul');
        // console.log(ulNode.style['_values']['--cBgCol'])

        expect(ulNode.style['_values']['--cBgCol']).toBe("blue");
    // expect(mockElem1.container.firstChild).toHaveClass('hscroll-grid');
    // expect(mockElem1.container.firstChild).toHaveStyle('width:400px');
});
