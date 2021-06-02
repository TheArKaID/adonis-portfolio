import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Expertise from 'App/Models/Expertise'

export default class ExpertiseController {
  public async index ({ view }: HttpContextContract) {
    let expertises = await Expertise.all()

    return view.render('king.expertise', {
      expertises
    })
  }

  public async create ({}: HttpContextContract) {
  }

  public async store ({}: HttpContextContract) {
  }

  public async show ({}: HttpContextContract) {
  }

  public async update ({}: HttpContextContract) {
  }

  public async destroy ({}: HttpContextContract) {
  }
}
