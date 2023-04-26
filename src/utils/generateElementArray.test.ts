import { generateElementArray } from "./generateElementArray";

test('generateElementArray funstion test', () => {
    const TOTAL_ELEMENTS = 5;
    const elementArray = generateElementArray(TOTAL_ELEMENTS, [1, 3, 4]);

    expect(elementArray.filter(el => el.selected).length).toEqual(3)
})