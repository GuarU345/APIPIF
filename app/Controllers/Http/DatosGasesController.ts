//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GasModelo from 'App/Models/Gas';
import mongoose from 'mongoose'

export default class DatosGasesController {

    public async DatosGas(){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar= await GasModelo.GasModelo.find({},{"gas":1,"_id":0}).sort({$natural:-1}).limit(10);
        return buscar
      }
    
      public async insertarGas({request,response}){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')

         const gas=request.input('gas')
    
         const crear = new GasModelo.GasModelo ({
           gas: gas
          })
    
         await crear.save()
         return response.json(crear)
      }
}
