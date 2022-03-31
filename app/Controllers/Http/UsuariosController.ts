// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Usuario from "App/Models/Usuario"

export default class UsuariosController {
  
  public async register({request,response}){
    const username=request.input(['username'])
    const email=request.input(['email'])
    const pass=request.input(['password'])

    const crear=new Usuario()
    crear.username=username
    crear.email=email
    crear.password=pass
    crear.save()
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
      return response.unauthorized({error:"No está validado"})
    }
  }
}
