// form.js

// Definim un JSON de mòduls per cicle i curs
const moduls = {
    DAM: {
        1: ["Programació",
            "Bases de Dades",
            "Sistemes Informàtics",
            "Entorns de Desenvolupament",
            "Llenguatges de Marques i Sistemes de Gestió de la Informació",
            "Projecte Intermodular I",
            "Anglès Professional I",
            "Itinerari Personal per a l'Ocupabilitat I"],
        2: ["Accés a Dades", 
            "Desenvolupament d'Interfícies", 
            "Programació Multimèdia i Dispositius mòbils",
            "Programació de Serveis i Processos",
            "Sistemes de Gestió Emprssarial",
            "Projecte Intermodular II",
            "Itinerari Personal per a l'Ocupabilitat II"]
    },
    DAW: {
        1: ["Programació",
            "Bases de Dades",
            "Sistemes Informàtics",
            "Entorns de Desenvolupament",
            "Llenguatges de Marques i Sistemes de Gestió de la Informació",
            "Projecte Intermodular I",
            "Anglès Professional I",
            "Itinerari Personal per a l'Ocupabilitat I"],
        2: ["Desenvolupament Web en entorn client",
            "Desenvolupament web en entorn servidor", 
            "Desplegament d'aplicacions web",
            "Disseny d'interfícies web",
            "Projecte Intermodular II",
            "Itinerari Personal per a l'Ocupabilitat II"]
    }
};

// Referències als elements del formulari
const cicleSelect = document.getElementById('cicle');
const cursRadios = document.getElementsByName('curs');
const modulsFieldset = document.getElementById('modulsFieldset');
const form = document.getElementById('matriculaForm');

// Funció per actualitzar els mòduls
function actualitzarModuls() {
    // 
    const cicle = cicleSelect.value;

    // cursRadios és un NodeList (hem fet un getElementsByName), i no un vector
    // Amb l'operador ... (conegut com spread), convertim aquest nodelist en un vector
    // Amb el vector ja podem fer ús del mètode find.
    // 
    // Amb el find(radio=>radio.checked) el que fem és buscar quin dels radios està checked
    // Amb l'opció seleccionada (checked), ens quedem amb el se value (i per tant, ja tenim el curs)
    const curs = [...cursRadios].find(radio => radio.checked)?.value;

    // Si falta informació no fem res
    if (!cicle || !curs) return;


    // Netegem els mòduls anteriors
    modulsFieldset.innerHTML = '<legend>Mòduls</legend>';
    var llistaModulsDiv=document.createElement('div');
    llistaModulsDiv.classList.add("llistaModuls");
    modulsFieldset.appendChild(llistaModulsDiv);

    /* TO-DO
    Recorre els diferents mòduls del cicle i curs seleccionat, i crea 
    el corresponent label i checkbox, amb l'estructura:

    <label><input type="checkbox" name="moduls" value="Programació"> Programació</label>

    
    */

}

// Escoltem canvis en la selecció de cicle/curs
cicleSelect.addEventListener('change', actualitzarModuls);
cursRadios.forEach(radio => radio.addEventListener('change', actualitzarModuls));


// Enviar el formulari
form.addEventListener('submit', async (e) => {
    // Inhibim l'enviament automàtic del formulari
    e.preventDefault();


    // Agafem les dades del formulari en formData, com a parells clau/valir
    // Podeu consultar la documentació de la finterfície FormData en: 
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    // Per agafar les propietats des d'aquesta interfície fem ús de form.get('nom_del_camp_del_formulari')

    const formData = new FormData(form);

    /* TO-DO
    
    Prepara un objece JSON amb la informació guardada al formulari

    */

    // Preparem l'objecte amb les dades per enviar al servidor
    // I l'enviem, fent ús d'una petició POST
    // Recordeu convertir el JSON a un string per enviar-lo al servidor
    // Una vegada rebuda la resposta, creeu una URL amb ell, un enllaç
    // i forceu el clic en ell per descarregar el document.

});
