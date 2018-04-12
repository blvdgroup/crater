defmodule CraterWeb.Api.V1.UserControllerTest do
  use CraterWeb.ConnCase

  alias Crater.Repo
  alias Crater.Accounts.User

  @valid_attrs %{username: "resir014", password: "s3cr3tKEY"}
  @invalid_attrs %{username: "resir014", password: "12345"}

  test "POST /api/users creates user and renders resource" do
    conn = build_conn()
    conn = post(conn, api_v1_user_path(conn, :create), user: @valid_attrs)
    assert json_response(conn, 201)
    assert Repo.get_by(User, username: "resir014")
  end

  test "POST /api/users renders errors when data is invalid" do
    conn = build_conn()
    conn = post(conn, api_v1_user_path(conn, :create), user: @invalid_attrs)
    assert json_response(conn, 422)
  end
end
