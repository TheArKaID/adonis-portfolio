import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Profile from 'App/Models/Profile'

export default class ProfileSeeder extends BaseSeeder {
  public async run () {
    await Profile.create({
      nama: 'Arifia Kasastra',
      alamat: 'Yogya',
      email: 'arka.progammer@gmail.com',
      foto: '',
      motto: '',
      nohp: '',
      tentang: 'TheArKa',
      title: 'Software Dev',
      ttl: 'Kalianda, 21 10 1999'
    })
  }
}
