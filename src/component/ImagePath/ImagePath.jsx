import React from "react";
import { NavLink } from "react-router-dom";
import './ImagePath.css'
import johnsonImg from "../../image/110.gif"


function Food({name, picture}) {
  return (
  <div className='wrapper-3'>
    <h3>{name}</h3>
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
      backgroundImage:`url(/images/21.gif)`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
      }}
      ></div>
  </div>
  )
}

const foodILike = [
  {
    'name': '1 --- /image/...gif',
    'image': '/image/21.gif'
  },
  {
    'name': '2 --- /imageS/...gif',
    'image': '/images/41.gif'
  },
  {
    'name': '3 --- PUBLIC_URL + /imageS/...gif',
    'image': process.env.PUBLIC_URL + '/images/140.gif'
  },
  {
    'name': '4 --- PUBLIC_URL + /image/...gif',
    'image': process.env.PUBLIC_URL + '/image/140.gif'
  },
  {
    'name': '5 --- ../../image/...gif',
    'image': '../../image/110.gif'
  }
]

export const ImagePath = () => {
  return (
    <div>

      <h2 className='test2'>Тест отображения картинок из файла HTML <br/>просто относительными путями из бд</h2>
        {foodILike.map(elem => <Food key={elem.image} name={elem.name} picture={elem.image} />)}

      <h2 className='test2'>Тест с process.env.PUBLIC_URL</h2>
        {foodILike.map(elem => <Food key={elem.image} name={elem.name} picture={`{${process.env.PUBLIC_URL}${elem.image}`} />)}

      <h2 className='test2'>Тест с require</h2>
        {foodILike.map(elem => <Food key={elem.image} name={elem.name} picture={`{require(${elem.image})}`} />)}









      <h2 className='test2'>Тест отображения картинок из файла HTML картинкой <br/>
      img src=url(../../image/21.gif)</h2>
        <img src='url(/images/21.gif)' alt='' style={{
        width:'100px',
        height:'100px',
        'margin': '0 auto',
        border:'1px solid blue'
        }}/>

      <h2 className='test2'>И еще тест картинки из файла HTML встроенными стилями style=</h2>
        <div className='test-html' style={{backgroundImage:'url(/image/119.gif)', border:'1px solid blue'}} ></div>

      <h2 className='test2'>Отображение картинки с помощью process.env.PUBLIC_URL из public</h2>
        <img src={process.env.PUBLIC_URL + '/images/140.gif'}></img>

      <h2 className='test2'>Отображение картинки с помощью require из src</h2>
        <img src={require("../../image/41.gif")}></img>

      <h2 className='test2'>И еще тест картинки из файла стилей CSS из src</h2>
        <div className='test'></div>

      <h2 className='test2'>Тест картинки если ее импортировать из src</h2>
        <img src={johnsonImg} />

    </div>

  );
}