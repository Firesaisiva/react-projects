import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react"

const Meals = () => {
  const [items,setItemss] = useState([])

  useEffect(()=>{
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then((res)=>{
      setItemss(res.data.meals);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);
  const itemsList = items.map(({strMeal,strMealThumb,idMeal})=>{
  return(
    <section className ="card">
      <img src={strMealThumb} alt ={strMeal}/>
      <section className='content'>
        <p>{strMeal}</p>
        <p>#{idMeal}</p>
      </section>
    </section>

  )
})
  
return(
  <div className='container'>{itemsList}</div>
)
};


export default Meals

