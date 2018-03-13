defmodule CraterWeb.Api.V1.EntriesController do
  use CraterWeb, :controller

  def index(conn, _params) do
    conn
    |> put_status(:ok)
    |> json(%{status: :ok, message: "This is entries!"})
  end
end
