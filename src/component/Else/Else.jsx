import React from "react";
import { NavLink } from "react-router-dom";
import './Else.css';
import PropTypes from 'prop-types';


function Food({name, picture, rating}) {
  return (
  <div className=''>
    <h3>Продолжаем урок {name}</h3>
    <h4>{rating} / 5.0</h4>
    <img src={picture} alt='' className='message' />
  </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired
}

const foodILike = [
  {
    'id': 1,
    'name': 'картинка 1',
    'image': 'http://kerrigan.su/work-temp/email-privat-message.png',
    'rating': 4.8
  },
  {
    'id': 2,
    'name': 'картинка 2',
    'image': 'http://kerrigan.su/work-temp/email-privat-message.png',
    'rating': 4.7
  },
  {
    'id': 3,
    'name': 'картинка 3',
    'image': 'http://kerrigan.su/work-temp/email-privat-message.png',
    'rating': 4.2
  },
  {
    'id': 4,
    'name': 'картинка 4',
    'image': 'http://kerrigan.su/work-temp/email-privat-message.png',
    'rating': 5.8
  }
]

function renderFood(elem) {
  return <Food key={elem.id} name={elem.name} picture={elem.image} rating={elem.rating} />
}

export const Else = () => {
  return (
    <div>
      {console.log(foodILike.map(renderFood))}
      {foodILike.map(renderFood)}
    </div>

  );
}