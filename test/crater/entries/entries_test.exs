defmodule Crater.EntriesTest do
  use Crater.DataCase
  import Crater.Factory

  alias Crater.Entries
  alias CraterWeb.Auth.Guardian

  describe "snippets" do
    alias Crater.Entries.Snippet

    @create_attrs %{
      body: "some body",
      description: "some description",
      language: "some language",
      title: "some title",
    }

    @create_attrs_no_description %{
      body: "some body",
      description: nil,
      language: "some language",
      title: "some title",
    }

    @invalid_attrs %{body: nil, description: nil, id: nil, language: nil, title: nil}

    @update_attrs %{
      body: "some updated body",
      description: "some updated description",
      language: "some updated language",
      title: "some updated title",
    }

    setup do
      user = insert(:user)
      snippet = insert(:snippet, user: user)
      {:ok, jwt, _full_claims} = Guardian.encode_and_sign(user)
      {:ok, %{user: user, snippet: snippet, jwt: jwt}}
    end

    def invalid_attrs(), do: %{body: nil, description: nil, id: nil, language: nil, title: nil}

    test "list_snippets/0 returns all snippets" do
      assert Entries.list_snippets() != []
    end

    test "get_snippet!/1 returns the snippet with given id", %{ snippet: snippet } do
      assert Entries.get_snippet!(snippet.id).id == snippet.id
    end

    test "create_snippet/1 with valid data creates a snippet", %{ user: user } do
      assert {:ok, %Snippet{} = snippet} =
        Entries.create_snippet(Map.merge(@create_attrs, %{user_id: user.id}))

      assert snippet.body == "some body"
      assert snippet.description == "some description"
      assert snippet.language == "some language"
      assert snippet.title == "some title"
    end

    test "create_snippet/1 with no description creates a snippet", %{ user: user } do
      assert {:ok, %Snippet{} = snippet} =
        Entries.create_snippet(Map.merge(@create_attrs_no_description, %{user_id: user.id}))
      refute snippet.description
    end

    test "create_snippet/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Entries.create_snippet(@invalid_attrs)
    end

    test "update_snippet/2 with valid data updates the snippet", %{ snippet: snippet } do
      assert {:ok, snippet} = Entries.update_snippet(snippet.id, @update_attrs)
      assert %Snippet{} = snippet
      assert snippet.body == "some updated body"
      assert snippet.description == "some updated description"
      assert snippet.language == "some updated language"
      assert snippet.title == "some updated title"
    end

    test "update_snippet/2 with invalid data returns error changeset", %{ snippet: snippet } do
      assert {:error, %Ecto.Changeset{}} = Entries.update_snippet(snippet.id, @invalid_attrs)
      assert snippet.id == Entries.get_snippet!(snippet.id).id
    end

    test "delete_snippet/1 deletes the snippet", %{ snippet: snippet } do
      assert {:ok, %Snippet{}} = Entries.delete_snippet(snippet.id)
      assert_raise Ecto.NoResultsError, fn -> Entries.get_snippet!(snippet.id) end
    end
  end
end
