import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Portfolio from 'App/Models/Portfolio'

export default class PortfoliosController {
  public async index({ view }: HttpContextContract) {
    let portfolios = await Portfolio.all()

    return view.render('king.portfolio.index', { portfolios })
  }

  public async create({ }: HttpContextContract) {
  }

  public async store({ }: HttpContextContract) {
  }

  public async show({ }: HttpContextContract) {
  }

  public async update({ }: HttpContextContract) {
  }

  public async destroy({ }: HttpContextContract) {
  }
}
