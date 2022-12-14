import "./App.css";
import Nav from "./components/nav/Nav";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from "./pages/home";
import Categorie from "./components/nav/Categorie";

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/headphones" element={<Categorie />}></Route>
				<Route path="/"></Route>
			</Routes>
		</>
	);
}

export default App;
