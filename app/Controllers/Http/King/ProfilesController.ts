import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from "@ioc:Adonis/Core/Validator";
import Profile from 'App/Models/Profile'

export default class ProfilesController {
  public async index({ view }: HttpContextContract) {
    let profile = await Profile.firstOrFail()

    return view.render('king.profile', {
      profile: profile
    })
  }

  public async update({ response, request, session }: HttpContextContract) {
    let profile = await Profile.firstOrFail()

    let validation = schema.create({
      nama: schema.string({ trim: true, escape: true }, [
        rules.required(),
        rules.maxLength(255)
      ]),
      email: schema.string({}, [
        rules.required(),
        rules.email(),
        rules.maxLength(255)
      ]),
      title: schema.string({ trim: true }, [rules.required()]),
      tentang: schema.string({}, [rules.required()]),
      motto: schema.string({}, [rules.required()]),
      ttl: schema.string({}, [rules.required()]),
      nohp: schema.string({ trim: true }, [rules.required()]),
      alamat: schema.string({}, [rules.required()]),
      foto: schema.string.optional()
    })

    let data = await request.validate({ schema: validation })

    profile.nama = data.nama
    profile.email = data.email
    profile.title = data.title
    profile.tentang = data.tentang
    profile.motto = data.motto
    profile.ttl = data.ttl
    profile.nohp = data.nohp
    profile.alamat = data.alamat
    profile.foto = data.foto ?? profile.foto
    await profile.save()

    session.flash('success', 'Profile Updated')

    return response.redirect().toRoute('king.profile')
  }
}
