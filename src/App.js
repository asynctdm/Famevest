import './App.css'
import React from 'react';

import Navbar from './components/Navbar'
import { Routes, Route} from "react-router-dom";

const Home = () => {
	return (
		<>
		<Navbar />
		<h1>Home</h1>
		</>
	)
}

const Docs = () => {
	return (
		<>
		<Navbar />
		<h1>Docs</h1>
		</>
	)
}

const Features = () => {
	return (
		<>
		<Navbar />
		<h1>Features</h1>
		</>
	)
}

const Trends = () => {
	return (
		<>
		<Navbar />
		<h1>Trends</h1>
		</>
	)
}


function App() {
  return (
    <Routes>
		<Route exact path="/" element ={<Home />} />
		<Route exact path="/docs" element ={<Docs />} />
		<Route exact path="/features" element ={<Features />} />
		<Route exact path="/trends" element ={<Trends />} />
	</Routes>
  )
}

export default App