import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TempHumModelo from 'App/Models/TempHum';
import mongoose from 'mongoose'

export default class DatosTemyHumsController {
      public async mostrarTemyHum(){
            await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
            const buscar=await TempHumModelo.TempHumModelo.find().sort({$natural:1});
            return buscar
      }
  
      public async DatosTemyHum({request}: HttpContextContract){
         await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
         const buscar=await TempHumModelo.TempHumModelo.find({_id:request.params().id},{"temperatura":1,"humedad":1,"_id":0}).sort({$natural:1});
         return buscar
      }
}
