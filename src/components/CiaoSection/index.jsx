import {Component} from 'react';
import Ciao from '../Ciao';
import CiaoList from '../CiaoList';
class CiaoSection extends Component{

constructor (props){
  super(props);
  this.state = {
    isDirection:true,
    isAlphabet:true,
    users:[
      {
        id:1,
        fname:'Elon'
      },
      {
        id:2,
        fname:'Elen'
      },
      {
        id:3,
        fname:'Tim'
      },
      {
        id:4,
        fname:'Bob'
      },
      {
        id:5,
        fname:'Sasha'
      },
      {
        id:6,
        fname:'Rob'
      },
    ]
  }
}
sortUsersAlphabet = () =>{
  const {users, isAlphabet}=this.state;
  const sortUsersAlphabet = JSON.parse(JSON.stringify(users));
  //const sortUsers = [...users];
  sortUsersAlphabet.sort((prev, next)=>isAlphabet ? prev.id-next.id : next.id-prev.id);
  this.setState({
    isAlphabet:!isAlphabet,
    users: sortUsersAlphabet,

  })
}

sortUsersNumber = () =>{
  const {users, isDirection}=this.state;
  const sortUsersNumber = JSON.parse(JSON.stringify(users));
  //const sortUsers = [...users];
  sortUsersNumber.sort((prev, next)=>isDirection ? prev.id-next.id : next.id-prev.id);
  this.setState({
    isDirection:!isDirection,
    users: sortUsersNumber

  })
}
mapUsersCiao = ({fname,id})=><Ciao key={id} id={id} name={fname} />
render(){
const {users, isDirection}=this.state;
return <>
<p>
<button onClick={this.sortUsersNumber}> SORT BY NUMBER {isDirection?'straight':'reverse'}</button>
<button onClick={this.sortUsersAlphabet}> SORT BY NAME{isDirection?'straight':'reverse'}</button>
</p>
<CiaoList users={users}/>
</>;
}
}
export default CiaoSection;
