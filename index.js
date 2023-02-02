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
app.get('/api/products', (req, res) => {
    res.send(products);
});

//apsirasome port'a ant kurio veiks serveris
const PORT = 5001;

//svarbu 2.tik tada kai sukurtas, egzistuoja route, startuoti serveri

app.listen(PORT, ()=>{
    console.log(`Server is runnig on ${PORT}`)
});