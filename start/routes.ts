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
    Route.get('mostrarMovimiento','DatosMovimentosController.mostrarMovimiento')
    Route.get('UltimoDatoMovimiento', 'DatosMovimentosController.UltimoDatoMovimiento')
    Route.post('insertarMovi', 'DatosMovimentosController.insertarMovi')
    Route.get('DatosTemyHum', 'DatosTemyHumsController.DatosTemyHum')
    Route.get('UltimoDatoTemyHum', 'DatosTemyHumsController.UltimoDatoTemyHum')
    Route.get('ValorAltoTemyHum', 'DatosTemyHumsController.ValorAltoTemyHum')
    Route.get('ValorBajoTemyHum', 'DatosTemyHumsController.ValorBajoTemyHum')
    Route.get('DatosTemyHumGrafica', 'DatosTemyHumsController.DatosTemyHumGrafica')
    Route.post('insertarTempHum', 'DatosTemyHumsController.insertarTempHum')
    Route.get('DatosGas', 'DatosGasesController.DatosGas')
    Route.post('insertarGas', 'DatosGasesController.insertarGas')
    Route.get('DatosLed', 'DatosLedsController.DatosLed')
    Route.get('UltimoDatoLed', 'DatosLedsController.UltimoDatoLed')
    Route.post('insertarLed', 'DatosLedsController.insertarLed')
    Route.post('filtrarTemyHum', 'DatosTemyHumsController.filtrarTemyHum')
    Route.get('contadorLed', 'DatosLedsController.contadorLed')
    Route.post('filtrarLed', 'DatosLedsController.filtrarLed')

}).middleware(['auth:api'])   

Route.post('register','UsuariosController.register')
Route.post('login','UsuariosController.login')
