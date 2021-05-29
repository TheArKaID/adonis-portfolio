import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Config from 'App/Models/Config';
export default class AuthController {
    public async login({ view }: HttpContextContract) {
        return view.render('login')
    }

    public async postLogin({ auth, response, request }: HttpContextContract) {
        if (auth.isLoggedIn) {
            console.log('ok')
            return response.redirect().toRoute('king.index')
        }

        let validation = schema.create({
            username: schema.string({trim: true}),
            password: schema.string({trim: true}, [
                rules.minLength(8)
            ])
        });

        let validatedData = await request.validate({
            schema: validation
        });

        // let config = Config.findBy({
        //     username
        // })
        await auth.attempt(validatedData.username, validatedData.password)

        return response.send(auth.isLoggedIn)
        // try {
        // } catch (error) {
        //     return response.send(error)
        //     // response.badRequest(error.messages)
        // }
    }
}
