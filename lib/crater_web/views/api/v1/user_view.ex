defmodule CraterWeb.Api.V1.UserView do
  use CraterWeb, :view
  alias CraterWeb.Api.V1.UserView

  def render("show.json", %{user: user}) do
    %{status: :ok, data: render_one(user, UserView, "user.json")}
  end

  def render("error.json", %{message: message}) do
    %{
      status: :error,
      message: message
    }
  end

  def render("sign_in.json", %{user: user, jwt: jwt}) do
    %{
      status: :ok,
      data: %{
        token: jwt,
        user: %{
          id: user.id,
          username: user.username
        }
      },
      message: "Successfully logged in!"
    }
  end

  def render("register.json", %{user: user}) do
    %{
      status: :ok,
      data: %{
        id: user.id,
        username: user.username
      },
      message: "Registration Complete! You can now sign in to your account at /api/users/sign-in"
    }
  end

  def render("user.json", %{user: user}) do
    %{id: user.id, username: user.username}
  end
end
