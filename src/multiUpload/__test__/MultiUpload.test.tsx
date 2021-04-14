import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiUpload } from '../MultiUpload';

describe('MultiUpload', () => {
  it('should render a multi upload', () => {
    render(<MultiUpload id="file-input" name="file-upload" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should render a multi upload label', () => {
    render(<MultiUpload id="file-input" name="file-upload" label="my-label" />);

    expect(screen.getByLabelText('my-label')).toBeInTheDocument();
  });

  it('should render a multi upload that accepts .json only', () => {
    render(<MultiUpload name="file-json" acceptedFormats=".json" />);
    expect(screen.getByRole('button')).toHaveAttribute('accept', '.json');
  });

  it('should render a multi upload that allow directories', () => {
    render(<MultiUpload name="file-upload" allowDirectories={'allow'} />);

    expect(screen.getByRole('button')).toHaveAttribute('allowdirs', 'allow');
  });

  it('should render a multi upload with hint text', () => {
    render(
      <MultiUpload
        name="file-upload"
        hint={{
          id: 'file-hint',
          text: 'file-text',
        }}
      />
    );

    expect(screen.getByText('file-text')).toBeInTheDocument();
  });

  it('should render a multi uplload with an error message', () => {
    render(
      <MultiUpload
        name="file-upload"
        error={{
          text: 'oops!! we have an error',
        }}
      />
    );

    expect(screen.getByText('oops!! we have an error')).toBeInTheDocument();
  });
});
