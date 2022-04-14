import{Schema,model}from 'mongoose'

export default class MovimientoModelo{

    static movimientoschema=new Schema({
      movimiento:String
    },{
      versionKey:false
    });
    static MovimientoModelo:any=model('movimientos',this.movimientoschema);
}
