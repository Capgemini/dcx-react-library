import * as fs from 'fs';
import { capitalize } from 'lodash';
const path = require('path');
const template = `
import React from 'react';
import { DynamicComponent, brandedComponentStyle } from 'dcx-react-library';
import jsonStyle from '{{inputFolder}}/{{fileName}}';
export const {{componentName}} = (props: any) => {
  const branded: any = brandedComponentStyle(jsonStyle.{{jsonPath}});

  return (
    <DynamicComponent dynamicStyle={branded.style} tag={branded.tag} {...props}>
      {props.children}
    </DynamicComponent>
  );
};
`;

/**
 * It will prepare the new React component from the given template
 * @param {*} inputFolder
 * @param {*} inputFile
 * @returns
 */
export const generateComponentTemplate = (
  inputFolder: string,
  inputFile: string,
  outputFolder: string
): string => {
  const componentName = capitalize(inputFile.replace('.json', ''));
  const jsonPath = inputFile.replace('.json', '');
  const relativePath = path.relative(outputFolder, inputFolder);
  return template
    .replace('{{inputFolder}}/{{fileName}}', `${relativePath}/${inputFile}`)
    .replace('{{jsonPath}}', jsonPath)
    .replace(/{{componentName}}/g, componentName)
    .replace(/\/\//g, '/');
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
  const fileName = `${outputFolder}/${capitalize(inputFile).replace(
    '.json',
    '.tsx'
  )}`;
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
