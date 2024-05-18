"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ProductCardBlock2 = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
          setFoods(response.data.meals.slice(0, 8) || []);    
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
   
      fetchData();
    }, []);

    console.log("foods",foods)

  return (
    <div className='row' style={{marginTop : "55px" ,padding : "1rem"}}>               
     {foods.map((food) => (   
        <div className="col-md-3 mb-3" key={food.idMeal}>
          <div className="card">
            <img src={food.strMealThumb} className="card-img-top" alt={food.strMeal} />
            <div className="card-body">
              <h5 className="card-title">{food.strMeal}</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget fermentum lorem.</p>
              <a href="#" className="btn btn-primary">Details</a>
            </div>
          </div>
        </div>
      ))}        
  </div>
  )
}

export default ProductCardBlock2