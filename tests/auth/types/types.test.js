import { types } from "../../../src/auth";

describe("Test en Types.js", () => {
  test("should return these types: login and logout ", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
    });
  });
});
