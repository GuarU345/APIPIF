import{Schema,model}from 'mongoose'

export default class TempHumModelo{

    static temphumschema=new Schema({
     temperatura:String,
     humedad:String
    },{
      versionKey:false
    });

    static TempHumModelo:any=model('temp y hums',this.temphumschema);
}
