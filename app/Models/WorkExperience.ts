import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class WorkExperience extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tahun: number

  @column()
  public posisi: string

  @column()
  public perusahaan: string

  @column()
  public alamat: string

  @column()
  public keterangan: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
