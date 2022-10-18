import { SignOut } from "./HomeScreen";

test("Sign out correctly", () => {
    expect(SignOut()).toBe("You are logged out");
});