import {Component} from 'react';

class Greeting extends Component{
 render(){
   const{name, greet}=this.props;
  //  const{greet}=this.props;

   return <h2>{greet}, {name}!</h2>
 } 
}

export default Greeting;