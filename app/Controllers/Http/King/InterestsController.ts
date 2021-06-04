import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Interest from 'App/Models/Interest'

export default class InterestsController {
  public async index({ view }: HttpContextContract) {
    let interests = await Interest.all()

    return view.render('king.interest.index', { interests })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.interest.create')
  }

  public async store({ response, request, session }: HttpContextContract) {
    let validation = schema.create({
      nama: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      keterangan: schema.string({ trim: true, escape: true }),
    })

    let data = await request.validate({ schema: validation })

    await Interest.create({
      nama: data.nama,
      keterangan: data.keterangan
    })

    session.flash('success', 'Interest Added Successfully')

    return response.redirect().toRoute('king.interest')
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
