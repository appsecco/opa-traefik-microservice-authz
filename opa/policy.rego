package demo.opa

default allow = false

allow {
    startswith(input.path, "/api-1")
    token.payload.roles[_] == "api-1-users"
}

allow {
    startswith(input.path, "/api-2")
    token.payload.roles[_] == "api-2-users"
}

# Token verification is required
token = {"payload": payload} {
  [header, payload, signature] := io.jwt.decode(input.token)
}
