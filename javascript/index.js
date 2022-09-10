function Debouche(code, nom) {
    this.codeD = code;
    this.nomD = nom;
}
function Matiere(code, nom, volumeHoraire, nomE, assistant, estPratique) {
    this.codeM = code;
    this.nomM = nom;
    this.vH = volumeHoraire;
    this.nomE = nomE;
    this.assistant = assistant;
    this.estPratique = estPratique;
}
function Parcours(nom, Debouche) {
    this.nomP = nom;
    this.Debouche = Debouche;
}

function Note(note, matiere) {
    this.note = note;
    this.matiere = matiere
}
function Etudiant(nomE, date, lieuNaissance, sexe, taille, poids, parcours, note) {
    this.nomE = nomE;
    this.date = date;
    this.lieuNaissance = lieuNaissance;
    this.sexe = sexe;
    this.taille = taille;
    this.poids = poids;
    this.parcours = parcours;
    this.note = note

}

function afficherNotes(listeNotes) {
    let Tnotes = document.getElementById("Tnotes");
    console.log(Tnotes);
    Tnotes.innerHTML = "";
    let entête = document.createElement("tr");
    let celluleEntête1 = document.createElement("td");
    celluleEntête1.innerText = "Matières";
    let celluleEntête2 = document.createElement("td");
    celluleEntête2.innerText = "Notes";
    let celluleEntête3 = document.createElement("td");
    celluleEntête3.innerText = "Action";
    entête.appendChild(celluleEntête1);
    entête.appendChild(celluleEntête2);
    entête.appendChild(celluleEntête3);
    Tnotes.appendChild(entête);

    listeNotes.forEach((element, index) => {
        console.log(element);
        let ligne = document.createElement('tr');//on crée une ligne pour afficher les valeurs kon a récupéré plus haut

        let cellule1 = document.createElement('td');
        cellule1.innerHTML = element.matiere;

        let cellule2 = document.createElement('td');
        cellule2.innerHTML = element.note;

        let cellule3 = document.createElement('td');
        let btn1 = document.createElement('button');
        btn1.setAttribute('data-bs-toggle', 'modal');
        btn1.setAttribute('data-bs-target', '#exampleModal');

        btn1.innerHTML = '+';//on met le contenu du bouton
        let btn2 = document.createElement('button');
        btn2.innerHTML = '-';

        cellule3.appendChild(btn1);
        cellule3.appendChild(btn2);
        ligne.appendChild(cellule1);
        ligne.appendChild(cellule2);
        ligne.appendChild(cellule3);
        let Tnotes = document.getElementById('Tnotes');
        Tnotes.appendChild(ligne);

        //console.log(listeNotes);
        btn2.addEventListener('click', function supprimerNotes(e) {
            e.preventDefault();
            listeNotes.splice(index, 1);
            afficherNotes(listeNotes);
        });
        btn1.addEventListener('click', function modifierNotes(e) {
            e.preventDefault();
            let modalContent = document.getElementById('modalContent');
            modalContent.innerHTML =
                `<div class="input-group">
            <span class="input-group-text">Nom</span>
            <input type="text" id="newMatiere" class="form-control"placeholder="${listeNotes[index].matiere}">
            <span class="input-group-text">Code</span>
            <input type="text"  id="newNote" class="form-control"placeholder="${listeNotes[index].note}">
         </div>`;

            let saveModifBtn = document.getElementById('saveModif');
            saveModifBtn.addEventListener('click', function saveModifNote(e) {
                e.preventDefault();
                listeNotes[index].matiere = document.getElementById('newMatiere').value;
                listeNotes[index].note = document.getElementById('newNote').value;
                afficherNotes(listeNotes);

                let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
                let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
                let matValue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
                //console.log(matValue);//on affiche dans la console
                let inputNotes = document.getElementById('notes');
                let note = inputNotes.value;
                cellule1.innerHTML = matValue;
                cellule2.innerHTML = note;
            })
        });


    });


}
var listeNotes = new Array();
let ajouterNotesBtn = document.getElementById("AjouNotes");
ajouterNotesBtn.addEventListener("click", function ajouterNotes(e) {
    e.preventDefault();
    //on récupère la valeur choisie ds le select
    let mat = document.getElementById('matiere'); //on récupère d'abord le select grâce à son Id
    let choice = mat.selectedIndex; // on récupère l'index de l'élement sélectionné
    let matValue = mat.options[choice].value;//on récupère la valeur de l'element sélectionné
    //console.log(matValue);//on affiche dans la console
    let inputNotes = document.getElementById('notes');
    let note = inputNotes.value;

    let element = new Note(note, matValue);
    listeNotes.push(element);
    console.log(listeNotes);

    afficherNotes(listeNotes);



});

ajouterEtudiantBtn = document.getElementById('ajouterEtudiant');
ajouterEtudiantBtn.addEventListener('click', function ajouterEtudiant(e) {
    e.preventDefault();
    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let lieuNaissance = document.getElementById('lieuNaissance').value;
    let dateNaissance = document.getElementById('dateNaissance').value;

    let parcoursList = document.getElementById('parcours');
    let choice = parcoursList.selectedIndex;
    let parcours = parcoursList.options[choice].value;
    let taille = document.getElementById('taille');
    let poids = document.getElementById('poids');
    let sexe;
    if document.getElementById('homme').checked{
        sexe
    }
    let etudiant=new Etudiant(nom,prenom,dateNaissance,lieuNaissance,sexe,taille,poids,parcours,listeNotes)
})

