import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Framework from 'App/Models/Framework';

export default class FrameworksController {
  public async index({ view }: HttpContextContract) {
    let frameworks = await Framework.all()

    return view.render('king.framework.index', { frameworks })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.framework.create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    let validation = schema.create({
      framework: schema.string({ escape: true, trim: true }, [
        rules.required(),
        rules.maxLength(255)
      ])
    })

    let data = await request.validate({ schema: validation })

    await Framework.create({
      name: data.framework
    })

    session.flash('success', 'Framework Added Successfully')

    return response.redirect().toRoute('king.framework')
  }

  public async show({ view, params }: HttpContextContract) {
    let framework = await Framework.find(params.id)

    return view.render('king.framework.edit', {
      framework
    })
  }

  public async update({ request, params, session, response }: HttpContextContract) {
    let validation = schema.create({
      name: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ])
    })

    let data = await request.validate({ schema: validation })

    let lang = await Framework.findOrFail(params.id)

    lang.name = data.name
    await lang.save()

    session.flash('success', 'Framework Updated')

    return response.redirect().toRoute('king.framework')
  }

  public async destroy({ }: HttpContextContract) {
  }
}
