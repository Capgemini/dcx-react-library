import { brandedComponentStyle } from '../generateStyle';

describe('generateStyle', () => {
  it('should generate the correct style from a json input', () => {
    const input = {
      tag: 'label',
      color: {
        value: '#6a737c',
      },
      fontWeight: {
        value: 'bold',
      },
      fontSize: {
        value: '12px',
      },
    };
    const branded = brandedComponentStyle(input);
    expect(branded.style).toEqual({
      color: '#6a737c',
      fontSize: '12px',
      fontWeight: 'bold',
    });
  });

  it('should generate the correct tag from a json input', () => {
    const input = {
      tag: 'label',
      color: {
        value: '#6a737c',
      },
      fontWeight: {
        value: 'bold',
      },
      fontSize: {
        value: '12px',
      },
    };
    const branded = brandedComponentStyle(input);
    expect(branded.tag).toBe('label');
  });
});
