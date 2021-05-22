import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import {
	BrowserRouter as Router,
	Route,
} from "react-router-dom"
import { Tasks } from "./Components/Pages/Tasks/Tasks"
import { Archive } from "./Components/Pages/Archive"
import { Clients } from "./Components/Pages/Clients"
import { KnowledgeBase } from "./Components/Pages/KnowledgeBase"
import { Staff } from "./Components/Pages/Staff"
import { Settings } from "./Components/Pages/Settings"
import { Main } from "./Components/Pages/Main";
import { StateContext } from "./Context/StateContext";

const App: React.FC = () => {


	return (
		<StateContext>
			<Router>
				<Header/>
				<div className="content">
					<Route exact path="/" component={ Main }/>
					<Route path="/tasks" component={ Tasks }/>
					<Route path="/archive" component={ Archive }/>
					<Route path="/clients" component={ Clients }/>
					<Route path="/base" component={ KnowledgeBase }/>
					<Route path="/settings" component={ Settings }/>
					<Route path="/staff" component={ Staff }/>
				</div>
			</Router>
		</StateContext>
	)
}

export default App
