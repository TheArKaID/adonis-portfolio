import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Portfolio from 'App/Models/Portfolio'

export default class PortfoliosController {
  public async index({ view }: HttpContextContract) {
    let portfolios = await Portfolio.all()

    return view.render('king.portfolio.index', { portfolios })
  }

  public async create({ view }: HttpContextContract) {
    return view.render('king.portfolio.create')
  }

  public async store({ response, request, session }: HttpContextContract) {
    let validation = schema.create({
      judul: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      platform: schema.enum(['web', 'desktop', 'mobile']),
      git: schema.string.optional({ trim: true, escape: true }),
      web: schema.string.optional({ trim: true, escape: true }),
      keterangan: schema.string({ trim: true, escape: true }),
      thumbnail: schema.string.optional({ trim: true, escape: true }),
      preview1: schema.string.optional({ trim: true, escape: true }),
      preview2: schema.string.optional({ trim: true, escape: true }),
      preview3: schema.string.optional({ trim: true, escape: true })
    })

    let data = await request.validate({ schema: validation })

    await Portfolio.create({
      judul: data.judul,
      platform: data.platform,
      git: data.git,
      web: data.web,
      keterangan: data.keterangan
    })

    session.flash('success', 'Portfolio Added Successfully')

    return response.redirect().toRoute('king.portfolio')
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
