class CreateStates < ActiveRecord::Migration[5.0]
  def change
    create_table :states do |t|
      t.string :name
      t.integer :pop
      t.integer :area

      t.timestamps
    end
  end
end
