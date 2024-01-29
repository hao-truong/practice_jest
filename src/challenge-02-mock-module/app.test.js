import * as playerService from "./service";
import {getBestPlayer} from "./app";

jest.mock('./service', () => ({
    ...jest.requireActual('./service'),
    getAllPlayers: jest.fn(),
}))

describe('getBestPlayer', () => {
    it('should return the best player', () => {
        const players = [{
            name: 'hao',
            score: 10,
        }, {
            name: 'bao',
            score: 9,
        }];

        playerService.getAllPlayers.mockReturnValue(players);
        const expected = {
            name: 'hao',
            score: 10,
        };

        expect(getBestPlayer()).toEqual(expected);
    });
});
