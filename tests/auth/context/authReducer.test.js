import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth";

describe("Test in authReducer", () => {
  test("Should return the default state ", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("Need to call the login and authenticate the user", () => {
    const action = {
      type: types.login,
      payload: {
        name: "testUser1",
        id: "123",
      },
    };

    const state = authReducer({ logged: false }, action);
    expect(state).toEqual({
      logged: true,
      user: action.payload,
    });
  });
  test("Should call the logout, delete the username and change logged to false ", () => {
    const state = {
      logged: true,
      user: {
        name: "testUser2",
        id: "456",
      },
    };

    const action = {
      type: types.logout,
    };

    const newState = authReducer({ logged: true }, action);
    expect(newState).toEqual({
      logged: false,
    });
  });
});
