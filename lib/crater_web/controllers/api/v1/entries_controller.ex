defmodule CraterWeb.Api.V1.EntriesController do
  use CraterWeb, :controller

  alias Crater.{Entries, Entries.Snippet}

  def index(conn, _params) do
    conn
    |> put_status(:ok)
    |> json(%{status: :ok, message: "This is entries!"})
  end

  def show(conn, %{"id" => id}) do
    snippet =
      id
      |> Entries.get_snippet!()

    render(conn, "show.json", snippet: snippet)
  end

  def create(conn, %{"entries" => params}, user) do
    with {:ok, %Snippet{} = entries} <- Entries.create_snippet(create_params(params, user)) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", api_v1_entries_path(conn, :show, entries))
      |> render("show.json", entries: entries)
    end
  end

  defp create_params(params, user) do
    params
    |> Map.merge(%{"user_id" => user.id})
  end

end
