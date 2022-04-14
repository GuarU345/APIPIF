import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import GasModelo from 'App/Models/Gas';
import mongoose from 'mongoose'

export default class DatosGasesController {
    public async mostrarGas(){

        await mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar= await GasModelo.GasModelo.find().sort({$natural:1});
        return buscar

    }

    public async DatosGas({request}: HttpContextContract){
        await mongoose.connect('mongodb+srv://admin:admin@miprimercluster.ityon.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar= GasModelo.GasModelo.find({_id:request.params().id}).sort({$natural:1});
        return buscar

  }
}
