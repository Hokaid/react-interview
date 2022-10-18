import { validateEmail, SignIn} from './SignInScreen';

test("Validate email with valid email", () => {
    expect(validateEmail("hola@outlook.com")).toBe(true);
});

test("Validate email with invalid email", () => {
    expect(validateEmail("holaoutlookcom")).toBe(false);
});

test("Sign in with correct credentials", () => {
    expect(SignIn("hola@outlook.com", "kdfjfjsi849")).toBe(true);
});

test("Sign in with invalid credentials", () => {
    expect(SignIn("hola@outlook.com", "")).toBe(false);
});

