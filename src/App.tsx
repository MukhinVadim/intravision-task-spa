import React from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import { TasksPage } from "./Pages/TasksPage"
import { ArchivePage } from "./Pages/ArchivePage"
import { ClientsPage } from "./Pages/ClientsPage"
import { KnowledgeBasePage } from "./Pages/KnowledgeBasePage"
import { StaffPage } from "./Pages/StaffPage"
import { SettingsPage } from "./Pages/SettingsPage"
import { MainPage } from "./Pages/MainPage";


const App: React.FC = () => {

  return (
    <Router>
      <Header/>
      <div className="content">
        <Route exact path="/" component={ MainPage }/>
        <Route path="/tasks" component={ TasksPage }/>
        <Route path="/archive" component={ ArchivePage }/>
        <Route path="/clients" component={ ClientsPage }/>
        <Route path="/base" component={ KnowledgeBasePage }/>
        <Route path="/settings" component={ SettingsPage }/>
        <Route path="/staff" component={ StaffPage }/>
      </div>
    </Router>
  )
}

export default App
