const sum = require('../src/utils/sum')

describe("Utils Method Test", () => {
    describe("Sum Function", () => {

        it("should be reutrn 3", () => {
            expect(sum(1, 2)).toBe(3)
        });

        it("should be return 11", () => {
            expect(sum(5, 6)).toBe(11)
        });

        it("should be return 11", () => {
            expect(sum(5, 6)).toBe(11)
        });
    });
});

describe("Custom Method", () => {
    const name = 'Samuel Anugerah Zega'
    describe("Name Value Validation", () => {
        const arrName = name.split(' ')
        it("should be Samuel", () => {
            expect(arrName[0]).toBe("Samuel")
        });

        it("should be Anugerah", () => {
            expect(arrName[1]).toBe("Anugerah")
        });

        it("should be Zega", () => {
            expect(arrName[2]).toBe("Zega")
        });

    });
    describe("Name Length Validation", () => {
        const arrName = name.split(' ')
        it("name length should be 20", () => {
            expect(name.length).toBe(20)
        });
        it("word length should be 3", () => {
            expect(arrName.length).toBe(3)
        });

    });
});