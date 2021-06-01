import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Statistics extends BaseSchema {
  protected tableName = 'statistics'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('views')
      table.integer('visitors')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
