import React, {Component} from 'react'
import './Button.css' 

export default class Button extends Component {    
    render() {
        let classes = 'button ';
        classes+= this.props.operation ? 'operation' : ''
        classes+= this.props.double ? 'double' : ''
        classes+= this.props.triple ? 'triple' : ''

        return(
            <button className={classes}
            onClick={() => this.props.click && this.props.click(this.props.label)}>
                {this.props.label}
            </button>
        ) 
    }
}