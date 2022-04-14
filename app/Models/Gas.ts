import{Schema,model}from 'mongoose'

export default class GasModelo{

    static gaschema=new Schema({
      gas:String
    },{
      versionKey:false
    });
    static GasModelo:any=model('gases',this.gaschema);
}
