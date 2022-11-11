const express = require('express')
const app = express()
const port = 3000

  
const itemList = [
  {
   id: 1,
   name : "Plat du jour",
   prix : "19,90€"
 },
  {
   id: 2,
   name : "sandwitch",
   prix : "6€"
 },
  {
   id: 3,
   name : "Milshake",
   prix : "3€"
 },
  {
   id: 4,
   name : "Coca",
   prix : "2€"
 },
  {
   id: 5,
   name : "Vodka",
   prix : "7€"
 }
]

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("login")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

app.get('/task', (req, res) => {

  let name = req.query.taskName
  let age = req.query.taskAge
  let money = req.query.taskMoney
  console.log(name, age, money);
  res.render('carte',{
    name, age, money,itemList: itemList,
  })
})







