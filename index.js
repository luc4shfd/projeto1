const express = require("express");
const app = express();


app.set('view engine', 'ejs');


app.get("/",(req, res) => {
    var nome ="lucas Henrique";
    var lang = "javaScript";
    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Jacto SA"
    });
});



app.listen(3000,() =>{
    console.log("app rodando!")
});