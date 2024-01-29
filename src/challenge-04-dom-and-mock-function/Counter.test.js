import {act, render} from "@testing-library/react";
import {Counter} from "./Counter";

let container = null;
beforeEach(() => {
  // TODO: setup the document body for rendering the `Counter`
  container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
});

afterEach(() => {
  container.remove();
  container = null;
})

describe('Counter', () => {
  it('should render the given value', () => {
    // TODO: implement test
    const counter = new Counter({ selector: '#app', value: 1 });
    counter.render();

    expect(container.querySelector('.js-value').textContent).toBe('1');
  });

  describe('when clicking the "▲" arrow button', () => {
    it('should increase the value from 1 to 2', () => {
      const counter = new Counter({ selector: '#app', value: 1 });
      counter.render();

      container.querySelector('.js-increase-btn').click();

      expect(document.querySelector('.js-value').textContent).toBe('2');
    });
  });

  describe('when clicking the "▼" arrow button', () => {
    it('should decrease the value from 3 to 2', () => {
      const counter = new Counter({ selector: '#app', value: 3 });
      counter.render();

      container.querySelector('.js-decrease-btn').click();

      expect(document.querySelector('.js-value').textContent).toBe('2');
    });
  });
});
