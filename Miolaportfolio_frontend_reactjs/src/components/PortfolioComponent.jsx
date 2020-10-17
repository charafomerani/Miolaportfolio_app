import React, { Component } from 'react';
import EtudiantService from '../services/EtudiantService';
import TextField from '@material-ui/core/TextField';
import EmailIcon from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import CakeIcon from '@material-ui/icons/Cake';
class PortfolioComponent extends Component {

    constructor(props){
        super(props);
        
        this.state={
            id: this.props.match.params.id, //recupere l'id depuis la route
            prenom:'',
            nom:'',
            email:'',
            adresse:'',
            telephone:'',
            stage:'',
            daten:''
          
        }
        this.changePrenomHandler=this.changePrenomHandler.bind(this);
        this.changeNomHandler=this.changeNomHandler.bind(this);
        this.changeEmailHandler=this.changeNomHandler.bind(this);
        this.changeAdresseHandler=this.changeAdresseHandler.bind(this);
        this.changeDatenHandler=this.changeDatenHandler.bind(this);

    }

    componentDidMount(){
        EtudiantService.getEtudiantById(this.state.id).then((res) =>{
         let etudiant=res.data;
         this.setState({prenom: etudiant.prenom,
             nom: etudiant.nom,
             email: etudiant.email,
             telephone: etudiant.telephone,
             adresse:etudiant.adresse,
             daten:etudiant.daten
             
              
             
         });
 
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
    changeTelephoneHandler= (event) =>{
        this.setState({email: event.target.value});

    }
    changeTelephoneHandler= (event) =>{
        this.setState({email: event.target.value});

    }
    changeAdresseHandler= (event) =>{
        this.setState({adresse: event.target.value});

    }
    changeDatenHandler= (event) =>{
        this.setState({daten: event.target.value});

    }
    render() {
        return (
           
            <div>
            <br></br>  
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            
                            <h3 className="text-center" style={{ color: '#3F51B5' }}>Portfolio</h3>
                            <div className = "card-body">
                                <form>
                                <div className = "row">
                                    <div className = "form-group col"> 
                                    <TextField
                                       id="standard-read-only-input"
                                       onChange={this.changePrenomHandler}
                                       value={this.state.prenom} 
                                       label="Prenom"
                                         InputProps={{
                                     readOnly: true,
                                     startAdornment: (
                                        <InputAdornment position="start">
                                        <EmojiPeopleIcon color="primary" />
                                        </InputAdornment>
                                      ),
                                      }}
                                    />
                                    
                                    </div>
                                    <div className = "form-group col">
                                    
                                        <TextField
                                       id="standard-read-only-input"
                                       onChange={this.changeNomHandler}
                                       value={this.state.nom} 
                                       label="Nom"
                                         InputProps={{
                                     readOnly: true,
                                     startAdornment: (
                                        <InputAdornment position="start">
                                        <PersonIcon color="primary" />
                                        </InputAdornment>
                                      ),
                                      }}
                                       />
                                    
                                    </div>
                                    

                                  </div>
                                  <div className = "row">


                                  <div className = "form-group col">
                                  <TextField
                                   id="standard-read-only-input"
                                   onChange={this.changeEmailHandler}
                                   value={this.state.email} 
                                   label="Email"
                                     InputProps={{
                                 readOnly: true,
                                 startAdornment: (
                                    <InputAdornment position="start">
                                      <EmailIcon color="primary" />
                                    </InputAdornment>
                                  ),
                                  }}
                                
                                   />
                                
                                   
                                   
                                   
                                </div>
                                <div className = "form-group col">
                                     
                                  <TextField
                                       id="standard-read-only-input"
                                       onChange={this.changeStragHandler}
                                       value={this.state.daten} 
                                       label="Date naissance"
                                         InputProps={{
                                     readOnly: true,
                                     startAdornment: (
                                        <InputAdornment position="start">
                                        <CakeIcon color="primary" />
                                        </InputAdornment>
                                      ),
                                      }}
                                       />
                                
                                </div>






                                  </div>
                                  <div className = "row">
                                    <div className = "form-group col"> 
                                    <TextField
                                   id="standard-read-only-input"
                                   onChange={this.changeTelephoneHandler}
                                   value={this.state.telephone} 
                                   label="Telephone"
                                     InputProps={{
                                 readOnly: true,
                                 startAdornment: (
                                    <InputAdornment position="start">
                                      <PhoneIcon color="primary" />
                                    </InputAdornment>
                                  ),
                                  }}
                                
                                   />
                                   
                                    </div>
                                    <div className = "form-group col">
                                    
                                    <TextField
                                       id="standard-read-only-input"
                                       onChange={this.changeAdresseHandler}
                                       value={this.state.adresse} 
                                       label="Adresse"
                                         InputProps={{
                                     readOnly: true,
                                     startAdornment: (
                                        <InputAdornment position="start">
                                        <HomeIcon color="primary" />
                                        </InputAdornment>
                                      ),
                                      }}
                                    />
                                    
                                    
                                    </div>
                                    
                                          
                                  </div>
                                  <div class="form-row text-center">                        
    <div className="col-12">
        <button type="submit" className="btn btn-primary">View CV</button>
    </div> </div>
 
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>


           











        );
    }
}

export default PortfolioComponent;