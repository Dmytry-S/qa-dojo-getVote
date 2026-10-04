import { test, expect } from "@playwright/test"

function goVote(age: number) {
    if ((!Number.isInteger(age)) || (age <= 0)) {
        throw new Error("Send valid age");
    }
    if (age >= 18) {
        return "Ви можете голосувати.";
    }
    if (age < 18) {
        return "Ви ще не можете голосувати.";
    }
}

test("Age 17", () => {
    expect(goVote(17)).toBe('Ви ще не можете голосувати.');
});

test("Age 18", () => {
    expect(goVote(18)).toBe('Ви можете голосувати.');
});

test("Age 19", () => {
    expect(goVote(19)).toBe('Ви можете голосувати.');
});

test("Age is not a number", () => {
    expect(() => goVote(17.5)).toThrow('Send valid age');
});

test("Age is les than zero", () => {
    expect(() => goVote(-1)).toThrow('Send valid age');
});

test("Age is zero", () => {
    expect(() => goVote(0)).toThrow('Send valid age');
});
