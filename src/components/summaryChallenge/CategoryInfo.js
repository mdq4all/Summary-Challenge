import React from 'react'
import style from './categoryInfo.module.css'

const colors = {
    Reaction: "reaction",
    Memory: "memory",
    Verbal: "verbal",
    Visual: "visual"
}

const CategoryInfo = ({data}) => {

    const {category, score, icon} = data;
    
  return (
    <div className={`${style.container} ${style[colors[category]]} `}>
      <div className={style.img_container}>
        <img src={icon} alt={`Icono de ${category}`} className={style[colors[category]]} />
        <h3>{category}</h3>
      </div>
      <h4 className={style.score_container}>
        {score}<span>/100</span>
      </h4>
    </div>
  )
}

export default CategoryInfo
