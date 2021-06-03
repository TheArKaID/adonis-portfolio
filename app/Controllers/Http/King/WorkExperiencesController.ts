import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import WorkExperience from 'App/Models/WorkExperience'

export default class WorkExperiencesController {
  public async index({ view }: HttpContextContract) {
    let works = await WorkExperience.all()

    return view.render('king.work.index', { works })
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
