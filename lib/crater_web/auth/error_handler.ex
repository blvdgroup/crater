defmodule CraterWeb.Auth.ErrorHandler do
  import Plug.Conn

  def auth_error(conn, {type, _reason}, _opts) do
    body = Poison.encode!(%{status: :error, message: to_string(type)})

    conn
    |> send_resp(401, body)
  end
end
