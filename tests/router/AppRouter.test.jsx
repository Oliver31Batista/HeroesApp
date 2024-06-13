import { render } from "@testing-library/react";
import { AuthContext } from "../../src";
import { MemoryRouter } from "react-router-dom";
import { AppRouter } from "../../src/router/AppRouter";

describe("Pruebas en <AppRouter />", () => {
  test("If the user is not authenticate, shoul shown the login ", () => {
    const contextValue = {
      logged: false,
    };

    render(
      <MemoryRouter initialEntries={["/marvel"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Login").length).toBe(2);
  });

  test("If the user is Authenticate, should shown the marvel component", () => {
    const contextValue = {
      logged: true,
      user: {
        id: "ABC",
        name: "Juan Carlos",
      },
    };

    render(
      <MemoryRouter initialEntries={["/login"]}>
        <AuthContext.Provider value={contextValue}>
          <AppRouter />
        </AuthContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
  });
});
