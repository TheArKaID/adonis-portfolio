import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Education from 'App/Models/Education'
import ProgrammingLanguage from 'App/Models/ProgrammingLanguage'
import Profile from 'App/Models/Profile'
import WorkExperience from 'App/Models/WorkExperience'
import Framework from 'App/Models/Framework'
import Portfolio from 'App/Models/Portfolio'

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
    
}
