import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import 'reactjs-popup/dist/index.css';
import TextField from "@mui/material/TextField";
import {CContainer} from '@coreui/react'
import { apiURL } from '../Config/Config.';

import CardPokemon from './CardPokemon';

const Pokemon = (props) => {

  const [pokemons, setPokemons] = useState([])
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  useEffect(() => {
    
    pokemonlist()
    
}, []);



const pokemonlist =async()=>{
  
  const requestOptions = {
    method: 'GET',
  };
const data = await fetch(apiURL+"/pokemon/get", requestOptions);
console.log("data",data);
const dataJson = await data.json();
console.log("dataJson",dataJson);
const action = {type:'SET_POKEMON', value: dataJson.results}
props.dispatch(action)
setPokemons(dataJson.results)

console.log("pokemons",dataJson.results);

}
const filteredData = pokemons.filter((el) => {
  //if no input the return the original
  if (inputText === '') {
      return el;
  }
  //return the item which contains the user input
  else {
      return el.name.toLowerCase().includes(inputText)
  }
})
  
  return (
  <div className='card-global'>

<br/><br/>
<div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search a pokemon"/></div>
  <br/><br/> 
  <CContainer>
  <div className="card-group">
  {filteredData.map((item) => (
               <CardPokemon 
                
               title={item.name.length < 10 ? item.name : item.name.split('',9)}  
               url={item.name}/>
            ))}
   
  </div>  
  </CContainer>
  
</div>
)}

const mapStateToProps = (state) => ({
  auth: state.auth
})


const mapDispatchToProps = (dispatch) => {
return {
dispatch: (action) => {
dispatch(action);
},
}};

export default connect (mapStateToProps, mapDispatchToProps)  (Pokemon); 