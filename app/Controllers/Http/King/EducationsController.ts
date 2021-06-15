import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Education from 'App/Models/Education'

export default class EducationsController {
  public async index({ view }: HttpContextContract) {
    let educations = await Education.all()

    return view.render('king.edu.index', { educations })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.edu.create')
  }

  public async store({ request, response, session }: HttpContextContract) {
    let validation = schema.create({
      tingkat: schema.string({ trim: true, escape: true }),
      jurusan: schema.string({ trim: true, escape: true }),
      tahun: schema.string({ trim: true, escape: true }),
      keterangan: schema.string({ trim: true, escape: true }),
      alamat: schema.string({ trim: true, escape: true }),
    })

    let data = await request.validate({ schema: validation })

    await Education.create({
      tingkat: data.tingkat,
      jurusan: data.jurusan,
      tahun: data.tahun,
      keterangan: data.keterangan,
      alamat: data.alamat
    })

    session.flash('success', 'Education Added Successfully')

    return response.redirect().toRoute('king.edu')
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
