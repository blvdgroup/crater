defmodule Crater.Factory do
  use ExMachina.Ecto, repo: Crater.Repo

  def user_factory do
    %Crater.Accounts.User{
      username: sequence(:email, &"user#{&1}"),
      password_hash: Comeonin.Pbkdf2.hashpwsalt("password")
    }
  end
end
