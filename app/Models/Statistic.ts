import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Statistic extends BaseModel {
  @column()
  public views: number

  @column()
  public visitors: number
}
