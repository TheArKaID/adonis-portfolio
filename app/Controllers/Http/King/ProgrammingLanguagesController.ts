import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import ProgrammingLanguage from 'App/Models/ProgrammingLanguage'

export default class ProgrammingLanguageController {
  public async index({ view }: HttpContextContract) {
    let languages = await ProgrammingLanguage.all()

    return view.render('king.language.index', { languages })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.language.create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    let validation = schema.create({
      name: schema.string({ escape: true, trim: true }, [
        rules.required(),
        rules.maxLength(255)
      ])
    })

    let data = await request.validate({schema: validation})

    await ProgrammingLanguage.create({
      name: data.name
    })

    session.flash('success', 'Programming Language Added Successfully')

    return response.redirect().toRoute('king.programming-language')
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
