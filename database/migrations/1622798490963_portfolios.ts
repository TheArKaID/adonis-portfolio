import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Portfolios extends BaseSchema {
  protected tableName = 'portfolios'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('platform')
      table.string('judul')
      table.string('keterangan')
      table.string('git').nullable()
      table.string('web').nullable()
      table.string('foto')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
