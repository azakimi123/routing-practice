import React, {Component} from 'react';
import './Display.css';



class Display extends Component{
    render() {
        return(
            <div className='display-container'>
                <div className='work-card'>
                    <div id={`work-pic-${this.props.work.id}`}>
                        <p className='work-title'>{this.props.work.title}</p>
                        <img 
                            src={this.props.work.img} 
                            alt={this.props.work.title}
                            className='work-pic'/>
                        <a href={`/work/${this.props.work.id}`}>
                        <img className='work-arrow' src='https://image.flaticon.com/icons/svg/892/892498.svg' alt='down arrow'/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Display;