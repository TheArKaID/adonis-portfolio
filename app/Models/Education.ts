import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Education extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tingkat: string

  @column()
  public jurusan: string

  @column()
  public institusi: string

  @column()
  public keterangan: string

  @column()
  public tahun: string

  @column()
  public alamat: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
