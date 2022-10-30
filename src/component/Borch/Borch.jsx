import React from "react";
import { NavLink } from "react-router-dom";
import './Borch.css'
import johnsonImg from "../../image/110.gif"


function Food({name, picture}) {
  return (
  <div className='wrapper-3'>
    <h3>Я люблю {name}</h3>
    <img src={picture} alt='' style={{
      width:'50px',
      height:'50px',
      'margin': '0 auto',
      border:'1px solid yellow'}} />
    <div style={{
      width:'50px',
      height:'50px',
      'margin': '0 auto',
      border:'1px solid red',
      backgroundImage:'url(../image/21.gif)'
      }}
      ></div>
  </div>
  )
}

const foodILike = [
  {
    'name': 'упячка1',
    'image': '../../image/21.gif'
  },
  {
    'name': 'упячка2',
    'image': '/images/41.gif'
  },
  {
    'name': 'упячка3',
    'image': '../../image/41.gif'
  },
  {
    'name': 'упячка4',
    'image': 'borch/image/110.gif'
  }
]

export const Borch = () => {
  return (
    <div>

      <h2 className='test2'>Тест отображения картинок из файла HTML стилями бэкграундом <br/>
      div style=backgroundImage</h2>
        {foodILike.map(elem => <Food name={elem.name} picture={elem.image} />)}

      <h2 className='test2'>Еще какой то тест</h2>
        {foodILike.map(elem => <Food name={elem.name} picture={`src={require(elem.image)}`} />)}

      <h2 className='test2'>Тест отображения картинок из файла HTML картинкой <br/>
      img src=url(../../image/21.gif)</h2>
        <img src='url(/images/21.gif)' alt='' style={{
        width:'50px',
        height:'50px',
        'margin': '0 auto',
        border:'1px solid blue'
        }}/>

      <h2 className='test2'>Отображение картинки с помощью require</h2>
        <img src={require("../../image/41.gif")}></img>

      <h2 className='test2'>И еще тест картинки из файла стилей CSS</h2>
        <div className='test'></div>

      <h2 className='test2'>Тест картинки если ее импортировать</h2>
        <img src={johnsonImg} />

    </div>

  );
}