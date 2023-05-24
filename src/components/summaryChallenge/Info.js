import CategoryInfo from './CategoryInfo';
import data from '../../data.json';
import style from './info.module.css'


const Info = () => {
   
  return (
    <div className={style.container}>
      <h2>Summary</h2>
      {data.length > 0 ? data.map (el => (
          <CategoryInfo 
              key={el.category} 
              data={el} />
      )
       ) : <p>No hay datos</p>
      }

    <button>Continue</button>
    </div>
  )
}

export default Info
