import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FrameworksController {
  public async index({ view }: HttpContextContract) {
    return view.render('king.framework.index')
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
