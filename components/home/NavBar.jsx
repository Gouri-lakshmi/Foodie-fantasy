import axios from 'axios';
import React, { useEffect, useState } from 'react'

const NavBar = () => {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [searched, setSearched] = useState(false);



  useEffect(() => {
    const fetchData = async () => {
      if (search.trim() === '') {
        setData([]);
        setSearched(false);
        return;
      }
      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        setData(response.data.meals || [])
        setSearched(true)
        console.log("meal", response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [search]);

  const handleClick = () => {
    setShow(true)
  }
  const handleshowless = () => {
    setShow(false)
  }
  const mealsToShow = show ? data : data.slice(0, 9);

  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <div style={{ display: "flex" }}>
            <img src='./logo-removebg-preview.png' alt='logo' style={{ width: "50px", height: "50px" }} />
            <a class="navbar-brand" style={{ color: "green", fontFamily: "cursive", fontWeight: "600", marginLeft: "10px", marginTop: "6px" }}>FOODIE FANTASY</a>
          </div>
          <form class="d-flex" role="search" onSubmit={(e) => e.preventDefault()} style={{ width: "100%", maxWidth: "500px" }}>
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
          </form>
        </div>
      </nav>
      {searched && (
        <div className="container position-relative ">
          <div className="position-absolute w-100" style={{ top: 0, zIndex: 1, backgroundColor: 'white' }}>
            <div className="row">
              {mealsToShow.length > 0 ? (
                <>
                  {mealsToShow.map((meal) => (
                    <div key={meal.idMeal} className="col-md-4 mb-4">
                      <div style={{ padding: "12px" }}>

                        <div className="card-body">
                          <h5 className="card-title">{meal.strMeal}</h5>
                          <p className="card-text">{meal.strInstructions.slice(0, 100)}...</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="col-12 mb-4">

                  <div className=" text-center" style={{ padding: "15px" }}>
                    <h5 className="card-title" >No meals found</h5>

                  </div>
                </div>
              )}
            </div>
            <div className="text-center">
              {show ? (
                <button className="btn" style={{ color: "blue" }} onClick={handleshowless}>Show Less</button>
              ) : (
                data.length > 9 && <button className="btn" style={{ color: "blue" }} onClick={handleClick}>Show More</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
export default NavBar;