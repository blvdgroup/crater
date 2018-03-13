defmodule CraterWeb.Router do
  use CraterWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :api_authenticated do
    plug CraterWeb.Auth.Pipeline
  end

  scope "/api", CraterWeb.Api, as: :api do
    pipe_through :api

    scope "/v1", V1, as: :v1 do
      scope "/entries" do
        resources "/", EntriesController, only: [:index, :show]

        scope "/" do
          pipe_through :api_authenticated

          resources "/", EntriesController, only: [:create, :update, :delete]
        end
      end

      scope "/users" do
        resources "/", UserController, only: [:create]
        post "/sign-in", UserController, :sign_in

        scope "/" do
          pipe_through :api_authenticated

          get "/me", UserController, :me
        end
      end
    end
  end
end
