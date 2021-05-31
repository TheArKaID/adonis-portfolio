import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminController {
    public async index({ view, response, auth }: HttpContextContract) {
        return view.render('king.index', {
            test: 'to mbro'
        })
    }
}
