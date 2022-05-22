class Kubek {
    kolor;
    pojemnosc;
    czystoscKubka;
    plyn = 0;

    constructor(y) {
        this.pojemnosc = y;
        this.czystoscKubka=this.kolor;
    }

    napelnij() {
        this.plyn = this.pojemnosc;
        const info = document.getElementById('info');
        document.getElementById("coffieCup").style.height = '100px';
        wyczyscDiva('info');
        info.insertAdjacentText('beforeend', 'Kubek zostal napelniony do pelna');
        // console.log('Kubek zostal napelniony do pelna');
    }

    wezlyk() {

        const info = document.getElementById('info');
        wyczyscDiva('info');

        if (this.plyn === 0) {
            info.insertAdjacentText('beforeend', 'Kubek jest juz pusty!');
        } else {
            this.plyn -= 20;
            document.getElementById('coffieCup').style.height = this.plyn + 'px';
            info.insertAdjacentText('beforeend', 'Wzieto lyk');
        }
    }

    stanKubka() {

        const info = document.getElementById('info');
        wyczyscDiva('info');
        if (this.plyn !== 0) {
            info.insertAdjacentText('beforeend', `W kubku zostalo jeszcze ${this.plyn} jednostek.`);
        } else {
            info.insertAdjacentText('beforeend', 'Kubek jest juz pusty!');
        }
    }
    
    umyj() {
        if (this.plyn === 0) {
            console.log('Kubek zostal umyty');
        } else {
            console.log('Kubel nie jest pusty, nie marnuj KAWY! DOPIJ!');
        }
    }

    // kolorKubka() {
    //     let wybranyKolor = document.getElementById('kolor');
    //     switch (wybranyKolor){
    //         case czarny:
    //         document.getElementById('cup').style.backgroundColor = 'black';
    //         break
    //     }

    // }

}

function wyczyscDiva(czyscik) {
    document.getElementById(czyscik).innerHTML = "";
}

let kubekKawy = new Kubek(100);
