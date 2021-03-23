import axios from 'axios';

const URL = 'http://localhost:3001';




export const addToCart = (id) => {
    return{
        type: 'ADD_TO_CART',
        id
    }    
}

export const removeCart = (id) => {
    return{
        type: 'REMOVE_FROM_CART',
        id
    }    
}

export const increaseCart = (id) => {
    return{
        type: 'INCREASE_CART',
        id
    }    
}

export const decreaseCart = (id) => {
    return{
        type: 'DECREASE_CART',
        id
    }    
}

export const emptyCart = () => {
    return{
        type: 'EMPTY_CART',
    }    
}

export function fetchData(){

    return function(dispatch){
         axios.get( `${URL}/home?id=${this.props.match.params.id}`)
            .then(res=>{
                console.log(res.data[0])
                let match = res.data[0]

             const { data } = axios.get(`${URL}/menu?id${match.id}`);
                dispatch(setFetchData(data, match));
                
    })
}
    function setFetchData(data, match){
        return{
            type: 'GET_DATA_MENU',
            match,
            payload: data
        }
    };
}

export function HomeData() {
    return async function(dispatch) {
      const { data } = await axios.get(`${URL}/home`);
        dispatch(setArticleDetails(data));
    };
  }
  
  function setArticleDetails(data) {
    return {
      type: 'HOME_DATA',
      payload: data
    };
  }