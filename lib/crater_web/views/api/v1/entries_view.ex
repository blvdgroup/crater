defmodule CraterWeb.Api.V1.EntriesView do
  use CraterWeb, :view
  alias CraterWeb.Api.V1.EntriesView

  def render("index.json", %{snippets: snippets}) do
    %{
      status: :ok, data: %{
        snippets: render_many(snippets, EntriesView, "snippet.json", as: :snippet)
      }
    }
  end

  def render("show.json", %{snippet: snippet}) do
    %{status: :ok, data: render_one(snippet, EntriesView, "snippet.json", as: :snippet)}
  end

  def render("error.json",  %{message: message}) do
    %{
      status: :error,
      message: message
    }
  end

  def render("snippet.json", %{snippet: snippet}) do
    %{
      id: snippet.id,
      title: snippet.title,
      description: snippet.description,
      language: snippet.language,
      slug: snippet.slug,
      body: snippet.body
    }
  end
end
