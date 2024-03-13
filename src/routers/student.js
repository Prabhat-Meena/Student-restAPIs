const express = require("express");
const router = new express.Router()
const Student = require("../models/students");

router.post("/students", async(req,res)=>{
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

//read the data of registered students
router.get("/students", async(req,res)=>{
    try {
        const studentData = await Student.find()
        res.send(studentData)
    } catch (error) {
        res.status(404).send(error)
    }
})

//get the individual data

router.get("/students/:id", async(req,res)=>{
    try {
        const _id = req.params.id
        const studentData = await Student.findById(_id)
        if(!studentData){
            res.status(404).send();
        }else{
            res.send(studentData)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

//find by name challenge

// router.get("/students/:name", async(req,res)=>{
//     try {
//         const name = req.params.name
//         const studentData = await Student.find(name)

//         if(!studentData){
//             res.status(404).send();
//         }else{
//             res.send(studentData)
//         }
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// update the student by id
router.patch("/students/:id", async(req,res)=>{
    try {
        const _id = req.params.id
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.send(updateStudent);
    } catch (error) {
        res.status(500).send(error)
    }
})


//delete the student

router.delete("/students/:id", async(req, res)=>{
    try {
        // const _id = req.params.id
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(deleteStudent);
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router;