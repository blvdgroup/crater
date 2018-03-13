defmodule Crater.Accounts do
  @moduledoc """
  The Accounts context.
  """
  import Ecto.Query, warn: false
  alias Comeonin.Pbkdf2
  alias Crater.Repo
  alias Crater.Accounts.User

  @doc """
  Creates a user.

  ## Examples

      iex> create_user(%{username: 'resir014', password: 's3cr3t'})
      {:ok, %User{}}

      iex> create_user(%{username: 'resir014', password: '1234'})
      {:error, %Ecto.Changeset{}}

  """
  def create_user(attrs \\ %{}) do
    %User{}
    |> User.registration_changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.
  """
  def get_user!(id), do: Repo.get!(User, id)

  @doc """
  Gets a single user by their username.

  Raises `Ecto.NoResultsError` if the User does not exist.
  """
  def get_user_by_username!(username) do
    User
    |> where(username: ^username)
    |> Repo.one!
  end

  @doc """
  Finds a user by their username and validates password.
  """
  def find_and_confirm_password(username, password) do
    case Repo.get_by(User, username: username) do
      nil ->
        {:error, :not_found}
      user ->
        if Pbkdf2.checkpw(password, user.password_hash) do
          {:ok, user}
        else
          {:error, :unauthorized}
        end
    end
  end

  @doc """
  Updates a user.
  """
  def update_user(%User{} = user, attrs) do
    user
    |> User.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a User.
  """
  def delete_user(%User{} = user) do
    Repo.delete(user)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking user changes.
  """
  def change_user(%User{} = user) do
    User.changeset(user, %{})
  end
end
