import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator"
import Education from 'App/Models/Education'
import ProgrammingLanguage from 'App/Models/ProgrammingLanguage'
import Profile from 'App/Models/Profile'
import WorkExperience from 'App/Models/WorkExperience'
import Framework from 'App/Models/Framework'
import Portfolio from 'App/Models/Portfolio'
import Message from 'App/Models/Message'

export default class ConfigsController {
    public async index ({view}: HttpContextContract) {
        let profile = await Profile.firstOrFail()
        let educations = await Education.query().orderBy('id')
        let languages = await ProgrammingLanguage.all()
        let expereinces = await WorkExperience.query().orderBy('id')
        let frameworks = await Framework.all()
        let portfolios = await Portfolio.all()

        return view.render('index', { profile, educations, expereinces, languages, frameworks, portfolios })
    }
    
    public async portfolio ({view, request}: HttpContextContract) {
        return view.render('index')
    }
    
    public async sendMessage({ request, response }: HttpContextContract) {
        let validation = schema.create({
            name: schema.string({ trim: true }, [
                rules.required(),
                rules.maxLength(255)
            ]),
            email: schema.string({ trim: true }, [
                rules.required(),
                rules.email()
            ]),
            subject: schema.string({ trim: true }, [
                rules.required(),
                rules.maxLength(255)
            ]),
            message: schema.string({ trim: true }),
        })

        let data = await request.validate({schema:validation})

        await Message.create({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        })

        return response.status(200).json(`OK`)
    }
}
