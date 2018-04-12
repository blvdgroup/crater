# Used by "mix format" and to export configuration.
export_locals_without_parens = [
  # Formatter tests
  assert_format: 2,
  assert_format: 3,
  assert_same: 1,
  assert_same: 2,

  # Errors tests
  assert_eval_raise: 3,

  # Mix tests
  in_fixture: 2,
  in_tmp: 2
]

[
  inputs: ["{mix,.formatter,.credo}.exs", "{config,lib,priv,test}/**/*.{ex,exs}"],
  locals_without_parens: export_locals_without_parens,
  export: [locals_without_parens: export_locals_without_parens]
]
