import * as componentGenerator from '../generateComponent';
const mock = require('mock-fs');

const outputFile = `import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../stories/typographyDemo/input/label.json';
export const Label = ({...props}: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.label);
  const newProps = {...props};
  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag}  {...newProps}>
      {props.children}
    </DynamicComponent>
  );
};`;

const outputCamelFile = `import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../stories/typographyDemo/headingOne/headingOne.json';
export const HeadingOne = ({...props}: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.headingOne);
  const newProps = {...props};
  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag}  {...newProps}>
      {props.children}
    </DynamicComponent>
  );
};`;

const linkFile = `import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../stories/typographyDemo/link/link.json';
export const Link = ({href,text,ariaLabel,...props}: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.link);
  const newProps = {href,text,ariaLabel,...props};
  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag} target="_blank" rel="noopener noreferrer"  {...newProps}>
      {props.children}
    </DynamicComponent>
  );
};`;

const linkFileWithProp = `import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '../stories/typographyDemo/link/linkClass.json';
export const LinkClass = ({href,text,ariaLabel,classes,...props}: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.linkClass);
  const newProps = {href,text,ariaLabel,classes,...props};
  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag} target="_blank" rel="noopener noreferrer" className={['btn', 'btn-sm', 'btn-link', classes].join(' ')}  {...newProps}>
      {props.children}
    </DynamicComponent>
  );
};`;

const label = {
  label: {
    tag: 'label',
    color: {
      value: 'red',
    },
    display: {
      value: 'inline-block',
    },
    'max-width': {
      value: '100%',
    },
    'margin-bottom': {
      value: '5px',
    },
    'font-weight': {
      value: '700',
    },
  },
};

const headingOne = {
  headingOne: {
    tag: 'h1',
    color: {
      value: 'red',
    },
    display: {
      value: 'inline-block',
    },
    'max-width': {
      value: '100%',
    },
    'margin-bottom': {
      value: '5px',
    },
    'font-weight': {
      value: '700',
    },
  },
};

const link = {
  link: {
    tag: 'a',
    props: ['href', 'text', 'ariaLabel'],
    defaultValues: {
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    color: {
      value: '#337ab7',
    },
    display: {
      value: 'inline-block',
    },
    'max-width': {
      value: '100%',
    },
    'font-weight': {
      value: '400',
    },
    'font-size': {
      value: '12px',
    },
    'line-height': {
      value: 1.5,
    },
    cursor: {
      value: 'pointer',
    },
    padding: {
      value: '5px 10px',
    },
  },
};

const linkClassesProp = {
  linkClass: {
    tag: 'a',
    props: ['href', 'text', 'ariaLabel', 'classes'],
    defaultValues: {
      target: '_blank',
      rel: 'noopener noreferrer',
      className: "{['btn', 'btn-sm', 'btn-link', classes].join(' ')}",
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

  mock({
    'stories/typographyDemo/input/label.json': `${JSON.stringify(label)}`,
    'stories/typographyDemo/headingOne/headingOne.json': `${JSON.stringify(
      headingOne
    )}`,
    'stories/typographyDemo/headingOne/heading-one.json': `${JSON.stringify(
      headingOne
    )}`,
    'stories/typographyDemo/link/link.json': `${JSON.stringify(link)}`,
    'stories/typographyDemo/link/linkClass.json': `${JSON.stringify(
      linkClassesProp
    )}`,
  });
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

  it('should camelCase the componentName', () => {
    const component = componentGenerator.generateComponentTemplate(
      'stories/typographyDemo/headingOne/',
      'headingOne.json',
      'components/'
    );
    expect(component).toContain(outputCamelFile);
  });

  it('should allow to pass props and defaultValues', () => {
    const component = componentGenerator.generateComponentTemplate(
      'stories/typographyDemo/link/',
      'link.json',
      'components/'
    );
    expect(component).toContain(linkFile);
  });

  it('should allow to interpolate the props', () => {
    const component = componentGenerator.generateComponentTemplate(
      'stories/typographyDemo/link/',
      'linkClass.json',
      'components/'
    );
    expect(component).toContain(linkFileWithProp);
  });
});
