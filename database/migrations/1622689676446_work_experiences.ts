import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WorkExperiences extends BaseSchema {
  protected tableName = 'work_experiences'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('tahun', 4)
      table.string('posisi')
      table.string('perusahaan')
      table.text('alamat')
      table.string('keterangan')
      table.timestamps()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
