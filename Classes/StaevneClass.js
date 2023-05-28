class StaevneKategori {
    constructor(Navn, Størrelse){
        this.Navn = Navn;
        this.Størrelse = Størrelse;
    }
    create(){
        let staevneKategori = document.createElement('div');
        staevneKategori.className = 'kategori';

        let navn = document.createElement('p');
        navn.className = 'kategoriTekst';
        navn.innerHTML = this.Navn;

        let størrelse = document.createElement('p');
        størrelse.className = 'kategoriTekst';
        størrelse.innerHTML = this.Størrelse;

        let race = document.createElement('p');
        race.className = 'kategoriTekst';
        race.innerHTML = 'Race';

        let klub = document.createElement('p');
        klub.className = 'kategoriTekst';
        klub.innerHTML = 'Klub';

        staevneKategori.appendChild(navn);
        staevneKategori.appendChild(størrelse);
        staevneKategori.appendChild(race);
        staevneKategori.appendChild(klub);
        return staevneKategori;
    }
}

export{StaevneKategori}