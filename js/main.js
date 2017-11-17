//wyglad dokumentu - glownego obiektu DOM
//console.log(document); - wyciagam caly dokument
//console.log(document.documentElement); - wyciagam element html
//console.log(document.head); - wyciagam sekcje head
//console.log(document.body);

var parFirst = document.getElementById('parFirst');
console.log(parFirst);
//otrzymujemy tablice elementow - mozemy uzywac metod przeznaczonych dla tablic
var linki = document.getElementsByClassName('link');
console.log(linki);

console.log(linki[1]);

//po nazwie znacznika
var paragrafy = document.getElementsByTagName('p');
console.log(paragrafy);

//po okreslonym selektorze (podajemy # lub .) - zwraca PIERWSZE trafienie
var divPoId = document.querySelector('#parSecond');
console.log(divPoId);

var linkPoKlasie = document.querySelector('.link');
console.log(linkPoKlasie);
//zwraca pierwszy element. Podajemy . zwraca wszystkie trafienia
//po okreslonym selektorze (podajemy . lub znacznik) - zwraca WSZYSTKIE trafienia 
var linkiPoKlasie = document.querySelectorAll('#parFirst .link');
console.log(linkiPoKlasie);

//odnajdywanie wezlow
//odnalezienie rodzica
console.log(parFirst.parentNode);

//odnalezienie wezlow
console.log(parFirst.childNodes);
//w tekscie sa biale znaki (whitespace)^

//odnalezienie konkretnego wezla
console.log(parFirst.childNodes[1]);

//odnalezienie dzieci (elementow HTML)
var pierwszaSekcja = document.getElementById('sectionFirst');
console.log(pierwszaSekcja.children);

//wyszukanie konkretnego dziecka - jak po tablicy
console.log(pierwszaSekcja.children[2]);

//wyszukanie pierwszego dziecka
console.log(pierwszaSekcja.firstChild);

//wyszukanie ostatniego dziecka
console.log(pierwszaSekcja.lastChild);

//wczesniejsze/nastepne rodzenstwo
console.log(document.getElementById('link').nextElementSibling.nodeType);
console.log(document.getElementById('link').previousSibling.nodeType);


//tworzenie wezlow i dodawanie ich do html
var btn = document.createElement('button');
console.log(btn);

var btnTxt = document.createTextNode('Kliknij mnie');
console.log(btnTxt);

var btnClass = document.createAttribute('class');
btnClass.value = 'btn';

//dodaj btn do body
document.body.appendChild(btn);

//dodaj wezel tekstu do dodanego buttona
btn.appendChild(btnTxt);

//podpinamy do button node z klasa
btn.setAttributeNode(btnClass);

btn.setAttribute('title', 'jestem guzikiem');
//usuwanie atrybutu za pomoca funkcji
btn.removeAttribute('title');
//usuwanie atrybutu za pomoca wezla
var attrClass = btn.getAttributeNode('class');
btn.removeAttributeNode(attrClass);

document.body.removeChild(btn);

//manipulowanie DOM
var header = document.getElementById('header');
console.log(header.innerHTML);
header.innerHTML = '<p>Nowa tresc w naglowku</p>';

//header.innerText = '<p>123123</p>';

console.log(header.outerHTML);


//mozemy dodawac znaczniki za pomoca outerHTML - lacznie ze znacznikiem, do ktorego sie odnosimy
header.outerHTML = '<header id="header" class="klasa"><p>123123123123</p></header>';

//pobieranie/zmienianie atrybutow
console.log(linki[2].href);
console.log(linki[2].className);


//className - ustawia/pobiera klasy elementu (mozna podac wiecej niz jedna)
//jezeli modyfikujemy za pomoca outerHTML, to nie jestesmy w stanie tego nadpisac
header.className = 'klasa_2 klasa_3';
console.log(header.className);

linki[2].href = 'http://google.com';
console.log(linki[2].href);

linki[2].title = 'tytul';
linki[2].className = 'klasa_2 klasa_3'

var linkCSS = document.getElementById('link');

linkCSS.style.color = 'red';
linkCSS.style.fontSize = '25px';

//czeka na zaladowanie drzewa DOM
document.addEventListener( "DOMContentLoaded", function() {
// tutaj trafia skrypt operujący na elementach ze strony
    zmienKolor();
//    zmianakoloru();
});

function zmienKolor() {
//    linkCSS.addEventListener('mouseover',function() {
//        this.style.color = 'violet';
//    });
//    linkCSS.addEventListener('mouseout',function(){
//       this.style.color = 'red'; 
//    });
//}
//
////zrobione przezemnie
//var link1 = document.getElementById('link1');
//
//
//function zmianakoloru() {
//    link1.addEventListener('mouseover',function() {
//        this.style.color ='cyan';
//    });
//    link1.addEventListener('mouseout',function() {
//        this.style.color ='magenta';
//    });
//}
    
    for(var i=0; i < linki.length; i++) {
        linki[i].addEventListener('mouseover',function() {
            this.style.color = 'violet';
        });
        
        linki[i].addEventListener('mouseout',function() {
            this.style.color = 'red';
        });
        }
    }
        
    













