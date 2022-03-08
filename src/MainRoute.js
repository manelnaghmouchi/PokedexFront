import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";



import { connect } from "react-redux";
import ViewPokemon from "./Pokemon/View";
import pokemon from "./Pokemon/pokemon";




const MainRoute = (props) => {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={pokemon} />
      <Route exact path="/show/:id" component={ViewPokemon} />
       
      </Switch>
    </Router>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (MainRoute);