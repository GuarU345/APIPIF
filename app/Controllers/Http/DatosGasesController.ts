import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from 'mongoose'

export default class DatosGasesController {
    public async mostrarGas(){
        try{
          const connection= mongoose.createConnection('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const {Schema}=mongoose

        interface Intemperatura {
          _id: number,
          gas: string
        }
    
        const gasSchema=new Schema<Intemperatura>({
          _id: {type: Number, require: true},
           gas: {type:String},
        });
    
        const gas=connection.model<Intemperatura>('gas',gasSchema);
        const buscar= gas.find().sort({$natural:1});
        
        return buscar
        }catch(error){
          return console.log({error:"No está validado"})
        }
    }

    public async DatosGas({request}: HttpContextContract){
      try{
        const connection= mongoose.createConnection('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
      const {Schema}=mongoose

      interface Intemperatura {
        _id: number
        gas: string
      }
  
      const gasSchema=new Schema<Intemperatura>({
        _id: {type: Number, require: true},
         gas: {type:String},
      });
  
      const gas=connection.model<Intemperatura>('gas',gasSchema);
      const buscar= gas.find({_id:request.params().id}).sort({$natural:1});
      
      return buscar
      }catch(error){
        return console.log({error:"No está validado"})
      }
  }
}
