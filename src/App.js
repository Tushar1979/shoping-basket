import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
// import {Route} from route;
import Home from "./components/home";
import Allproducts from "./components/product";

import './App.css';
import { Aboutpage } from "./components/about";
import Header from "./components/navbar";
import Address from "./components/footer";
import { Brandpage, Productpage } from "./components/brand";
import { Contactuspage } from "./components/contact";
import Phonedetails from "./components/product";
import Signup  from "./components/loginsignup";
import { Login } from "./components/loginsignup";


function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Aboutpage />} />
                    <Route path="/products" element={<Productpage />} />
                    <Route path="/contactus" element={<Contactuspage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />              
                    <Route path="/productDetails/:productid" element={<Phonedetails />} />

                </Routes>
                <Address />
            </Router>
        </div>

    );
}

export default App;

