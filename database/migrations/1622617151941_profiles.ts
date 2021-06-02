import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nama')
      table.string('email')
      table.string('title')
      table.text('tentang')
      table.string('motto')
      table.string('ttl')
      table.string('nohp')
      table.text('alamat')
      table.string('foto')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
