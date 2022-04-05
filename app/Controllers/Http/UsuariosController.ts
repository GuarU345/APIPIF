// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Usuario from "App/Models/Usuario"
import RegisterValidator from "App/Validators/RegisterValidator"

export default class UsuariosController {
  
  public async register({request,response}){

    const data = await request.validate(RegisterValidator)

    const crear = await Usuario.create(data)

    return response.json({crear})
  }

  public async login({request,auth,response}){
    const email = request.input('email')
    const pass = request.input('password')

    try {
      const token = await auth.use('api').attempt(email, pass)
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async Token({auth,response}){
    try{
      return await auth.use('api').authenticate()
    }
    catch(e){
      return response.unauthorized({error:"Token no es validado"})
    }
  }

  public async logout({ auth }){
    await auth.use('api').revoke()
    return {
        revoked: true
    }
}
}
