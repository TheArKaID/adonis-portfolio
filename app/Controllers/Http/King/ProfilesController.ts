import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Profile from 'App/Models/Profile'

export default class ProfilesController {
  public async index ({ view }: HttpContextContract) {
    let profile = await Profile.firstOrFail()

    return view.render('king.profile', {
      profile: profile
    })
  }

  public async update ({}: HttpContextContract) {
  }
}
