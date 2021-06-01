import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Statistic from 'App/Models/Statistic'

export default class StatisticSeeder extends BaseSeeder {
  public async run() {
    await Statistic.create({
      views: 0,
      visitors: 0
    })
  }
}
