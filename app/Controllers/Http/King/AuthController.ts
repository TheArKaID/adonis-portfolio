import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";

export default class AuthController {
    public async login({ view, auth, response }: HttpContextContract) {
        if (auth.isLoggedIn) {
            return response.redirect().toRoute('king.index')
        }

        return view.render('login')
    }

    public async postLogin({ auth, response, request, session }: HttpContextContract) {
        if (auth.isLoggedIn) {
            return response.redirect().toRoute('king.index')
        }

        try {
            let validation = schema.create({
                username: schema.string({ trim: true }),
                password: schema.string({ trim: true }, [
                    rules.minLength(8)
                ])
            });

            let validatedData = await request.validate({
                schema: validation
            });

            await auth.attempt(validatedData.username, validatedData.password)

            return response.redirect().toRoute('king.index')
        } catch (error) {
            session.flash({ 'errors': [error.message] })
            return response.redirect().back()
        }
    }
}
