const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}...`)
})

const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

const DB = 'mongodb+srv://clusterpavincius:y2s43cOFmeI12KBB@cluster0.nij4pw1.mongodb.net/test'
mongoose.connect(DB, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})

const Patient = require('./model/Patient')

app.post('/add-patient', async(req,res) => {
    const patientData = new Patient(req.body)
    try{
        await patientData.save()
        res.status(201).json({
            status: 'Success',
            data : {
                patientData
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    } 
})

app.get('/get-patient', async (req,res) => {
    const patientDatas = await Patient.find({})
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                patientDatas
            }
        })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})

app.patch('/update-patient/:id', async (req,res) => {
    const updatedPatient = await Patient.findByIdAndUpdate(req.params.id,req.body,{
        new : true,
        runValidators : true
      })
    try{
        res.status(200).json({
            status : 'Success',
            data : {
                updatedPatient
            }
          })
    }catch(err){
        console.log(err)
    }
})

app.delete('/delete-patient/:id', async(req,res) => {
    await Patient.findByIdAndDelete(req.params.id)
    
    try{
      res.status(204).json({
          status : 'Success',
          data : {}
      })
    }catch(err){
        res.status(500).json({
            status: 'Failed',
            message : err
        })
    }
})