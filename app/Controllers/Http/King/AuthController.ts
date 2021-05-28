import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    public async login({ view }: HttpContextContract) {
        return view.render('login')
    }

    public async postLogin({ auth, response, params }: HttpContextContract) {
        if (auth.isLoggedIn) {
            return response.redirect().toRoute('admin.index')
        }
    }
}
