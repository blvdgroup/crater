defmodule CraterWeb.Auth.Pipeline do
  @moduledoc """
  This module provides plugs for the :api_authenticated route pipeline.
  """
  use Guardian.Plug.Pipeline,
    otp_app: :crater,
    module: CraterWeb.Auth.Guardian,
    error_handler: CraterWeb.Auth.ErrorHandler

  plug(Guardian.Plug.VerifySession, claims: %{"typ" => "access"})
  plug(Guardian.Plug.VerifyHeader, claims: %{"typ" => "access"})
  plug(Guardian.Plug.EnsureAuthenticated)
  plug(Guardian.Plug.LoadResource)
end
