import { additionCalculator } from "./additionCalculator";

describe("addition calculator test cases", () => {
    test("addition of 4 and 6 to be eaual 10", () => {
        expect(additionCalculator(4, 6)).toBe(10);
    });

    test("addition of 100, 50, 20, 10 to be equal 180", () => {
        expect(additionCalculator(100, 50, 20, 10)).toBe(180);
    });

    test("addition of 7 to be equal 7", () => {
        expect(additionCalculator(7)).toBe(7);
    });

    test("addition of no argument provided to be equal zero", () => {
        expect(additionCalculator(0)).toBe(0);
    });
});
