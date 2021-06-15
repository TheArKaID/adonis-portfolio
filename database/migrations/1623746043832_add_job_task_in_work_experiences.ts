import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class WorkExperiences extends BaseSchema {
  protected tableName = 'work_experiences'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.text('tasks').after('perusahaan')
      table.renameColumn('keterangan', 'status')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('tasks')
      table.renameColumn('status', 'keterangan')
    })
  }
}
