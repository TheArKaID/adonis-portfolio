import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import WorkExperience from 'App/Models/WorkExperience'

export default class WorkExperiencesController {
  public async index({ view }: HttpContextContract) {
    let works = await WorkExperience.all()

    return view.render('king.work.index', { works })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.work.create')
  }

  public async store({ response, request, session }: HttpContextContract) {
    let validation = schema.create({
      posisi: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      perusahaan: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      tasks: schema.string({ trim: true }),
      alamat: schema.string({ trim: true, escape: true }),
      tahun: schema.string({ trim: true, escape: true }),
      status: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ])
    })

    let data = await request.validate({ schema: validation })

    await WorkExperience.create({
      posisi: data.posisi,
      perusahaan: data.perusahaan,
      tasks: data.tasks,
      alamat: data.alamat,
      tahun: data.tahun,
      status: data.status
    })

    session.flash('success', 'Work Experience Added Successfully')

    return response.redirect().toRoute('king.work')
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
