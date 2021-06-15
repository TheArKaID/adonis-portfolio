import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Educations extends BaseSchema {
  protected tableName = 'educations'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('institusi').after('jurusan')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('institusi')
    })
  }
}
