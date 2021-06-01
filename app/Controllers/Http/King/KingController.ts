import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Statistic from 'App/Models/Statistic'

export default class AdminController {
    public async index({ view }: HttpContextContract) {
        let statistic = await Statistic.first()

        return view.render('king.index', {
            statistic: statistic
        })
    }
}
