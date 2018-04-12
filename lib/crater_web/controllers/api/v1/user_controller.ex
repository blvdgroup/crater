defmodule CraterWeb.Api.V1.UserController do
  use CraterWeb, :controller

  alias Crater.{Accounts, Accounts.User}
  alias CraterWeb.Auth.Guardian

  @doc """
  Registers a user.
  """
  def create(conn, %{"user" => user}) do
    case Accounts.create_user(user) do
      {:ok, %User{} = user} ->
        conn
        |> put_status(:created)
        |> render("register.json", user: user)

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(CraterWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end

  @doc """
  Signs in a user.
  """
  def sign_in(conn, %{"user" => %{"username" => username, "password" => password}}) do
    case Accounts.find_and_confirm_password(username, password) do
      {:ok, user} ->
        {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user)

        conn
        |> put_status(:ok)
        |> render("sign_in.json", user: user, jwt: jwt)

      {:error, :not_found} ->
        conn
        |> put_status(:not_found)
        |> render("error.json", message: "User not found")

      {:error, :unauthorized} ->
        conn
        |> put_status(:unauthorized)
        |> render("error.json", message: "Invalid password")
    end
  end

  @doc """
  Retrieves the current logged-in user.
  """
  def me(conn, _params) do
    case Guardian.Plug.current_resource(conn) do
      nil ->
        conn
        |> put_status(:not_found)
        |> render(CraterWeb.ErrorView, "404.json", message: "No user found")

      user ->
        conn
        |> put_status(:ok)
        |> render("show.json", user: user)
    end
  end

  # TODO: delete user
  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
