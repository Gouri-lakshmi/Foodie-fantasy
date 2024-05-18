import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="navbar bg-body-tertiary">
                <div class="container-fluid">
                    <div>
                        <img src='./logo-removebg-preview.png' alt='logo' style={{ width: "50px", height: "50px" }} />
                        <a class="navbar-brand" style={{ color: "green", fontFamily: "cursive", fontWeight: "600", marginLeft: "10px", marginTop: "25px" }}>FOODIE FANTASY</a>
                    </div>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default NavBar;