import React from 'react';
import '../Stylesheets/HScrollGrid.css';

class HScrollGrid extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="hscroll-grid">
                <div className="card">test</div>
                <div className="card">test</div>
                <div className="card">test</div>
                <div className="card">test</div>
                <div className="card">test</div>
            </div>
        );
    }
}

export default HScrollGrid;