import express from 'express'
import mongoose from 'mongoose'

const Animal = mongoose.model('Animal', new mongoose.Schema({
    tipo: String,
    estado: String,
}))

const app = express()

mongoose.connect('mongodb://fernando:rivera@mongolito:27017/micerdo?authSource=admin')

app.get('/', async (_req, res) => {
    console.log('listando... chanchitos... por doquier...')
    const animales = await Animal.find();
    return res.send(animales)
})
app.get('/creando', async (_req, res) => {
    console.log('creando pe causa...')
    await Animal.create({ tipo: 'CERDAZO', estado: 'EMPAREJADO Y EMBOBADO' })
    return res.send('ok')
})

app.listen(3000, () => console.log('listening...'))