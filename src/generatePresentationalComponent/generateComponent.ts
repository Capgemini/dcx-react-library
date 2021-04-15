import * as fs from 'fs';
const camelCase = require('camelcase');
const path = require('path');
const template = `
import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '{{inputFolder}}/{{fileName}}';
export const {{componentName}} = ({{{userProps}}...props}: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.{{jsonPath}});
  const newProps = {{{userProps}}...props};
  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag} {{defaultValues}} {...newProps}>
      {props.children}
    </DynamicComponent>
  );
};`;

export const replaceUserProps = (inputFile: string, data: any) => {
  let userProps = '';
  const jsonPath = inputFile.replace('.json', '');
  const parseFile = JSON.parse(data);
  if (parseFile[jsonPath].props) {
    userProps = parseFile[jsonPath].props.join(',').concat(',');
  }
  return userProps;
};

export const replaceDefaultValues = (inputFile: string, data: any) => {
  let values = '';
  const jsonPath = inputFile.replace('.json', '');
  const parseFile = JSON.parse(data);
  if (parseFile[jsonPath].defaultValues) {
    const def = parseFile[jsonPath].defaultValues;

    Object.keys(def).forEach(function(key) {
      if (def[key].includes('{')) {
        values = values.concat(`${key}=${def[key]} `);
      } else {
        values = values.concat(`${key}="${def[key]}" `);
      }
    });
  }
  return values;
};

export const generateComponentTemplate = (
  inputFolder: string,
  inputFile: string,
  outputFolder: string
): string => {
  const componentName = camelCase(inputFile.replace('.json', ''), {
    pascalCase: true,
    preserveConsecutiveUppercase: true,
  });

  const jsonPath = inputFile.replace('.json', '');
  const relativePath = path.relative(outputFolder, inputFolder);
  const fullPath = path.join(inputFolder, inputFile);
  const data = fs.readFileSync(fullPath, 'utf8');
  const userProps = replaceUserProps(inputFile, data);
  const defaultValues = replaceDefaultValues(inputFile, data);

  return template
    .replace('{{inputFolder}}/{{fileName}}', `${relativePath}/${inputFile}`)
    .replace('{{jsonPath}}', jsonPath)
    .replace(/{{componentName}}/g, componentName)
    .replace(/{{userProps}}/g, userProps)
    .replace('{{defaultValues}}', defaultValues)
    .replace(/(^[ \t]*\n)/gm, '');
};

/**
 * It will generate a new React component that has the same name of the file
 * using the template provided
 * @param {*} inputFile
 * @param {*} inputFolder
 * @param {*} outputFolder
 */
export const generateComponent = (
  inputFile: string,
  inputFolder: string,
  outputFolder: string
) => {
  const component = generateComponentTemplate(
    inputFolder,
    inputFile,
    outputFolder
  );
  const fileName = `${outputFolder}/${camelCase(
    inputFile.replace('.json', ''),
    { pascalCase: true, preserveConsecutiveUppercase: true }
  )}.tsx`;
  // create the folder if doesn't exist
  fs.mkdirSync(outputFolder, { recursive: true });
  // create the file
  fs.writeFileSync(fileName, component);
};

/**
 * given the folder as input it will retrieve the list of files present
 * @param {*} folder
 */
export const fetchAllFilesFromFolder = (
  inputFolder: string,
  outputFolder: string
) => {
  const directory = fs.readdirSync(inputFolder);
  directory.forEach(file => {
    generateComponent(file, inputFolder, outputFolder);
  });
};

/**
 * It take the input folder and the output one and will generate all the React component
 * @usage
 * yarn generate-typography  --input stories/typographyDemo/input --output stories/typographyDemo/output
 */
export const generatePresentationalComponent = () => {
  const args = process.argv;
  if (
    args[2] === '--input' &&
    args[3] !== undefined &&
    args[4] === '--output' &&
    args[5] !== undefined
  ) {
    const inputFolder = args[3];
    const outputFolder = args[5];
    fetchAllFilesFromFolder(inputFolder, outputFolder);
  } else {
    throw new Error('usage: --input <dirName> --output <dirName>');
  }
};
