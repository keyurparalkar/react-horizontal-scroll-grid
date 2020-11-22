import React from 'react';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HScrollGrid from '../Components/HScrollGrid.js';

configure({adapter: new Adapter()});
it('Does Root Element Exists?', ()=>{
    // const keys = [1, 2];
    // const cards = keys.map(elem => <li key={elem}> Test </li>);
    const cards = [<li key="1">Test</li>] 
    const mockElem0 = shallow(<HScrollGrid>{cards}
    </HScrollGrid>);

    expect(mockElem0.find('.hscroll-grid')).toHaveLength(1);
});

it('Does BackgroundColor exits?', ()=>{
    const cards = [<li key="1">Test</li>] 
    const mockElem1 = shallow(<HScrollGrid>{cards}
    </HScrollGrid>);
    mockElem1.setProps({backgroundColor: 'blue'});

    // console.log(mockElem1.find('.hscroll-grid'));
    expect(mockElem1).to.equal('ul');
    // expect(mockElem1.find('ul').childAt(0)).toHaveStyle('backgroundColor','blue');
});
