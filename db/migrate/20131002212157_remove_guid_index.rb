class RemoveGuidIndex < ActiveRecord::Migration
  def up
    remove_index(:entries, name: :index_entries_on_guid)
  end

  def down
    add_index :entries, :guid, unique: true
  end
end
