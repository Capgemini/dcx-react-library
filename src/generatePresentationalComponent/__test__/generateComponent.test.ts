import * as componentGenerator from '../generateComponent';
const mock = require('mock-fs');

const outputFile = `
import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../stories/typographyDemo/input/label.json';
export const Label = (props: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.label);

  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag}>
      {props.children}
    </DynamicComponent>
  );
};`;

const inputFile = {
  'label.json': {
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
  },
};

const fileStructure = {
  stories: {
    typographyDemo: {
      input: inputFile,
      output: {
        'Label.tsx': outputFile,
      },
    },
  },
};

let generateComponent: any;
beforeEach(() => {
  process.argv = [
    'node',
    'jest',
    '--input',
    'stories/typographyDemo/input',
    '--output',
    'stories/typographyDemo/output',
  ];

  generateComponent = jest.spyOn(componentGenerator, 'generateComponent');
  mock(fileStructure);
});

afterAll(() => {
  mock.restore();
});

describe('generateComponent', () => {
  it('should call the init function with input and output dir', () => {
    process.argv = [
      'node',
      'jest',
      '--input',
      'stories/typographyDemo/input',
      '--output',
      'stories/typographyDemo/output',
    ];
    const args = process.argv;
    componentGenerator.generatePresentationalComponent();
    expect(args[2]).toBe('--input');
    expect(args[3]).toBe('stories/typographyDemo/input');
    expect(args[4]).toBe('--output');
    expect(args[5]).toBe('stories/typographyDemo/output');
  });

  it('should throw an error if the input and output are not set', () => {
    process.argv = ['node', 'jest'];
    expect(() => {
      componentGenerator.generatePresentationalComponent();
    }).toThrow('usage: --input <dirName> --output <dirName>');
  });

  it('should fetch one file from the folder', () => {
    componentGenerator.fetchAllFilesFromFolder(
      'stories/typographyDemo/input',
      'stories/typographyDemo/output'
    );
    expect(generateComponent).toHaveBeenCalledTimes(2);
  });

  it('should generate the new react component from the template', () => {
    const component = componentGenerator.generateComponentTemplate(
      'stories/typographyDemo/input',
      'label.json',
      'components/'
    );
    expect(component).toContain(outputFile);
  });

  it('should generate the new react component and remove the // from the template if the input contains a / at the end', () => {
    const component = componentGenerator.generateComponentTemplate(
      'stories/typographyDemo/input/',
      'label.json',
      'components/'
    );
    expect(component).toContain(outputFile);
  });
});
