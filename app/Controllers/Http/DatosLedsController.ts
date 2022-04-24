// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import LedModelo from 'App/Models/Led';
import mongoose from 'mongoose'

export default class LedsController {
    public async DatosLed(){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar=await LedModelo.LedModelo.find().sort({$natural:-1});
        return buscar
    }

    public async UltimoDatoLed(){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar=await LedModelo.LedModelo.find().sort({$natural:-1}).limit(1);
        return buscar
    }

    public async filtrarLed({request}){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const fecha=request.input('fecha')
        const buscar=await LedModelo.LedModelo.find({
              "$expr": {
                "$and": [
                  { $eq: [{ $year: "$fecha" }, { $year: new Date(fecha) }]},
                  { $eq: [{ $month: "$fecha" }, { $month: new Date(fecha) }]},
                  { $eq: [{ $dayOfMonth: "$fecha" }, { $dayOfMonth: new Date(fecha) }]}
                ]
              }
            });
        return buscar     
    }

    public async contadorLed(){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar=await LedModelo.LedModelo.aggregate([ {"$group" : {_id:"$led", count:{$sum:1}}} ]).sort({_id:-1})
        return buscar
    }

    public async insertarLed({request,response}){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
 
         const led=request.input('led')
         const fecha=new Date()
     
         const crear = new LedModelo.LedModelo ({
           led: led,
           fecha:fecha
         })
     
         await crear.save()
         return response.json(crear)
     }
}
