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

    let data = await request.validate({ schema: validation })

    await ProgrammingLanguage.create({
      name: data.name
    })

    session.flash('success', 'Programming Language Added Successfully')

    return response.redirect().toRoute('king.programming-language')
  }

  public async show({ view, params }: HttpContextContract) {
    let language = await ProgrammingLanguage.find(params.id)

    return view.render('king.language.edit', {
      lang: language
    })
  }

  public async update({ params, request, session, response }: HttpContextContract) {
    let validation = schema.create({
      name: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ])
    })

    let data = await request.validate({ schema: validation })

    let lang = await ProgrammingLanguage.findOrFail(params.id)

    lang.name = data.name
    await lang.save()

    session.flash('success', 'Programming Language Updated')

    return response.redirect().toRoute('king.programming-language')
  }

  public async destroy({ params, response, session }: HttpContextContract) {
    let lang = await ProgrammingLanguage.findOrFail(params.id)

    await lang.delete()

    session.flash('success', 'Programming Language Deleted')

    return response.redirect().toRoute('king.programming-language')
  }
}
