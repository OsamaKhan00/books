import express from "express"
import mysql from "mysql"


const app = express()                   // connect this to line 13

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hpprobook450corei5.",
    database: "test"
})

app.use(express.json()) //allows us to use express to send json file using any clie3nt. 


app.get("/", (req,res)=>{                   // API requests using express server......(This is a request here)
    res.json("hello this is the backend")
});

app.get("/books", (req,res)=>{
    const q = "SELECT * FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
// creating a book. 

//app.post("/books", (req,res)=>{
  //  const q = "INSERT INTO books (`titlle`, `desc`,`cover`) VALUES (?)"
    //const values = ["title from backend", 
      //              "desc from backend", 
        //            "cover from backend"] // array

        // if we are taking data from the user and updating it in the databse we can use the following 
app.post("/books", (req,res)=>{
    const q = "INSERT INTO books (`titlle`, `desc`,`cover`) VALUES (?)"
    const values = [
        req.body.tittle,
        req.body.desc,
        req.body.cover
    ] 

    db.query(q, [values], (err,data)=>{
        if(err) return  res.json(err)
        return res.json("Book has been created")
    })
})

app.listen(8800, ()=>{
    console.log("connected to backend!")
})