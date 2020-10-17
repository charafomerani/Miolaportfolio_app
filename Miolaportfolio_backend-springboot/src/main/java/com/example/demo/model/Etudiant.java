package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.lang.NonNull;

@Entity
@Table(name="etudiant")





public class Etudiant {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
   private long id;
	
	@Column(name="nom_etudiant")
   private String nom;
	
	@Column(name="prenom_etudiant")
   private String prenom;
	
	@Column(name="Daten")
   private String daten;
	
	public String getDaten() {
		return daten;
	}

	public void setDaten(String daten) {
		this.daten = daten;
	}
	@Column(name="Stage")
	   private String stage ;
 
	@Column(name="Adresse")
	   private String adresse;
	
	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getTelephone() {
		return telephone;
	}

	public Etudiant(long id, String nom, String prenom, String daten, String adresse, String telephone, String email) {
		super();
		this.id = id;
		this.nom = nom;
		this.prenom = prenom;
		this.daten = daten;
		this.adresse = adresse;
		this.telephone = telephone;
		this.email = email;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	@Column(name="Telephone")
	   private String telephone;

   public Etudiant() {
	   
   }
   
   public Etudiant(long id, String nom, String prenom, String daten, String stage, String adresse, String telephone,
		String email) {
	super();
	this.id = id;
	this.nom = nom;
	this.prenom = prenom;
	this.daten = daten;
	this.stage = stage;
	this.adresse = adresse;
	this.telephone = telephone;
	this.email = email;
}

public Etudiant(String nom, String prenom, String daten, String email ,String stage) {
	super();
	this.nom = nom;
	this.prenom = prenom;
	this.daten = daten;
	this.email = email;
	this.stage=stage;
}
public long getId() {
	return id;
}
public void setId(long id) {
	this.id = id;
}
private String email;
public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}
public String getPrenom() {
	return prenom;
}
public void setPrenom(String prenom) {
	this.prenom = prenom;
}

public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}

public String getStage() {
	return stage;
}

public void setStage(String stage) {
	this.stage = stage;
}

}  
