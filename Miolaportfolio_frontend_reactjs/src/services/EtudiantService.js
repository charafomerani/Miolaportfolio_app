import axios from 'axios';

const ETUDIANT_BASE_API_URL="http://localhost:8080/api/v1/etudiants";

class EtudiantService{

  getEtudiants(){
      return axios.get(ETUDIANT_BASE_API_URL); //call all etudiant rest api
  }
  getProjets(){
    return axios.get("http://localhost:8080/api/v1/projets"); //call all etudiant rest api
  }
  getOffres(){
    return axios.get("http://localhost:8080/api/v1/offres"); //call all etudiant rest api
  }
  
  createEtudiant(etudiant){
    return axios.post(ETUDIANT_BASE_API_URL,etudiant);
  }
  
  getEtudiantById(etudiantId){

    return axios.get(ETUDIANT_BASE_API_URL + '/' + etudiantId);
  }

  updateEtudiant(etudiant,etudiantId){
       return axios.put(ETUDIANT_BASE_API_URL + '/' +etudiantId,etudiant);

  }
  deleteEtudiant(etudiantId){
    return axios.delete(ETUDIANT_BASE_API_URL + '/'+ etudiantId);
  }
}

export default new EtudiantService()