import React from 'react'
import { connect } from 'react-redux';
import Image from '../assets/img/map.png';
import { Card, Col, Row} from 'antd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link } from "react-router-dom";
class CardPokemon extends React.Component{
    constructor(props){  
      super(props);  
    
      this.state = { 

       }
  } 

  render(){
    const { Meta } = Card;
      return(
        <Col span={8}  style={{paddingBottom:'20px'}} >
        <Card
          hoverable
          style={{ width: 170 }}
          cover={<img alt="example" src={Image} height={'170px'} />}>
        <Row>
        <Col span={20}><Meta title={this.props.title} /></Col> 
        <Col span={2}><Link to={`/show/${this.props.url}`}><VisibilityIcon sx={{ fontSize: 30 }} color="success" /></Link></Col>
        </Row>
            
        </Card>
        </Col>
      )}}

  const mapStateToProps = (state) => ({
    auth: state.auth
  })
  
  
  const mapDispatchToProps = (dispatch) => {
  return {
  dispatch: (action) => {
  dispatch(action);
  },
  }};
  
  export default connect (mapStateToProps, mapDispatchToProps)  (CardPokemon); 