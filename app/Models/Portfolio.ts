import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Portfolio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public platform: string

  @column()
  public judul: string

  @column()
  public keterangan: string

  @column()
  public git: string

  @column()
  public web: string

  @column()
  public foto: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
