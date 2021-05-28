import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ConfigsController {
    public async index ({view}: HttpContextContract) {
        return view.render('index')
    }
}
