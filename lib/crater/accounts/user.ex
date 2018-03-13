defmodule Crater.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Comeonin.Pbkdf2

  # :binary_id is managed by drivers/adapters, it will be UUID for mysql
  # but can be ObjectID if later you decide to use mongo
  @primary_key {:id, :binary_id, autogenerate: true}
  @foreign_key_type :binary_id

  schema "users" do
    field :username, :string
    field :password_hash, :string
    field :password, :string, virtual: true

    timestamps()
  end

  @doc """
  Default changeset process for User auth flow.
  """
  def changeset(user, params) do
    user
    |> cast(params, ~w(username), [])
    |> validate_required(:username)
    |> validate_length(:username, min: 3, max: 255)
    |> validate_format(:username, ~r/[a-zA-Z\d-_]/)
  end

  @doc """
  Additional changeset steps for user registration.
  """
  def registration_changeset(user, params) do
    user
    |> changeset(params)
    |> unique_constraint(:username)
    |> cast(params, ~w(password), [])
    |> validate_required(:password)
    |> validate_length(:password, min: 8)
    |> put_pass_hash
  end

  defp put_pass_hash(%Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset) do
    change(changeset, password_hash: Pbkdf2.hashpwsalt(password))
  end
  defp put_pass_hash(changeset), do: changeset
end
