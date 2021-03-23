import React, { Component } from 'react';
//import axios from 'axios';
import Card from '../widgets/card/card';
import { fetchData } from '../Redux/action';
import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';


class Containers extends Component {

   
    componentDidMount(){
        const { match: {params} } = this.props
      this.props.fetchData(params);
}

    render(){
       console.log("match", this.props)
        const item = this.props.match
        return(
            <div>
                <Card  menu={this.props.product.products} no={item.id}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps ) => {
       return{ 
            product: state.product,
            match: ownProps
       }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        fetchData: (match) => dispatch(fetchData(match))
    }
        
}


export default connect(mapStateToProps,mapDispatchToProps)(Containers);