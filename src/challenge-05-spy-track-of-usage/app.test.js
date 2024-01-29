import {updateProduct} from "./service";
import popup from "./Popup";
import {doUpdateProduct} from "./app";

jest.mock('./service', () => ({
    ...jest.requireActual('./service'),
    updateProduct: jest.fn(),
}))

afterEach(() => {
    jest.restoreAllMocks();
});

describe('doUpdateProduct', () => {
    describe('when updating successfully', () => {
        it('should show a popup message', () => {
            updateProduct.mockResolvedValue('product');

            const spy = jest.spyOn(popup, 'toast');

            doUpdateProduct('product').then(() => {
                expect(spy).toHaveBeenCalled();
            })
        });
    });

    describe('when updating failed', () => {
        it('should show the error', () => {
            updateProduct.mockRejectedValue({
                error: '101',
                message: 'Failed'
            });

            const spy = jest.spyOn(popup, 'showError');

            doUpdateProduct('product').then(() => {
                expect(spy).toHaveBeenCalled();
            })
        });
    });
});
