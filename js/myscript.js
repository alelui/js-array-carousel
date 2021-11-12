// alert('Ciaone');

const itemsArrey = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

// const titleArrey = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const textArrey = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]




//diciaro la variabile che utilizzerò nel ciclo
let items ='';
//inizializzo il ciclo per inserire le immagini dinamicamente
for (let i = 0; i < itemsArrey.length; i++){

    items += `
        <div class="col-sx-img-box">          
            <img src="${itemsArrey[i]}" alt="">
        </div>
    ` 
}
//Visualizzo il risultato
// console.log(items);

//Seleziono la destinazione dove andare a scrivere il risultato
const colSx = document.querySelector('.col-sx');
// scrivo il risultato
colSx.innerHTML = items;

//selezione la classe a cui devo aggingere la active creando un array di classi
const item = document.getElementsByClassName('col-sx-img-box');
const object = document.getElementsByClassName('object');
console.log(object);

//inizializo la variabile e la pongo uguale a 0 in modo da potere indiziare l'arrei di classi sopra creato
let Active = 0

//assegno la classe active al primo elemto dell'array di classi rendendo visibile l'immagine all'inteno della prima classe
item[Active].classList.add('active');
object[Active].classList.add('active-object');

//seleziono le frecce su e giu
const down = document.querySelector('.btn.down');
const up = document.querySelector('.btn.up');


//tramite la variabile "down", al click del plsante verra scatenata la funzione
down.addEventListener("click", function(){
    //se "Active" è minore della lungezza -1 dell'arrai di classi...
    if ( Active < item.length -1){
        //seleziona la classe con l'active 
        item[Active].classList.remove('active');
        // circle[Active].classList.remove('active-cirle');
        //incrementa la variabille favendo spostare l'indice di 1 unità e cosi facendo passa alla classe seguente
        Active++;
        //con l'indice incrementa ora la classe selezionata è la seguente e si può così aggiungere nuovamente la classe active
        item[Active].classList.add('active');
    }
});






