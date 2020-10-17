package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Etudiant;
import com.example.demo.model.Offre;
import com.example.demo.model.Projets;
import com.example.demo.model.Admin;
import com.example.demo.repository.EtudiantRepository;
import com.example.demo.repository.ProjetsRepository;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.OffreRepository;;

@RestController
@CrossOrigin(origins ="http://localhost:3000")                    //l erreur cros policy bloque l'accés
@RequestMapping("/api/v1/")
public class EtudiantController {

	@Autowired
	private EtudiantRepository etudiantRepository;
	@Autowired
	private AdminRepository adminRepository;
	@Autowired
	private ProjetsRepository projetsRepository;
	@Autowired
	private OffreRepository offreRepository;
	 //retournerttetudiants
	
	@GetMapping("/etudiants")
	public List<Etudiant> getAllEtudiant(){
		return etudiantRepository.findAll();
		
	}
	@GetMapping("/projets")
	public List<Projets> getAllProjets(){
		return projetsRepository.findAll();
		
	}
	@GetMapping("/offres")
	public List<Offre> getAllOffre(){
		return offreRepository.findAll();
		
	}
	
	//créer etudiant rest api
	
	@PostMapping("/etudiants")
	public Etudiant createEtudiant(@RequestBody Etudiant e) {
		
		return etudiantRepository.save(e);
		
	}
	//verifier si le login et le mot de passe d'un admin sont correcte
	@PostMapping("/admin")
	public String getAdmin(@RequestBody Admin a) {
		System.out.println("\n \nle login"+a.getEmail());
		System.out.println("\nle mot de passe "+a.getMotdepasse()+"\n \n");
		//recuperer la liste des admins
		List<Admin> listAdmins=adminRepository.findAll();
		//boucler dans cette liste pour verifier ce qui est recu 
		for(Admin ad:listAdmins) {
			if(ad.getEmail().equals(a.getEmail()) && ad.getMotdepasse().equals(a.getMotdepasse())) {
				//envoyer a frontEnd "correct" en cas de succes
				return "correct";
			}
		}
		//envoyer a frontEnd "correct" en cas de succes
		return "false";
		
		
	}
	//get etudiant by id rest api
	
	@GetMapping("/etudiants/{id}")
	public ResponseEntity<Etudiant> getEtudiantById(@PathVariable Long id) {
       
		Etudiant etudiant=etudiantRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Cet etudiant n'existe pas "+id));
		return ResponseEntity.ok(etudiant);
	}
	
	//update etudiant rest api
	
	@PutMapping("/etudiants/{id}")
	public ResponseEntity<Etudiant> updateEtudiant(@PathVariable Long id,@RequestBody Etudiant etudiantNouveau){
		
		Etudiant etudiant=etudiantRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Cet etudiant n'existe pas "+id));
		
		etudiant.setPrenom(etudiantNouveau.getPrenom());
		etudiant.setNom(etudiantNouveau.getNom()); 
		etudiant.setEmail(etudiantNouveau.getEmail()); 
		
		Etudiant updatedEtudiant=etudiantRepository.save(etudiant);
		return  ResponseEntity.ok(updatedEtudiant);

	}
	
	//delete etudiant rest api
	@DeleteMapping("/etudiants/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteEtudiant(@PathVariable Long id){
		Etudiant etudiant=etudiantRepository.findById(id).orElseThrow(() ->new ResourceNotFoundException("Cet etudiant n'existe pas "+id));
		
		etudiantRepository.delete(etudiant);
		Map<String, Boolean> response=new HashMap<>();
		response.put("Etudiant supprimé !",Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
