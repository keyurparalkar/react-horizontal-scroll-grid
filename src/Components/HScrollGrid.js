import React from 'react';
import '../Stylesheets/HScrollGrid.css';

class HScrollGrid extends React.Component{
    constructor(props){
        super(props);

        this.hscrollRef = React.createRef();
    }

    componentDidMount(){
        let n = this.hscrollRef.current.children.length;
        this.hscrollRef.current.style.setProperty('--total', n);
        
        console.log(`CHILDRENS  = ${n}`);
    }
    render(){
        return(
            <ul className="hscroll-grid" ref={this.hscrollRef}>
                <li className="card">test</li>
                <li className="card">test</li>
                <li className="card">test</li>
                <li className="card">test</li>
                <li className="card">test</li>
            </ul>
        );
    }
}

export default HScrollGrid;