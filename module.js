class Kubek {
    kolor;
    pojemnosc;
    plyn=0;

    constructor(y) {
        this.pojemnosc=y;
    }

    napelnij() {
        this.plyn=this.pojemnosc;
        document.getElementById("coffieCup").style.height='100px';
        console.log('Kubek zostal napelniony do pelna');
    }

    umyj() {
        if (this.plyn === 0) {
            console.log('Kubek zostal umyty');
        } else {
            console.log('Kubel nie jest pusty, nie marnuj KAWY! DOPIJ!');
        }

    }

    wezlyk() {
        if (this.plyn===0) {
            console.log('Kubek jest juz pusty!');
        } else {
            this.plyn -= 20;
            document.getElementById('coffieCup').style.height=this.plyn+'px';
            console.log('Wzieto lyk');
        }

    }

    stanKubka(){
        console.log('W kubku zostalo jeszcze ', this.plyn);
    }

}

let kubekKawy = new Kubek(100);
