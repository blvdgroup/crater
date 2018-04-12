defmodule Crater.Repo.Migrations.CreateSnippets do
  use Ecto.Migration

  def change do
    create table(:snippets, primary_key: false) do
      # Timestamps should be inserted immediately after the primary key in the
      # table. This ensures that when we add a new migration to the same table,
      # we have a clean data when we SELECT them.
      add(:id, :uuid, primary_key: true)
      timestamps()

      # Then references come next.
      add(:user_id, references(:users, type: :uuid, on_delete: :nothing))

      # And *only now* do we include our actual columns.
      add(:title, :string, null: false)
      add(:slug, :string)
      add(:language, :string)
      add(:body, :text, null: false)
      add(:description, :text)
    end

    create(index(:snippets, [:user_id]))
    create(unique_index(:snippets, [:slug]))
  end
end
