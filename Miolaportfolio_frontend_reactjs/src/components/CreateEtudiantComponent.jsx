import React, { Component } from 'react';
import EtudiantService from '../services/EtudiantService';

class CreateEtudiantComponent extends Component {

    constructor(props){
        super(props);
        
        this.state={
            id: this.props.match.params.id,
            prenom:'',
            nom:'',
            email:'',
            adresse:'',
            telephone:'',
            daten:''
    
        }

        this.changePrenomHandler=this.changePrenomHandler.bind(this);
        this.changeNomHandler=this.changeNomHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.changeAdresseHandler=this.changeAdresseHandler.bind(this);
        this.changeTelephoneHandler=this.changeTelephoneHandler.bind(this);
        this.changeDatenHandler=this.changeDatenHandler.bind(this);
        this.saveEtudiant=this.saveEtudiant.bind(this);

    }
    saveEtudiant= (e) =>{
        e.preventDefault();
        let  etudiant={prenom: this.state.prenom, nom: this.state.nom, email: this.state.email, stage:this.state.stage,adresse:this.state.adresse,telephone:this.state.telephone,daten:this.state.daten};
        //console.log('etudiant => ' +JSON.stringify(etudiant));
        EtudiantService.createEtudiant(etudiant).then(res =>{
                this.props.history.push('/etudiants');
        });
    }
    changePrenomHandler= (event) =>{
        this.setState({prenom: event.target.value});

    }
    changeNomHandler= (event) =>{
        this.setState({nom: event.target.value});

    }
    changeEmailHandler= (event) =>{
        this.setState({email: event.target.value});

    }
    changeStageHandler= (event) =>{
        this.setState({stage: event.target.value});

    }
    changeAdresseHandler= (event) =>{
        this.setState({adresse: event.target.value});

    }
    changeTelephoneHandler= (event) =>{
        this.setState({telephone: event.target.value});

    }
    changeDatenHandler= (event) =>{
        this.setState({daten: event.target.value});

    }
   
    cancel(){
        this.props.history.push('/etudiants')
    }
    render() {
        return (
            <div>
                <br/><br/><br/>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h1 className="text-center">Ajouter un etudiant</h1>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Prenom: </label>
                                            <input placeholder="Prenom" name="prenom" className="form-control" 
                                                value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Nom: </label>
                                            <input placeholder="Nom" name="nom" className="form-control" 
                                                value={this.state.nom} onChange={this.changeNomHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email:</label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Adresse:</label>
                                            <input placeholder="Adresse" name="adresse" className="form-control" 
                                                value={this.state.adresse} onChange={this.changeAdresseHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Telephone:</label>
                                            <input placeholder="Telephone" name="telephone" className="form-control" 
                                                value={this.state.telephone} onChange={this.changeTelephoneHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Date de naissance:</label>
                                            <input placeholder="jj/mm/yyyy" name="daten" className="form-control" 
                                                value={this.state.daten} onChange={this.changeDatenHandler}/>
                                        </div>
                                       
                                        <br/>
                                        <button  className="btn btn-outline-success" onClick={this.saveEtudiant}>Enregistrer</button> 
                                        <button type="button" className="btn btn-outline-danger" onClick={this.cancel.bind(this)}  style={{marginLeft: "10px"}}>Annuler</button>            

                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default CreateEtudiantComponent;