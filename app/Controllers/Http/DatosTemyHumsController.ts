//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TempHumModelo from 'App/Models/TempHum';
import mongoose from 'mongoose'

export default class DatosTemyHumsController {

      public async DatosTemyHumGrafica(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find().sort({$natural:-1}).limit(10);
            return buscar
      }

      public async DatosTemyHum(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find().sort({$natural:-1}).limit(10);
            return buscar
      }

      public async UltimoDatoTemyHum(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find().sort({$natural:-1}).limit(1);
            return buscar
      }

      public async ValorAltoTemyHum(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find(null, {"temperatura": 1, "humedad": 1, "fecha": 1}).sort({temperatura: -1, humedad: -1}).limit(1);
            return buscar
      }

      public async ValorBajoTemyHum(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find(null, {"temperatura": 1, "humedad": 1, "fecha": 1}).sort({temperatura: 1, humedad: 1}).limit(1);
            return buscar
      }    
      
      public async filtrarTemyHum({request}){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const fecha=request.input('fecha')
            const buscar=await TempHumModelo.TempHumModelo.find({
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

      public async insertarTempHum({request,response}){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
    
             const temperatura=request.input('temperatura')
             const humedad=request.input('humedad')
             const fecha=new Date()
        
             const crear = new TempHumModelo.TempHumModelo ({
               temperatura: temperatura,
               humedad:humedad,
               fecha:fecha
              })
        
             await crear.save()
             return response.json(crear)
      }
}
