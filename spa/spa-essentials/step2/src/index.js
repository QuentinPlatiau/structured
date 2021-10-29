import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/style.css";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import {Router} from "./Components/Router/Router";

// Improve the header with dynamic HTML generation
Header();

/// Render the Navbar
Navbar();

// Render the HomePage
// HomePage(); // this is now the Router's role to load the HomePage when the frontend is loaded

// Improve the header with dynamic HTML generation
Footer();

// Call the router
Router();