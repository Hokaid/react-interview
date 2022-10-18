import { getCommentsCount } from "./DashboardScreen";

test("Get right comments count", () => {
    expect(getCommentsCount(1)).toBe(5);
});
