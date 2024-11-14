import { mystery3 } from '../src/mystery';

test('Two strings with 1 different letter return 1', () => {
  // Arrange
  const string1 = 'CATCGTAGTGACGGCCT';
  const string2 = 'CATCGTAATGACGGCCT';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(1);
});

test('Two Empty Strings return 0', () => {
  // Arrange
  const string1 = '';
  const string2 = '';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(0);
});

test('Two identical strings return 0', () => {
  // Arrange
  const string1 = 'GAGCCTACTAACGGGAT';
  const string2 = 'GAGCCTACTAACGGGAT';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(0);
});

test('Comparing "GAGCCTACTAACGGGAT" and "CATCGTAATGACGGCCT" returns 7', () => {
  // Arrange
  const string1 = 'GAGCCTACTAACGGGAT';
  const string2 = 'CATCGTAATGACGGCCT';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(7);
});
