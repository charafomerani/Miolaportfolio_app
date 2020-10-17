import React, { Component } from 'react';
import AdminService from '../services/adminService';
class AdminConnectionComponent extends Component {
    constructor(props){
        super(props);
        this.state={
        email:'',
        motdepasse:'',
          
        }
        this.cancel=this.cancel.bind(this);
        this.getConnected=this.getConnected.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
    }
    cancel(){
        this.props.history.push('/etudiants')
    }
    getConnected(){
        //this.props.history.push('/')
        let  log={email: this.state.email, motdepasse: this.state.motdepasse}
        AdminService.verifyEmailAndPassword(log).then(res =>{
            console.log(res.data)
            if(res.data==='correct'){
                //in case the  password or the login are correct
            }else{
                //in case the  password or the login are not correct
            }
    });
    }
    changeEmailHandler= (event) =>{
        this.setState({email: event.target.value});

    }
    changePwd= (event) =>{
        this.setState({motdepasse: event.target.value});
    }
    render() {
        return (
            <div>
                <br></br><br/><br/><br/><br/>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h1 className="text-center">Espace admin</h1>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Email :</label>
                                            <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Mot de passe :</label>
                                            <input placeholder="Mot de passe" name="mot de passe" className="form-control" value={this.state.motdepasse} onChange={this.changePwd}/>
                                        <br/><br/>
                                        <button  className="btn btn-outline-success" onClick={this.getConnected} >Se connecter</button> 
                                        <button type="button" className="btn btn-outline-danger" onClick={this.cancel}  style={{marginLeft: "10px"}}>Annuler</button>            
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default AdminConnectionComponent;
