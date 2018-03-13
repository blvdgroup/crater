defmodule Crater.Repo.Migrations.CreateUsers do
  use Ecto.Migration

  def change do
    create table(:users, primary_key: false) do
      # Timestamps should be inserted immediately after the primary key in the
      # table. This ensures that when we add a new migration to the same table,
      # we have a clean data when we SELECT them.
      add :id, :uuid, primary_key: true
      timestamps()

      add :username, :string
      add :password_hash, :string
    end

    create unique_index(:users, [:username])
  end
end
