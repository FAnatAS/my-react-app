import React from 'react';
import Ciao from './Ciao';

const CiaoList = (props)=>{
  const {users}=props;
  const mapUsersCiao = ({fname,id})=><Ciao key={id} id={id} name={fname} />

  return <div>
{users.map(mapUsersCiao)}
</div>;
}

export default CiaoList;