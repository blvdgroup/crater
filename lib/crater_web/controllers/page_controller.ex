defmodule CraterWeb.PageController do
  use CraterWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
