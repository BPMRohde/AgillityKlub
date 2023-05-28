const { executeSQL } = require('../model/dbConnect');

const getResultater = (req, res) => {
    (async () => {
        let kategorier = await executeSQL('select navn, størrelse, id FROM staevneKategori WHERE staevneid ='+req.params.id );
        let deltagere = await executeSQL('select c.navn, c.hund, c.race, c.klub, s.navn as staevne, s.id as staevneid from Contestans as c inner join staevneKategori as s on c.kategoriid = s.id inner join staevne as st on st.id = s.staevneid Where st.id ='+req.params.id );
        console.log(deltagere);
        console.log(kategorier);
        res.render('resultater', {kategorier: kategorier, deltagere: deltagere});
    })();
}
module.exports = {
    getResultater
}