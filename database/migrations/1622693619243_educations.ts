import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Educations extends BaseSchema {
  protected tableName = 'educations'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tingkat')
      table.string('jurusan')
      table.string('keterangan')
      table.string('tahun', 4)
      table.string('alamat')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
