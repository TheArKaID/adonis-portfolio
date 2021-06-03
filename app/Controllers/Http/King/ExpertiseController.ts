import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Expertise from 'App/Models/Expertise'

export default class ExpertiseController {
  public async index({ view }: HttpContextContract) {
    let expertises = await Expertise.all()

    return view.render('king.expertise.index', {
      expertises
    })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.expertise.create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    let validation = schema.create({
      expertise: schema.string({ escape: true, trim: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      keterangan: schema.string()
    })

    let data = await request.validate({schema: validation})

    await Expertise.create({
      nama: data.expertise,
      keterangan: data.keterangan
    })

    session.flash('success', 'Expertised Added Successfully')

    return response.redirect().toRoute('king.expertise')
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
