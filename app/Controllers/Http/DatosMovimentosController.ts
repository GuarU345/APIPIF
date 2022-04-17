//import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MovimientoModelo from 'App/Models/Movimiento';
import mongoose from 'mongoose'

export default class DatosMovimentosController {
    public async mostrarMovimiento(){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')
        const buscar=await MovimientoModelo.MovimientoModelo.find().sort({$natural:1});
        return buscar
    }

    public async insertarMovi({request,response}){
        await mongoose.connect('mongodb+srv://admin:12345@sandbox.qlfli.mongodb.net/Sensores?retryWrites=true&w=majority')

        const movimiento=request.input('movimiento')
    
        const crear = new MovimientoModelo.MovimientoModelo ({
            movimiento: movimiento
        })
    
        await crear.save()
        return response.json(crear)
  }
}
