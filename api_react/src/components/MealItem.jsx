import {memo} from 'react'

function MealItem(meal) {
  return (
    <div key={index} style={{ width: 280, height: 280, margin: 8 }}>
            <img src={meal.strMealThumb} style={{ width: "100" }} />
            <h3>{meal.strMealThumb}</h3>
            <a href={meal.strYoutube} target="_blank">
              link youtube
            </a>
          </div>
  )
}
export default memo (MealItem)
//nota: memo = se utiliza por si las prop cambia

