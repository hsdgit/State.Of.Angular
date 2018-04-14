﻿using System.Collections.Generic;
using IdentityServer4.Models;

namespace State.Of.Angular.Auth.Auth
{
  public class Config
  {
    public static IEnumerable<ApiResource> GetApiResources()
    {
      return new List<ApiResource>
      {
        new ApiResource("api1", "My API")
      };
    }

    public static IEnumerable<Client> GetClients()
    {
      return new List<Client>
      {
        new Client
        {
          ClientId = "client",

          // no interactive user, use the clientid/secret for authentication
          AllowedGrantTypes = GrantTypes.ClientCredentials,

          // secret for authentication
          ClientSecrets =
          {
            new Secret("secret".Sha256())
          },

          // scopes that client has access to
          AllowedScopes = { "api1" }
        }
      };
    }

  }
}