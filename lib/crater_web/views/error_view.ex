defmodule CraterWeb.ErrorView do
  use CraterWeb, :view

  def render("401.json", %{message: message}) do
    %{status: :error, message: message}
  end

  def render("404.json", %{message: message}) do
    %{status: :error, message: message}
  end

  def render("500.json", %{message: message}) do
    %{status: :error, message: message}
  end

  # By default, Phoenix returns the status message from
  # the template name. For example, "404.html" becomes
  # "Not Found".
  def template_not_found(template, _assigns) do
    Phoenix.Controller.status_message_from_template(template)
  end
end
