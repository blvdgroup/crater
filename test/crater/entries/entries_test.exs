defmodule Crater.EntriesTest do
  use Crater.DataCase
  import Crater.Factory

  alias Crater.Entries

  describe "snippets" do
    alias Crater.Entries.Snippet

    def valid_attrs() do
      %{
        body: "some body",
        description: "some description",
        id: "7488a646-e31f-11e4-aace-600308960662",
        language: "some language",
        title: "some title",
        user_id: user_fixture().id
      }
    end

    def valid_attrs_no_description() do
      %{
        body: "some body",
        description: nil,
        id: "7488a646-e31f-11e4-aace-600308960662",
        language: "some language",
        title: "some title",
        user_id: user_fixture().id
      }
    end

    def update_attrs() do
      %{
        body: "some updated body",
        description: "some updated description",
        id: "7488a646-e31f-11e4-aace-600308960668",
        language: "some updated language",
        title: "some updated title",
        user_id: user_fixture().id
      }
    end

    def invalid_attrs(), do: %{body: nil, description: nil, id: nil, language: nil, title: nil}

    def user_fixture(attrs \\ %{}) do
      insert(:user, attrs)
    end

    def snippet_fixture(attrs \\ %{}) do
      {:ok, snippet} =
        attrs
        |> Enum.into(valid_attrs())
        |> Entries.create_snippet()

      snippet
    end

    test "list_snippets/0 returns all snippets" do
      snippet = snippet_fixture()
      assert Entries.list_snippets() == [snippet]
    end

    test "get_snippet!/1 returns the snippet with given id" do
      snippet = snippet_fixture()
      assert Entries.get_snippet!(snippet.id) == snippet
    end

    test "create_snippet/1 with valid data creates a snippet" do
      assert {:ok, %Snippet{} = snippet} = Entries.create_snippet(valid_attrs())
      assert snippet.body == "some body"
      assert snippet.description == "some description"
      assert snippet.id == "7488a646-e31f-11e4-aace-600308960662"
      assert snippet.language == "some language"
      assert snippet.title == "some title"
    end

    test "create_snippet/1 with no description creates a snippet" do
      assert {:ok, %Snippet{} = snippet} = Entries.create_snippet(valid_attrs_no_description())
      refute snippet.description
    end

    test "create_snippet/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Entries.create_snippet(invalid_attrs())
    end

    test "update_snippet/2 with valid data updates the snippet" do
      snippet = snippet_fixture()
      assert {:ok, snippet} = Entries.update_snippet(snippet.id, update_attrs())
      assert %Snippet{} = snippet
      assert snippet.body == "some updated body"
      assert snippet.description == "some updated description"
      assert snippet.id == "7488a646-e31f-11e4-aace-600308960668"
      assert snippet.language == "some updated language"
      assert snippet.title == "some updated title"
    end

    test "update_snippet/2 with invalid data returns error changeset" do
      snippet = snippet_fixture()
      assert {:error, %Ecto.Changeset{}} = Entries.update_snippet(snippet.id, invalid_attrs())
      assert snippet == Entries.get_snippet!(snippet.id)
    end

    test "delete_snippet/1 deletes the snippet" do
      snippet = snippet_fixture()
      assert {:ok, %Snippet{}} = Entries.delete_snippet(snippet.id)
      assert_raise Ecto.NoResultsError, fn -> Entries.get_snippet!(snippet.id) end
    end

    test "change_snippet/1 returns a snippet changeset" do
      snippet = snippet_fixture()
      assert %Ecto.Changeset{} = Entries.change_snippet(snippet)
    end
  end
end
