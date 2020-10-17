import React, { Component } from 'react';
import EtudiantService from '../services/EtudiantService';

class ListeEtudiantComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            etudiants: [],
            projets: [],
            offres:[]
        }
        this.ajouterEtudiant = this.ajouterEtudiant.bind(this);
        this.connectAdmin = this.connectAdmin.bind(this);
        this.modifierEtudiant = this.modifierEtudiant.bind(this);
        this.deleteEtudiant = this.deleteEtudiant.bind(this);
    }
    deleteEtudiant(id) {
        EtudiantService.deleteEtudiant(id).then(res => {
            this.setState({ etudiants: this.state.etudiants.filter(etudiant => etudiant.id !== id) });
        });
    }

    portfolioEtudiant(id) {

        this.props.history.push(`/porfolio/${id}`)
    }
    modifierEtudiant(id) {
        this.props.history.push(`/modifier-etudiant/${id}`);


    }

    componentDidMount() { //axios
        EtudiantService.getEtudiants().then((res) => {
            this.setState({ etudiants: res.data });
        });
        EtudiantService.getProjets().then((resultat) => {
            this.setState({ projets: resultat.data });
        });
        EtudiantService.getOffres().then((resultat) => {
            console.log(resultat.data)
            this.setState({ offres: resultat.data });
        });
    }
    ajouterEtudiant() {

        this.props.history.push("/ajouter-etudiant")
    }
    connectAdmin() {
        this.props.history.push('/adminConnection')
    }

    render() {
        return (
            <div>
                <div style={{ color: "white" }}>
                    <br /><br /><br />
                    <section id="colorlib-hero" className="js-fullheight" data-section="home">
                        <div className="flexslider">
                            <ul className="slides">
                                <li style={{ backgroundImage: 'url(images/Khalid_Nafil.jpg)' }}>
                                    <div className="overlay" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner js-fullheight">
                                                    <div className="desc">
                                                    <br/><br/><br/><br/>
                                                    <h3  style={{ color: '#ffffff' }}>Bienvenue à MiolaPortfolio, je suis le coordonateur de ce master</h3>
                                                        <p><a className="btn btn-primary" href="https://about.me/knafil" target="_blank" rel="noopener noreferrer">About me<i className="icon-download4" /></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ backgroundImage: 'url(images/MIOLA.jpg)' }}>
                                    <div className="overlay" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner js-fullheight">
                                                    <div className="desc" style={{ color: "white" }}>
                                                    <br/><br/><br/><br/>
                                                        <h3 className="centrer" style={{color:"white"}} ><p>#MIOLA_chaque_jour_une_belle_histoire</p></h3><br/>
                                                        <p><a className="btn btn-primary" href="http://ensias.um5.ac.ma/article/master-internet-des-objets-logiciel-et-analytique-miola" target="_blank" rel="noopener noreferrer">View Descriptif<i className="icon-download4" /></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ backgroundImage: 'url(images/iot.jpg)' }}>
                                    <div className="overlay" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner">
                                                    <div className="desc">
                                                    <br/><br/>
                                                        <h3 style={{color:"white"}}>WE LOVE INTERNET OF THINGS </h3>
                                                        <br/>
                                                        <p><a className="btn btn-primary" href="/#projets" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li style={{ backgroundImage: 'url(images/logo.jpg)' }}>
                                    <div className="overlay" />
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                                <div className="slider-text-inner">
                                                    <div className="desc">
                                                    <br/><br/>
                                                    <h3 style={{color:"white"}}>Let’s build your futur together</h3><br/>
                                                        <p><a className="btn btn-primary" href="/" target="_blank" rel="noopener noreferrer">View images and videos <i className="icon-briefcase3" /></a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>
                </div><br /><br />
                <br /><br /><br /><br /><br />
                <div id="introduction"><br /><br />
                    <h1 className="text-center" style={{ fontSize: "20px", color: '#3F51B5', fontStyle: "italic" }}>La formation en master « Internet des Objets : Logiciel et Analytique » (MIOLA) offre l’opportunité aux apprenants de découvrir et de se perfectionner dans les technologies émergentes notamment : l’Internet des Objets, l’Ingénierie Web et Mobile, DevOps, UX Design, le Cloud et Virtualisation. A travers cette formation, les apprenants vont pouvoir se doter de connaissances à la fois théoriques et pratiques dans les domaines liés à l’Internet des Objets en particulier, par rapport aux deux aspects logiciel et matériel. Les diplômés de ce Master MIOLA, auront la possibilité d’intégrer le marché du travail ou de continuer leurs études doctorales.</h1>
                </div>
                <div id="list">
                    <br /><br /><br />
                    <h2 className="text-center colorlib-heading">Liste des etudiants</h2>
                    <div className="row">
                        <button className="btn btn-outline-primary" onClick={this.ajouterEtudiant}>Ajouter un etudiant</button></div>
                    <br /><br /><br />
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Nom de l'etudiant </th>
                                    <th>Prenom de l'etudiant</th>
                                    <th>Email de l'etudiant</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.etudiants.map(

                                        etudiant =>
                                            <tr key={etudiant.id}>
                                                <td>{etudiant.nom}</td>
                                                <td>{etudiant.prenom}</td>
                                                <td>{etudiant.email}</td>
                                                <td>
                                                    <button onClick={() => this.modifierEtudiant(etudiant.id)} className="btn btn-outline-info">Modifier</button>
                                                    <button onClick={() => this.deleteEtudiant(etudiant.id)} className="btn btn-outline-danger" style={{ marginLeft: "18px" }}>Supprimer</button>
                                                    <button onClick={() => this.portfolioEtudiant(etudiant.id)} className="btn btn-outline-success" style={{ marginLeft: "18px" }}>Portfolio</button>

                                                </td>


                                            </tr>


                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <br /><br />
                <div id="projets" >
                    <br /><br /><br />
                    <h2 className="text-center colorlib-heading">Liste des projets</h2>
                    <br /><br /><br />
                    <div className="row">
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Nom du Projets</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.projets.map(

                                        projet =>
                                            <tr key={projet.nom}>
                                                <td><b>{projet.nom}</b></td>
                                                <td>{projet.description}</td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="competences">
                    <section className="colorlib-about">
                        <div className="colorlib-narrow-content">
                            <div className="row">
                                <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                                    <span className="heading-meta">Les compétences</span>
                                    <h2 className="colorlib-heading">Les compétences acquises dans MIOLA</h2>
                                </div>
                            </div>
                            <div className="row row-pt-md">
                                <div className="col-md-4 text-center animate-box">
                                    <div className="services color-1">
                                        <span className="icon">
                                            <i className="icon-bulb" />
                                        </span>
                                        <div className="desc">
                                            <h3>l’Internet des Objets</h3>
                                            <p>L'Internet des objets ou IdO est l'interconnexion entre l'Internet et des objets, des lieux et des environnements physiques. L'appellation désigne un nombre croissant d'objets connectés à l'Internet permettant ainsi une communication entre nos biens dits physiques et leurs existences numériques.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="services color-3">
                                        <span className="icon">
                                            <i className="icon-phone3" />
                                        </span>
                                        <div className="desc">
                                            <h3>l’Ingénierie Web et Mobile</h3>
                                            <p>Développement Web ou Mobile : Cette discipline repose sur la conception et le développement de plateformes digitales ergonomiques, répondant aux besoins de l'entreprise et offrant une expérience d'utilisation optimale aux internautes.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="services color-5">
                                        <span className="icon">
                                            <i className="icon-data" />
                                        </span>
                                        <div className="desc">
                                            <h3>Dev Ops</h3>
                                            <p>en se penchant sur une approche plutôt « métier » où le Devops est un poste qu’occupe un salarié ayant des compétences dans le développement, mais aussi en ingénierie système.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-4 text-center animate-box">
                                    <div className="services color-2">
                                        <span className="icon">
                                            <i className="icon-data" />
                                        </span>
                                        <div className="desc">
                                            <h3>le Cloud et Virtualisation</h3>
                                            <p>Avec la virtualisation, une ressource peut jouer le rôle de plusieurs ressources, tandis qu'avec le cloud computing, différents services (via un cloud privé) ou entreprises (via un cloud public) ont accès à un même ensemble de ressources qui sont approvisionnées de manière automatique.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="services color-4">
                                        <span className="icon">
                                            <i className="icon-layers2" />
                                        </span>
                                        <div className="desc">
                                            <h3> UX Design</h3>
                                            <p>Le UX design consiste à penser et à concevoir un produit de manière à ce que l’expérience utilisateur soit la meilleure possible.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-center animate-box">
                                    <div className="services color-6">
                                        <span className="icon">
                                            <i className="icon-layers2" />
                                        </span>
                                        <div className="desc">
                                            <h3>Scrum</h3>
                                            <p>Scrum est un framework ou cadre de développement de produits logiciels complexes.c'est un cadre holistique itératif qui se concentre sur les buts communs en livrant de manière productive et créative des produits de la plus grande valeur possible </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
                <br /><br />
                <div id="offres" >
                    <br /><br /><br />
                    <h2 className="text-center colorlib-heading">vous trouverez ici des offres de stage ou d'emploi</h2>
                    <br />
                    <div className="row text-center">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th>Type</th>
                                    <th>Nom de société</th>
                                    <th>Lien</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.offres.map(

                                        offre =>
                                            <tr key={offre.id}>
                                                <td>{offre.type}</td>
                                                <td><b>{offre.nom_societe}</b></td>
                                                <td><a href={offre.lien} className="btn btn-outline-info">Détails</a></td>
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <br /><br /><br />
            </div>
        )
    }
}

export default ListeEtudiantComponent;