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
    field :slug, :string
    field :title, :string
    belongs_to(:user, Crater.Accounts.User, on_replace: :nilify)

    timestamps()
  end

  @doc false
  def changeset(snippet, attrs) do
    user = get_user(attrs["user_id"])

    snippet
    |> cast(attrs, [:id, :title, :language, :slug, :body, :description])
    |> put_assoc(:user, user)
    |> validate_required([:id, :title, :language, :body])
    |> validate_length(:title, min: 5, max: 255)
    |> put_slug
  end

  defp put_slug(changeset), do: changeset

  defp get_user(nil), do: nil
  defp get_user(id) do
    Crater.Accounts.get_user!(id)
  end
end
