import React, { Component} from 'react';
import SliderTemplates from '../sliderTemplate';


class Slider extends Component {

    state = {
        news: []
    } 
   UNSAFE_componentWillMount(){
       fetch(`http://localhost:3001/slider`)
       .then( response => {
           console.log(response.data)
             this.setState({
                 news: response.data
             })
       })
   }
   
    render(){
        
         return(
                <div>    
              <SliderTemplates data={this.state.news} type={this.props.type}/>
              Slider
              </div>
        )
    }
}
export default Slider;