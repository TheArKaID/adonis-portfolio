import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WorkExperiences extends BaseSchema {
  protected tableName = 'work_experiences'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('tahun').alter()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.string('tahun', 4).alter()
    })
  }
}
