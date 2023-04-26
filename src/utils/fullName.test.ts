import { fullName } from "./fullName";

test('generateElementArray funstion test', () => {
    const fullElementName = fullName('Test Name', 1);

    expect(fullElementName).toEqual('Test Name 1')
})