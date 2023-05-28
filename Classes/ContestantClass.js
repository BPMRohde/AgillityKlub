class Contestant {
    constructor(Navn, Hund, Race, Klub){
        this.Navn = Navn;
        this.Hund = Hund;
        this.Race = Race;
        this.Klub = Klub;
    }
    showContestant(place){
        
        let navn = document.createElement('p');
        navn.className = 'navn';
        navn.innerHTML = this.Navn;

        let hund = document.createElement('p');
        hund.className = 'hund';
        hund.innerHTML = this.Hund;

        let race = document.createElement('p');
        race.className = 'race';
        race.innerHTML = this.Race;

        let klub = document.createElement('p');
        klub.className = 'klub';
        klub.innerHTML = this.Klub;

        let samlet = document.createElement('div');
        samlet.appendChild(navn);
        samlet.appendChild(hund);
        samlet.appendChild(race);
        samlet.appendChild(klub);

        let placement = document.getElementsByClassName[place];
        placement.appendChild(samlet);
    }
}