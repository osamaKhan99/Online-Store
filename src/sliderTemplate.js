import React from 'react';
import Slick from 'react-slick';
import './Slider/slider.css';

const SliderTemplates = (props) => {
    let template = null
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...props.settings
    }
    switch(props.type){
        case('featured'):
        template = props.data.map((item,i)=>{
            return(
                <div key={i}>
                    <div style={{background: `URL(../image/slider${item.image})`}}>
                    </div>
                </div>
            )
        })
        break;
        default:
            template = null
    }
    return(
        <Slick {...settings}>
            {template}
        </Slick>
    )
}

export default SliderTemplates;