import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Statistic from 'App/Models/Statistic'
import { DateTime } from 'luxon'

export default class Front {
  public async handle ({ session }: HttpContextContract, next: () => Promise<void>) {
    let visitDate = session.get('visit-date', false)
    let now = new DateTime()
    console.log(now)
    // if(visitDate) {
    //   if(now!=visitDate) {
    //     session.put('visit-date', now)

    //     let stat = await Statistic.firstOrFail()
    //     stat.views++
    //     stat.visitors++
    //     await stat.save()
    //   }
    // } else {
    //   session.put('visit-date', now)

    //   let stat = await Statistic.firstOrFail()
    //   stat.views++
    //   stat.visitors++
    //   await stat.save()
    // }

    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
