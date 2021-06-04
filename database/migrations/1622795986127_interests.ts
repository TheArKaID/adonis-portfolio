import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Interests extends BaseSchema {
  protected tableName = 'interests'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama')
      table.text('keterangan')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
