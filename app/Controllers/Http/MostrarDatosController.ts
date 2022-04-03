import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from 'mongoose'

export default class MostrarDatosController {
    public async mostrar({request}: HttpContextContract){
        try{
          const connection= mongoose.createConnection('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const {Schema}=mongoose

        interface Incomentario {
          _id: number
          temperatura: string
          humedad: string
        }
    
        const temperaturaSchema=new Schema<Incomentario>({
          _id: {type: Number, require: true},
           temperatura: {String},
           humedad: {String},
        });
    
        const comentario=connection.model<Incomentario>('temperatura',temperaturaSchema);
        const buscar= comentario.find({_id:request.params().id}).sort({$natural:1});
        
        return buscar
        }catch(error){
          return console.log({error:"No está validado"})
        }
    }
}