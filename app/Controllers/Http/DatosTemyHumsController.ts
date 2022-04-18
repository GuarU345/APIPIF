//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TempHumModelo from 'App/Models/TempHum';
import mongoose from 'mongoose'

export default class DatosTemyHumsController {

      public async DatosTemyHumGrafica(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find({},{"temperatura":1,"humedad":1,"_id":0}).sort({$natural:-1}).limit(10);
            return buscar
      }

      public async DatosTemyHum(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find({},{"temperatura":1,"humedad":1,"fecha":1,"_id":0}).sort({$natural:-1}).limit(10);
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
