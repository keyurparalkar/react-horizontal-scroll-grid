import React from 'react';
import '../Stylesheets/HScrollGrid.css';

class HScrollGrid extends React.Component{
    constructor(props){
        super(props);

        this.hscrollRef = React.createRef();
    }

    componentDidMount(){
        let n = this.hscrollRef.current ? this.hscrollRef.current.children.length : 0;
        let gW = `${this.props.gridWidth}px`;
        let gH = `${this.props.gridHeight}px`;
        let cW = `${this.props.cardWidth}px`;
        let cardBgColor = this.props.backgroundColor ? this.props.backgroundColor : 'transparent';

        if(this.hscrollRef.current){
            this.hscrollRef.current.style.setProperty('--total', n);
            this.hscrollRef.current.style.setProperty('--gridWidth', gW);
            this.hscrollRef.current.style.setProperty('--gridHeight', gH);
            this.hscrollRef.current.style.setProperty('--cardWidth', cW);
            this.hscrollRef.current.style.setProperty('--cBgCol', cardBgColor);
        }
    }
    render(){
        return(
            <ul className="hscroll-grid" data-testid="test-ul" ref={this.hscrollRef}>
                {this.props.children}
            </ul>
        );
    }
}

export default HScrollGrid;