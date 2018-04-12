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

  def create(conn, %{"params" => params}) do
    case Entries.create_snippet(params) do
      {:ok, %Snippet{} = snippet} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", api_v1_entries_path(conn, :show, snippet))
        |> render("show.json", snippet: snippet)

      {:error, :unauthorized} ->
        conn
        |> put_status(:unauthorized)
        |> render("error.json", message: "Unauthorized")

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(CraterWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end
end
