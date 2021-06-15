import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ProgrammingLanguages extends BaseSchema {
  protected tableName = 'programming_languages'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.timestamps()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
