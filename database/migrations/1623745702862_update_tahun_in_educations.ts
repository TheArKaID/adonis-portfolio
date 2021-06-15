import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Educations extends BaseSchema {
  protected tableName = 'educations'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('tahun', 9).alter()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.string('tahun', 4).alter()
    })
  }
}
