defmodule Crater.Entries.Snippet do
  use Ecto.Schema
  import Ecto.Changeset

  # :binary_id is managed by drivers/adapters, it will be UUID for mysql
  # but can be ObjectID if later you decide to use mongo
  @primary_key {:id, :binary_id, autogenerate: true}

  schema "snippets" do
    field :body, :string
    field :description, :string
    field :language, :string
    field :title, :string
    belongs_to(:user, Crater.Accounts.User, on_replace: :nilify)

    timestamps()
  end

  @doc false
  def changeset(snippet, attrs) do
    user = get_user(attrs["user_id"])

    snippet
    |> cast(attrs, [:id, :title, :language, :body, :description])
    |> put_assoc(:user, user)
    |> validate_required([:id, :title, :language, :body])
  end

  defp get_user(nil), do: nil
  defp get_user(id) do
    Crater.Accounts.get_user!(id)
  end
end
