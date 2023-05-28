const { executeSQL } = require('../model/dbConnect');

const getToAdministration = (req, res) => {
    (async () => {
        let kategorier = await executeSQL('select s.id as kategoriid, s.navn, s.størrelse, st.id from staevneKategori as s right join staevne as st on s.staevneid = st.id WHERE st.id = '+req.params.id);
        console.log(kategorier);
        res.render('staevne', {kategorier: kategorier});
    })();
}
const createKategori = (req, res) => {
    (async () => {
        console.log(req.body)
        await executeSQL('Insert into dbo.staevneKategori (navn, størrelse, staevneid) VALUES('+"'"+req.body.Navn+"'"+', '+"'"+req.body.Størrelse+"'"+', '+req.params.id+')');
        let kategorier = await executeSQL('select s.id as kategoriid, s.navn, s.størrelse, st.id from staevneKategori as s right join staevne as st on s.staevneid = st.id WHERE st.id = '+req.params.id);
        let counter = 1;
        const contestants = [];
        while (kategorier[counter] != undefined){
            contestants.push(await executeSQL('select * from Contestans WHERE kategoriid = '+kategorier[1].id));
            counter+=1;
        };
        console.log(contestants);
       console.log(kategorier);
        res.render('staevne', {kategorier: kategorier, contestants: contestants});
    })();
}

const deleteKategori = (req, res) => {
    (async () => {
        await executeSQL('delete from Contestans WHERE kategoriid ='+ req.params.kategoriid);
        await executeSQL('delete from staevneKategori WHERE id =' + req.params.kategoriid);
        let kategorier = await executeSQL('select s.id as kategoriid, s.navn, s.størrelse, st.id from staevneKategori as s right join staevne as st on s.staevneid = st.id WHERE st.id = '+req.params.id);
        console.log(kategorier);
        res.render('staevne', {kategorier: kategorier});
    })();
}

module.exports = {
    getToAdministration,
    createKategori,
    deleteKategori
}