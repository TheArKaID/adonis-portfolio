import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Education from 'App/Models/Education'

export default class EducationsController {
  public async index({ view }: HttpContextContract) {
    let educations = await Education.all()

    return view.render('king.edu.index', { educations })
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
