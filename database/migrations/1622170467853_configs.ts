import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Configs extends BaseSchema {
  protected tableName = 'configs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('username', 10).notNullable()
      table.string('password', 100).notNullable()
      table.string('remember_me_token')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
