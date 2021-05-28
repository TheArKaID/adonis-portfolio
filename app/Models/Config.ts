import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Config extends BaseModel {
  @column()
  public username: string

  @column()
  public password: string

  @column()
  public remember_me_token: string
}
