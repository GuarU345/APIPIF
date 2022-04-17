/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() =>{
    Route.post('token', 'UsuariosController.Token')
    Route.get('logout', 'UsuariosController.logout')
    Route.get('mostrarTemyHum', 'DatosTemyHumsController.mostrarTemyHum')
    Route.get('DatosTemyHum/:id', 'DatosTemyHumsController.DatosTemyHum')
    Route.get('mostrarMovimiento','DatosMovimentosController.mostrarMovimiento')
    Route.get('DatosGas', 'DatosGasesController.DatosGas')
    Route.post('insertarTempHum', 'DatosTemyHumsController.insertarTempHum')
    Route.post('insertarGas', 'DatosGasesController.insertarGas')
    Route.post('insertarMovi', 'DatosMovimentosController.insertarMovi')

}).middleware(['auth:api'])

Route.post('register','UsuariosController.register')
Route.post('login','UsuariosController.login')
