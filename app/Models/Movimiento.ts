import{Schema,model}from 'mongoose'

export default class MovimientoModelo{

  static movimientoschema=new Schema({
    movimiento:String,
    fecha:Date
  },{
    versionKey:false
  });
  static MovimientoModelo:any=model('movimientos',this.movimientoschema);
}
