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
    <div style={{
      backgroundImage: `url("https://image.freepik.com/free-vector/bakery-seamless-pattern-with-cartoon-bread_53562-7503.jpg")`
    }}>
      <div className="container" >
        <nav class="navbar" style={{ background: "#BE987A" }} >
          <div class="container-fluid" style={{ fontSize: 50, color: "#FFFFFF" }}>
            <a class="navbar-brand">
              <img src="https://img.icons8.com/cotton/2x/cake.png" alt="" width="50" height="50" />
      BEKERY
    </a>
          </div>
        </nav>
        <div align="center">
          <h1 align="center" style={{ fontSize: 60, color: "#492D17", borderRadius: "", border: "2px solid #E1A473", padding: "20px", width: "200px", height: "", backgroundColor: "#E1A473" }}>MENU</h1></div>
        <div align="center">
          {data.map((item) => {
            return <div className="card" style={{}}>
              <div class="card" style={{ width: "18rem;" }}>
                <img src={item.picture_url} class="card-img-top" alt="..." style={{ width: 200, height: 200 }} />
                <div class="card-body">
                  <p class="card-text" style={{ fontSize: 20, borderRadius: "", border: "2px solid #E1A473", padding: "20px", width: "200px", height: "", backgroundColor: "#E1A473" }}>{item.menu_name}</p>
                  <p class="card-text" style={{ fontSize: 20 }}>price: {item.price} Baht</p>
                </div>
                <br></br>
              </div>
              {/* // <div class="card" style={{ backgroundColor: "#DCB99D", width: 300, paddingTop: "10px" }}>
            //   <img src={item.picture_url} class="card-img-top" alt="..." style={{ width: "18rem" }} />
            //   <div class="card-body">
            //     <h5 class="card-title" style={{ fontFamily: "cursive", color: "#ffffff", fontSize: 20 }}>{item.menu_name}</h5>
            //     <h5 class="card-title" style={{ fontFamily: "cursive", color: "#ffffff", fontSize: 20 }}>price: {item.price} Baht</h5>


            //   </div>
            //   <br></br> */}

            </div>

          })}
        </div>
      </div>
    </div>
  );
}
export default App;