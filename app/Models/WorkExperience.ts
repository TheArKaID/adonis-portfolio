import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class WorkExperience extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tahun: string

  @column()
  public posisi: string

  @column()
  public perusahaan: string

  @column()
  public tasks: string

  @column()
  public alamat: string

  @column()
  public status: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
