const { executeSQL } = require('../model/dbConnect');

const getSite = (req, res) => {
    (async () => {
        let stævne = await executeSQL('Select s.id, s.navn, st.id as staevneKategori from staevneKategori as s inner Join staevne as st on s.staevneid = st.id Where st.id = '+req.params.staevneid+'');
        console.log(stævne);
        res.render('tilmelding', {kategorier: stævne});
    })();
    
}

const registerCompetitor = (req, res) => {
    (async () =>{
        console.log(req.body.kategori);
        await executeSQL('Insert Into Contestans (navn, hund, race, klub, kategoriid, staevneid) VALUES('+"'"+req.body.newContestant+"'"+', '+"'"+req.body.newDog+"'"+', '+"'"+req.body.newRace+"'"+', '+"'"+req.body.newKlub+"'"+', (select id from staevneKategori Where navn = '+"'"+req.body.kategori+"'"+' and staevneid ='+req.params.staevneid+'), '+req.params.staevneid+') ');
        let stævne = await executeSQL('Select s.id, s.navn, st.id as staevneKategori from staevneKategori as s inner Join staevne as st on s.staevneid = st.id Where st.id = '+req.params.staevneid+'');
        console.log(stævne);
        res.render('tilmelding', {kategorier: stævne});
    })();
}

module.exports = {
    registerCompetitor,
    getSite
}