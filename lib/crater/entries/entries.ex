defmodule Crater.Entries do
  @moduledoc """
  The Entries context.
  """

  import Ecto.Query, warn: false
  alias Crater.Repo

  alias Crater.Entries.Snippet

  @doc """
  Returns the list of snippets.

  ## Examples

      iex> list_snippets()
      [%Snippet{}, ...]

  """
  def list_snippets do
    Repo.all(Snippet) |> Repo.preload(:user)
  end

  @doc """
  Gets a single snippet.

  Raises `Ecto.NoResultsError` if the Snippet does not exist.

  ## Examples

      iex> get_snippet!(123)
      %Snippet{}

      iex> get_snippet!(456)
      ** (Ecto.NoResultsError)

  """
  def get_snippet!(id), do: Repo.get!(Snippet, id) |> Repo.preload(:user)

  @doc """
  Creates a snippet.

  ## Examples

      iex> create_snippet(%{field: value})
      {:ok, %Snippet{}}

      iex> create_snippet(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_snippet(attrs \\ %{}) do
    %Snippet{}
    |> Snippet.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a snippet.
  """
  def update_snippet(id, attrs) do
    id
    |> get_snippet!()
    |> Snippet.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a Snippet.
  """
  def delete_snippet(id) do
    id
    |> get_snippet!()
    |> Repo.delete()
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking snippet changes.

  ## Examples

      iex> change_snippet(snippet)
      %Ecto.Changeset{source: %Snippet{}}

  """
  def change_snippet(%Snippet{} = snippet) do
    Snippet.changeset(snippet, %{})
  end
end
