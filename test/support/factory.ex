defmodule Crater.Factory do
  use ExMachina.Ecto, repo: Crater.Repo

  def snippet_factory do
    %Crater.Entries.Snippet{
      body: "some body",
      description: "some description",
      language: "some language",
      title: "some title",
      user_id: build(:user).id
    }
  end

  def user_factory do
    %Crater.Accounts.User{
      username: sequence(:email, &"user#{&1}"),
      password_hash: Comeonin.Pbkdf2.hashpwsalt("password")
    }
  end
end
