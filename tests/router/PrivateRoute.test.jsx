import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter } from "react-router-dom";

describe("Tests in <PrivateRoute />", () => {
  test("If the user is authenticate, should shown the children ", () => {
    Storage.prototype.setItem = jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: "testUser3",
        id: "789",
      },
    };

    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <PrivateRoute>
            <h1>Private Route Test</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText("Private Route Test")).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman");
  });
});
