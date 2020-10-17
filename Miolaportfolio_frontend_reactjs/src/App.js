import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ListeEtudiantComponent from './components/ListeEtudiantComponent';
import HeaderComponent from './components/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import CreateEtudiantComponent from './components/CreateEtudiantComponent';
import UpdateEtudiantComponent from './components/UpdateEtudiantComponent';
import PortfolioComponent from './components/PortfolioComponent';
import AdminConnectionComponent from './components/AdminConnectionComponent';
function App() {
  return (
    <div>
      <Router> 
       
         <HeaderComponent />
    
         <div className="container">
                <Switch> 
                   <Route path="/" exact component={ListeEtudiantComponent}></Route>
                   <Route path="/etudiants"  component={ListeEtudiantComponent}></Route>
                   <Route path="/ajouter-etudiant"  component={CreateEtudiantComponent}></Route>
                   <Route path="/modifier-etudiant/:id"  component={UpdateEtudiantComponent}></Route>
                   <Route path="/porfolio/:id"  component={PortfolioComponent}></Route>
                   <Route path="/adminConnection" component={AdminConnectionComponent}></Route>


                </Switch>
          </div>
        
      </Router>
   </div>
  );
}

export default App;
