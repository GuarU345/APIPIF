import{Schema,model}from 'mongoose'

export default class LedModelo{

    static ledchema=new Schema({
      led:String,
      fecha:Date
    },{
      versionKey:false
    });
    static LedModelo:any=model('leds',this.ledchema);
}