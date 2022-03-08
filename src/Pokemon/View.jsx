import React from 'react';
import { connect } from 'react-redux';

import 'react-circular-progressbar/dist/styles.css';

import { apiURL } from '../Config/Config.';

import {Button,Card,CardBody,CardFooter,CardTitle,Form,Input,Row,Col,InputGroup} from "reactstrap";

class ViewPokemon extends React.Component {
  constructor(props) {

      super(props);
      this.state = {
          
          View:[]
        
      };
   
};
  
  componentDidMount(){
    this.getPokemonByName(this.props.match.params.id);

  }
  getPokemonByName =async(id)=>{
  
    const requestOptions = {
      method: 'GET',
    };
  const data = await fetch(apiURL+"/pokemon/gett/"+id, requestOptions);
  console.log("data",data);
  const dataJson = await data.json();
  this.setState({View: dataJson})
  console.log("View",dataJson);
  }


  render() { const {View} = this.state;
return (
        
 <div >
 <br/> 
 <center>
 <Card  className='card-add' >
 
 <CardTitle tag="h2" className='title-style'>{View.name}</CardTitle>
   <CardBody>
   <Row gutter={16}>
      <Col span={8}  >
      <CardTitle tag="h5" className='text-style'>Descriptions :</CardTitle>
      <CardBody className='text-style'>
      {View.descriptions && View.descriptions.map((view)=>(  
        
        <div>
     <div className='description-style'><span className="tyle-text">Decription: </span><span>{view.description}</span></div>
     
      <span className="tyle-text">Language:</span>
      <br/>
      
      <span className='space-style'>name:</span><span>{view.language.name}</span>
      <br/>
      
      <span className='space-style'>url:</span><span><a href={view.language.url} target="_blank">{view.language.url}</a></span>
        
      <br/><br/>
        </div>
   


     ) )}
        </CardBody>
      </Col>
      <Col span={8} >
      <CardTitle tag="h5" className='text-style'>Names :</CardTitle>
      <CardBody className='text-style'>
      {View.names && View.names.map((view)=>(  
        
        <div>
      <span className="tyle-text">Language:</span>
      <br/>
      <span className='space-style'>name:</span><span>{view.language.name}</span>
      <br/>
      <span className='space-style'>url:</span><span><a href={view.language.url} target="_blank">{view.language.url}</a></span>
      <br/><br/>
      </div>
     


     ) )}
        </CardBody>
      </Col>
     
    </Row>
<br/>
    <Row gutter={16}>
     
      <Col span={8} >
      <CardTitle tag="h5" className='text-style'>Version_groups :</CardTitle>
      <CardBody className='text-style'>
      {View.version_groups && View.version_groups.map((view)=>(  
        
        <div>
      
      <span className='space-style'>name:</span><span>{view.name}</span>
      <br/>
      <span className='space-style'>url:</span><span> <a href={view.url} target="_blank">{view.url}</a>

</span>
      <br/><br/>
      </div>
     


     ) )}
        </CardBody>
      </Col>
      <Col span={8} >
      <CardTitle tag="h5"></CardTitle>
      <CardBody>
     
        </CardBody>
      </Col>
    </Row>

   </CardBody>
 
</Card>
</center>
</div>
    );
}}

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})


const mapDispatchToProps = (dispatch) => {
return {
dispatch: (action) => {
dispatch(action);
},
};
};
export default connect (mapStateToProps, mapDispatchToProps)(ViewPokemon)
