import React, { Component } from 'react';
class HeaderComponent extends Component {
    constructor(props){
        super(props);
        this.state={
         
          
        }
    }
    render() {
        return (
            <div>
               <header>
                   <nav className="navbar fixed-top navbar-expand-sm bg-dark navbar-dark">
                    <div><a href="/" className="navbar-brand " style={{color: '#0e918c'}}>Miola Portfolio</a></div>
                    <div><a href="/" style={{marginRight: "30px", marginLeft: "30px" ,color: '#ffffff'}}>Introduction</a></div>
                    <div><a href="/#list" style={{marginRight: "30px", marginLeft: "30px",color: '#ffffff' }}>Liste des étudiants</a></div>
                    <div><a href="/#projets" style={{marginRight: "30px", marginLeft: "30px" ,color: '#ffffff'}}>Projets</a></div>
                    <div><a href="/#competences" style={{marginRight: "30px", marginLeft: "30px",color: '#ffffff' }} >Formation</a></div>
                    <div><a href="/#offres" style={{marginRight: "30px", marginLeft: "30px",color: '#ffffff' }} >Offres</a></div>
                    <div><a href="/adminConnection" style={{marginRight: "30px", marginLeft: "30px" ,color: '#ffffff'}} >Espace admin</a></div>
                   </nav>
                </header> 
            </div>
        );
    }
}

export default HeaderComponent;