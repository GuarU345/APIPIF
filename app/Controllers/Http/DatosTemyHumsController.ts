import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from 'mongoose'

export default class DatosTemyHumsController {
    public async mostrarTemyHum(){
        try{
          const connection= mongoose.createConnection('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const {Schema}=mongoose

        interface Intemperatura {
          _id: number,
          temperatura: string
          humedad: string
        }
    
        const TemperaturayHumSchema=new Schema<Intemperatura>({
          _id: {type: Number, require: true},
           temperatura: {type:String},
           humedad: {type:String},
        });
    
        const TemperaturayHum=connection.model<Intemperatura>('temperaturas',TemperaturayHumSchema);
        const buscar= TemperaturayHum.find().sort({$natural:1});
        
        return buscar
        }catch(error){
          return console.log({error:"No está validado"})
        }
    }

    public async DatosTemyHum({request}: HttpContextContract){
      try{
        const connection= mongoose.createConnection('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
      const {Schema}=mongoose

      interface Intemperatura {
        _id: number
        temperatura: string
        humedad: string
      }
  
      const TemperaturayHumSchema=new Schema<Intemperatura>({
        _id: {type: Number, require: true},
         temperatura: {type:String},
         humedad: {type:String},
      });
  
      const TemperaturayHum=connection.model<Intemperatura>('temperaturas',TemperaturayHumSchema);
      const buscar= TemperaturayHum.find({_id:request.params().id}).sort({$natural:1});
      
      return buscar
      }catch(error){
        return console.log({error:"No está validado"})
      }
  }
}
