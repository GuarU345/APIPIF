import{Schema,model}from 'mongoose'

export default class GasModelo{

    static gaschema=new Schema({
      gas:String,
      fecha:Date
    },{
      versionKey:false
    });
    static GasModelo:any=model('gas',this.gaschema);
}
