import React from "react";
import NavBar from './NavBar';
import Search from './Search';
import Rentals from './Rentals';

function App () {
let welcomeDiv = {
  backgroundImage: "url('http://www.livingcharm.com/wp-content/uploads/2017/01/cinque-stunning-italy-1600x1059.jpg')",
  minHeight: "1200px",
  backgroundAttachment: "fixed",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover"

}
  return (
    <div>
      <div style={welcomeDiv}>
        <NavBar/>
        <Search/>
      </div>
      <div>
        <Rentals/>
      </div>
    </div>
  );
}

export default App;