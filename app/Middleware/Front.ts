import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { DateTime } from 'luxon'

export default class Front {
  public async handle({ session, request }: HttpContextContract, next: () => Promise<void>) {
    let visitDate = session.get('visit-date', false)
    let lastPage = session.get('last-page', false)
    let now = DateTime.local().toISODate()
    let stat = await Database.from('statistics').firstOrFail()

    if (stat) {
      if (visitDate) {
        if (now != visitDate) {
          session.put('visit-date', now)

          await Database.from('statistics').increment({
            visitors: 1
          })
        }
      } else {
        session.put('visit-date', now)

        await Database.from('statistics').increment({
          visitors: 1
        })
      }
    }
    if (lastPage != request.url()) {
      session.put('last-page', request.url())

      await Database.from('statistics').increment({
        views: 1
      })
    }

    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
