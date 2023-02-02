//sukuriu savo serveri
const express = require('express');
const app = express();

//duomenys bus gaunami, perduodami json formatu
app.use(express.json());

//sukuriu testiniu duomenu masyva
const products = [
    {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
    {id: 2, title: "Mens Casual Slim Fit" },
    {id: 3, title: "Solid Gold Petite Micropave" },
]

//svarbu 1.sukurti route
//visus produktu gavimas
app.get('/api/products', (req, res) => {
    res.send(products);
});

//konkrecios prekes paieska
//req yra prekes id
//res aprasome patys
app.get('/api/products/:id', (req, res) => {
    const my_product = products.find(product => product.id === parseInt(req.params.id));
    if(!my_product) res.status(404).send("not found");
    res.send(my_product);
 });

 //naujos prekes pridejimas, irasymas
 //be patikrinimu, ar netuscia reiksme siunciama ir tt...

 app.post('/api/products', (req, res) => {
    const product = {
        id: products.length +1,
        title: req.body.title
    };

    products.push(product);
    res.send(products);
 });


//apsirasome port'a ant kurio veiks serveris
const PORT = 5001;

//svarbu 2.tik tada kai sukurtas, egzistuoja route, startuoti serveri

app.listen(PORT, ()=>{
    console.log(`Server is runnig on ${PORT}`)
});