require('dotenv').config()
const express = require("express");
require("./db/conn");
const Student = require("./models/students")
const studentRouter = require("./routers/student")
const app = express();
const port = process.env.PORT || 3001;

//midelware 
//express.json() //jo bhi json request ayegi unhe use as a json recognise kr sake
app.use(express.json())
app.use(studentRouter);



app.listen(port, ()=>{
    console.log(`i am listing at ${port}`);
})


//older code//

// app.get("/", (req,res)=>{
//     res.send("hello")
// })

//create user using then and catch
// app.post("/students", (req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body)
//     user.save().then(()=>{
//         res.status(201).send(user)
//     }).catch((err)=>{
//         res.status(400).send(err)
//     })
// })
//create user using async awaiit
// app.post("/students", async(req,res)=>{
//     try {
//         const user = new Student(req.body)
//         const createUser = await user.save()
//         res.status(201).send(createUser)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// //read the data of registered students
// app.get("/students", async(req,res)=>{
//     try {
//         const studentData = await Student.find()
//         res.send(studentData)
//     } catch (error) {
//         res.status(404).send(error)
//     }
// })

// //get the individual data

// app.get("/students/:id", async(req,res)=>{
//     try {
//         const _id = req.params.id
//         const studentData = await Student.findById(_id)
//         if(!studentData){
//             res.status(404).send();
//         }else{
//             res.send(studentData)
//         }
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// //find by name challenge

// // app.get("/students/:name", async(req,res)=>{
// //     try {
// //         const name = req.params.name
// //         const studentData = await Student.find(name)

// //         if(!studentData){
// //             res.status(404).send();
// //         }else{
// //             res.send(studentData)
// //         }
// //     } catch (error) {
// //         res.status(500).send(error)
// //     }
// // })

// // update the student by id
// app.patch("/students/:id", async(req,res)=>{
//     try {
//         const _id = req.params.id
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//             new:true
//         });
//         res.send(updateStudent);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })


// //delete the student

// app.delete("/students/:id", async(req, res)=>{
//     try {
//         // const _id = req.params.id
//         const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//         if(!req.params.id){
//             return res.status(400).send();
//         }
//         res.send(deleteStudent);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// app.listen(port, ()=>{
//     console.log(`i am listing at ${port}`);
// })

// create router



