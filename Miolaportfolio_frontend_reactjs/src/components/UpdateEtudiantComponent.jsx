import React, { Component } from 'react';
import EtudiantService from '../services/EtudiantService';

class UpdateEtudiantComponent extends Component {
      
  
   
    constructor(props){
        super(props);
        
        this.state={
            id: this.props.match.params.id, //recupere l'id depuis la route
            prenom:'',
            nom:'',
            email:''
          
        }
        this.changePrenomHandler=this.changePrenomHandler.bind(this);
        this.changeNomHandler=this.changeNomHandler.bind(this);
        this.updateEtudiant=this.updateEtudiant.bind(this);

    }

    componentDidMount(){
       EtudiantService.getEtudiantById(this.state.id).then((res) =>{
        let etudiant=res.data;
        this.setState({prenom: etudiant.prenom,
            nom: etudiant.nom,
            email: etudiant.email
            
             
            
        });

       });


    }
    updateEtudiant= (event) =>{
        event.preventDefault();
        let  etudiant={prenom: this.state.prenom,nom: this.state.nom,email: this.state.email};
        console.log('etudiant => ' +JSON.stringify(etudiant));
        EtudiantService.updateEtudiant(etudiant,this.state.id).then(res =>{
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
    cancel(){
        this.props.history.push('/etudiants')
    }
    render() {
        return (
            <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Modifier etudiant</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> Prenom : </label>
                                        <input placeholder="Prenom" name="prenom" className="form-control" 
                                            value={this.state.prenom} onChange={this.changePrenomHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> Nom : </label>
                                        <input placeholder="Nom" name="nom" className="form-control" 
                                            value={this.state.nom} onChange={this.changeNomHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label>Email :</label>
                                        <input placeholder="Email" name="email" className="form-control" 
                                            value={this.state.email} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-outline-success" onClick={this.updateEtudiant}>Enregistrer</button>
                                    <button className="btn btn-outline-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Annuler</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>


           











        );
    }
}

export default UpdateEtudiantComponent;