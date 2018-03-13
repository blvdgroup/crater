defmodule CraterWeb.Auth.Guardian do
  @moduledoc """
  This module provides link to the Guardian module, used for authentication.
  For more information, see: https://github.com/ueberauth/guardian
  """
  use Guardian, otp_app: :crater
  alias Crater.Accounts

  def subject_for_token(resource, _claims) do
    {:ok, to_string(resource.id)}
  end

  def resource_from_claims(claims) do
    case Accounts.get_user!(claims["sub"]) do
      {:error, :not_found} -> {:error, :unauthorized}
      resource -> {:ok, resource}
    end
  end
end
