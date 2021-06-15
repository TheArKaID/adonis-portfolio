import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Portfolio from 'App/Models/Portfolio'
import Application from '@ioc:Adonis/Core/Application'

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
      thumbnail: schema.file({ extnames: ['jpg', 'png'] }),
      preview1: schema.file({ extnames: ['jpg', 'png'] }),
      preview2: schema.file({ extnames: ['jpg', 'png'] }),
      preview3: schema.file({ extnames: ['jpg', 'png'] })
    })

    let data = await request.validate({ schema: validation })

    let file_name = data.judul.toLowerCase().replace(' ', '-')
    let thumbnail_name = file_name + '-0.' + data.thumbnail.extname
    let prev1_name = file_name + '-1.' + data.preview1.extname
    let prev2_name = file_name + '-2.' + data.preview2.extname
    let prev3_name = file_name + '-3.' + data.preview3.extname

    await data.thumbnail.move(Application.tmpPath('portfolio'), { name: thumbnail_name, overwrite: true })
    await data.preview1.move(Application.tmpPath('portfolio'), { name: prev1_name, overwrite: true })
    await data.preview2.move(Application.tmpPath('portfolio'), { name: prev2_name, overwrite: true })
    await data.preview3.move(Application.tmpPath('portfolio'), { name: prev3_name, overwrite: true })

    let images_data = [thumbnail_name, prev1_name, prev2_name, prev3_name]
    let images = images_data.join('|')

    await Portfolio.create({
      judul: data.judul,
      platform: data.platform,
      git: data.git,
      web: data.web,
      keterangan: data.keterangan,
      foto: images
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
  
  public async image({ params, response }: HttpContextContract) {
    return response.download(
      Application.tmpPath('portfolio', params.filename)
    )
  }
}
