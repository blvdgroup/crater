defmodule Crater.AccountsTest do
  use Crater.DataCase

  alias Crater.{Accounts, Accounts.User}

  describe "users" do
    @valid_attrs %{username: "resir014", password: "s3cr3tKEY"}
    @password_too_short_attrs %{username: "resir014", password: "12345"}
    @username_too_short_attrs %{username: "dy", password: "s3cr3tKEY"}

    test "create_user/1 with valid data creates a user" do
      assert {:ok, %User{} = user} = Accounts.create_user(@valid_attrs)
      assert user.id
      assert user.username
    end

    test "create_user/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@password_too_short_attrs)
      assert {:error, %Ecto.Changeset{}} = Accounts.create_user(@username_too_short_attrs)
    end
  end
end
