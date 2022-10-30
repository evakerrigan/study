import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Borch.module.css'

function Food({name, picture}) {
  return (
  <div>
    <h3>Я люблю {name}</h3>
    <img src={picture} alt='' />
    <div style={{
      width:'50px',
      height:'50px',
      'margin': '0 auto',
      border:'1px solid #900',
      backgroundImage:'url(../../image/21.gif)'
      }}
      ></div>
  </div>
  )
}

const foodILike = [
  {
    'name': 'упячка1',
    'image': './image/21.gif'
  },
  {
    'name': 'упячка2',
    'image': '../../image/41.gif'
  },
  {
    'name': 'упячка3',
    'image': '../../image/1.jpg'
  },
  {
    'name': 'упячка4',
    'image': '/image/110.gif'
  }
]

export const Borch = () => {
  return (
    <div>
      <Food name='бОРЩ' />
      {foodILike.map(elem => <Food name={elem.name} picture={elem.image} />)}
      <img src='./image/21.gif' alt='' style={{
      width:'50px',
      height:'50px',
      'margin': '0 auto',
      border:'1px solid #900',
      backgroundImage:'url(image/21.gif)'
      }}/>

    </div>

  );
}