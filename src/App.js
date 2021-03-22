import React, { useEffect, useState } from 'react';


const App = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/bakerys')
      .then((response) => response.json())
      // .then((data) => console.log(data.data));
      .then((data) => setData(data.data));
  }, []);
  return (
    <div>
      <div className="container" style={{ backgroundImage: "https://image.freepik.com/free-vector/bakery-seamless-pattern-with-cartoon-bread_53562-7503.jpg" }}>
        <nav class="navbar" style={{ background: "#BE987A" }} >
          <div class="container-fluid" style={{ fontSize: 50, color: "#FFFFFF" }}>
            <a class="navbar-brand">
              <img src="https://img.icons8.com/cotton/2x/cake.png" alt="" width="50" height="50" />
      BEKERY
    </a>
          </div>
        </nav>
        <h1 align="center" style={{ fontSize: 60 }}>MENU</h1>
        <div align="center">
          {data.map((item) => {
            return <div class="card">
              <img src={item.picture_url} class="card-img-top" alt="..." style={{ width: 300, height: 300 }} />
              <div class="card-body">
                <h5 class="card-title">{item.menu_name}</h5>
                <p class="card-text">price: {item.price}</p>

              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
export default App;