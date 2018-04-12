defmodule Crater.Entries.Snippet do
  use Ecto.Schema
  import Ecto.Changeset

  alias Crater.{Accounts, Accounts.User}

  # :binary_id is managed by drivers/adapters, it will be UUID for mysql
  # but can be ObjectID if later you decide to use mongo
  @primary_key {:id, :binary_id, autogenerate: true}

  @required_fields ~w(title language body user_id)a
  @optional_fields ~w(description slug)a

  schema "snippets" do
    field :body, :string
    field :description, :string
    field :language, :string
    field :slug, :string
    field :title, :string
    belongs_to(:user, User, type: :binary_id, foreign_key: :user_id)

    timestamps()
  end

  @doc false
  def changeset(snippet, attrs) do
    snippet
    |> cast(attrs, @required_fields ++ @optional_fields)
    |> validate_required(@required_fields)
    |> validate_length(:title, min: 5, max: 255)
    |> unique_constraint(:slug)
    |> assoc_constraint(:user)
    |> put_slug
  end

  defp put_slug(changeset) do
    if title = get_change(changeset, :title) do
      put_change(changeset, :slug, slugify(title))
    else
      changeset
    end
  end

  defp get_user(nil), do: nil
  defp get_user(id) do
    Accounts.get_user!(id)
  end

  defp slugify(str) do
    str
    |> String.downcase()
    |> String.replace(~r/[^\w-]+/u, "-")
  end
end
