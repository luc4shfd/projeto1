const express = require("express");
const app = express();


app.set('view engine', 'ejs');


app.get("/",(req, res) => {
    var nome ="lucas Henrique";
    var lang = "javaScript";
    var msg = false;


    var produtos = [
        {nome: "melancia", preco:"5"},
        {nome: "uva", preco:"2.50"},
        {nome: "maça", preco:"3"}
    ]

    res.render("index",{
        nome: nome,
        lang: lang,
        empresa: "Jacto SA",
        msg: msg,
        produtos: produtos
    });
});



app.listen(3000,() =>{
    console.log("app rodando!")
});