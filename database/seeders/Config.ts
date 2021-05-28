import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Config from 'App/Models/Config'

export default class ConfigSeeder extends BaseSeeder {
  public async run () {
    await Config.create({
      username: 'admin',
      password: '12345678',
      remember_me_token: ''
    })
  }
}
