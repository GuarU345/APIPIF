//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import mongoose from 'mongoose'

export default class DatosMovimentosController {
    public async mostrarMovimiento(){
        try{
          const connection= mongoose.createConnection('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const {Schema}=mongoose

        interface Intemperatura {
          _id: number,
          movimiento: string
        }
    
        const movimientoSchema=new Schema<Intemperatura>({
          _id: {type: Number, require: true},
          movimiento: {type:String},
        });
    
        const movimiento=connection.model<Intemperatura>('movimientos',movimientoSchema);
        const buscar= movimiento.find().sort({$natural:1});
        
        return buscar
        }catch(error){
          return console.log({error:"No está validado"})
        }
    }
}
