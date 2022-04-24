import{Schema,model}from 'mongoose'

export default class GasModelo{

    static gaschema=new Schema({
      valor:Number,
      gas:String,
      fecha:Date
    },{
      versionKey:false
    });
    static GasModelo:any=model('gas',this.gaschema);
}
