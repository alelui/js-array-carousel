// alert('Ciaone');

const itemsArrey = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const titleArrey = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const textArrey = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];




//diciaro la variabile che utilizzerò nel ciclo
let items ='';
let texts ='';
//inizializzo il ciclo per inserire le immagini dinamicamente
for (let i = 0; i < itemsArrey.length; i++){

    items += `
        <div class="col-sx-img-box">          
            <img src="${itemsArrey[i]}" alt="">
        </div>
    ` 

    texts += `
    <div class="textInterno">          
        <h2>${titleArrey[i]}</h2>
        <span>${textArrey[i]}</span>
    </div>
`
}
//Visualizzo il risultato
// console.log(texts);

//Seleziono la destinazione dove andare a scrivere il risultato
const colSx = document.querySelector('.col-sx');
const colSxText = document.querySelector('.text');
// scrivo il risultato
colSx.innerHTML = items;
colSxText.innerHTML = texts;

//selezione la classe a cui devo aggingere la active creando un array di classi
const item = document.getElementsByClassName('col-sx-img-box');
const object = document.getElementsByClassName('object');
const text = document.getElementsByClassName('textInterno');
console.log(text);

//inizializo la variabile e la pongo uguale a 0 in modo da potere indiziare l'arrei di classi sopra creato
let Active = 0

//assegno la classe active al primo elemto dell'array di classi rendendo visibile l'immagine all'inteno della prima classe
item[Active].classList.add('active');
object[Active].classList.add('active-object');
text[Active].classList.add('active');

//seleziono le frecce su e giu
const down = document.querySelector('.btn.down');
const up = document.querySelector('.btn.up');


//tramite la variabile "down", al click del plsante verra scatenata la funzione
down.addEventListener("click", function(){
    //se "Active" è minore della lungezza -1 dell'arrai di classi...
    if ( Active < item.length -1){
        //seleziona la classe con l'active e la rimuove 
        item[Active].classList.remove('active');
        object[Active].classList.remove('active-object');
        text[Active].classList.remove('active');
        //incrementa la variabille favendo spostare l'indice di 1 unità e cosi facendo passa alla classe seguente
        Active++;
        //con l'indice incrementa ora la classe selezionata è la seguente e si può così aggiungere nuovamente la classe active
        item[Active].classList.add('active');
        object[Active].classList.add('active-object');
        text[Active].classList.add('active');
    }
});

//tramite la variabile "up", al click del plsante verra scatenata la funzione
up.addEventListener("click", function(){
    //se "Active" è maggiore di 0...
    if ( Active > 0){
        //seleziona la classe con l'active e la rimuove 
        item[Active].classList.remove('active');
        object[Active].classList.remove('active-object');
        text[Active].classList.remove('active');
        //decrementa la variabille favendo spostare l'indice di 1 unità e cosi facendo passa alla classe precedente
        Active--;
        //con l'indice decrementato ora la classe selezionata è la precedente e si può così aggiungere nuovamente la classe active
        item[Active].classList.add('active');
        object[Active].classList.add('active-object');
        text[Active].classList.add('active');
    }
});






