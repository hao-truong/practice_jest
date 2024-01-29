import {arraySum, getPositiveNumbers} from "./functions";

describe('functions', () => {
    describe('arraySum', () => {
        it('should return 0 for an empty array', () => {
            const arrEmpty = [];
            expect(arraySum(arrEmpty)).toEqual(0);
        });

        it('should return the sum of all the values in the array', () => {
            const arr = [1, 2, 3];
            expect(arraySum(arr)).toEqual(6);
        });
    });

    describe('getPositiveNumbers', () => {
        it('should return positive numbers', () => {
            const arr = [-1, 2, 3, -4];
            const expectedResult = [2, 3];
            expect(getPositiveNumbers(arr)).toEqual(expectedResult);
        });

        it('should return empty array', () => {
            const arr = [-1, -2, -3, -4];
            const expectedResult = [];
            expect(getPositiveNumbers(arr)).toEqual(expectedResult);
        });
    });
});
