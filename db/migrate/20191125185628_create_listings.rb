class CreateListings < ActiveRecord::Migration[6.0]
  def change
    create_table :listings do |t|
      t.string :location
      t.integer :zip
      t.string :address
      t.boolean :buy
      t.boolean :rent
      t.integer :price
      t.text :description

      t.timestamps
    end
  end
end
