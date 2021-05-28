import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'

export default class Config extends BaseModel {
  @column()
  public username: string

  @column()
  public password: string

  @column()
  public remember_me_token: string

  @beforeSave()
  public static async hashPassword(config:Config) {
    if(config.$dirty.password) {
      config.password = await Hash.make(config.password)
    }
  }
}
