import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Profile extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama: string

  @column()
  public email: string

  @column()
  public title: string

  @column()
  public tentang: string

  @column()
  public motto: string

  @column()
  public ttl: string

  @column()
  public nohp: string
  
  @column()
  public alamat: string

  @column()
  public foto:string
}
