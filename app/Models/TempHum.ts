import{Schema,model}from 'mongoose'

export default class TempHumModelo{

  static temphumschema=new Schema({
    temperatura:String,
    humedad:String,
    fecha:Date
  },{
    versionKey:false
  });

  static TempHumModelo:any=model('temyhums',this.temphumschema);
}
