import RandomColor from "./RandomColor";
import {getRandomInt} from "./helper";

jest.mock('./helper', () => (
    {
        ...jest.requireActual('./helper'),
        getRandomInt: jest.fn(),
    }
))

describe('newColor()', () => {
    it('should return a color', () => {
        const random_color = new RandomColor();

        getRandomInt.mockReturnValue(1);

        expect(random_color.newColor()).toEqual('green');
    });
});

describe('when calling "newColor()" multiple times', () => {
    it('should return different colors', () => {
        const random_color = new RandomColor();
        const spy_new_color =
            jest.spyOn(random_color, 'newColor');
        getRandomInt.mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(0).mockReturnValueOnce(1).mockReturnValueOnce(2);

        expect(random_color.newColor()).toEqual('red');
        expect(random_color.newColor()).toEqual('green');
        expect(random_color.newColor()).toEqual('blue');
        expect(spy_new_color).toHaveBeenCalledTimes(5);
    });
});
