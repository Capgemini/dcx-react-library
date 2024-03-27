import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MultiUpload } from '../MultiUpload';

describe('MultiUpload', () => {
  it('should render a multi upload', () => {
    const { container } = render(
      <MultiUpload id="file-input" name="file-upload" />
    );

    expect(container.querySelector('#file-input')).toBeInTheDocument();
    expect(
      container.querySelector('#file-input')?.hasAttribute('multiple')
    ).toBeFalsy();
  });

  it('should render a multi upload label', () => {
    render(<MultiUpload id="file-input" name="file-upload" label="my-label" />);

    expect(screen.getByLabelText('my-label')).toBeInTheDocument();
  });

  it('should render a multi upload that accepts .json only', () => {
    const { container } = render(
      <MultiUpload
        id="my-file-upload"
        name="file-json"
        acceptedFormats=".json"
      />
    );
    expect(container.querySelector('#my-file-upload')).toHaveAttribute(
      'accept',
      '.json'
    );
  });

  it('should render a multi upload that allow multiples', () => {
    const { container } = render(
      <MultiUpload id="my-file-upload" name="file-upload" multiple={true} />
    );

    expect(
      container.querySelector('#my-file-upload')?.hasAttribute('multiple')
    ).toBeTruthy();
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

  it('should render a multi upload with an error message', () => {
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

  it('should render a multi upload with an onChange handler', async () => {
    const file: File = new File(['some file'], 'isaac.png', {
      type: 'image/png',
    });
    const onChangeHandler = jest.fn();

    render(
      <MultiUpload
        name="file-upload"
        label="file-upload"
        id="my-file-uploader"
        onChange={onChangeHandler}
      />
    );

    const uploader: HTMLElement = screen.getByLabelText('file-upload');

    await waitFor(() =>
      fireEvent.change(uploader, { target: { files: [file] } })
    );

    expect(onChangeHandler).toHaveBeenCalled();
    expect(onChangeHandler).toHaveBeenCalledWith([file]);
  });

  it('should render a multi upload with an onChange handler but not call it', async () => {
    const onChangeHandler = jest.fn();

    render(
      <MultiUpload
        name="file-upload"
        label="file-upload"
        id="my-file-uploader"
        onChange={onChangeHandler}
      />
    );

    const uploader: HTMLElement = screen.getByLabelText('file-upload');

    await waitFor(() =>
      fireEvent.change(uploader, { target: { files: null } })
    );

    expect(onChangeHandler).not.toHaveBeenCalled();
  });

  it('should render a multi upload file data when file selected', async () => {
    const file: File = new File(['some file'], 'isaac.png', {
      type: 'image/png',
      lastModified: 1485903600000,
    });
    const onChangeHandler = jest.fn();

    render(
      <MultiUpload
        name="file-upload"
        label="file-upload"
        id="my-file-uploader"
        onChange={onChangeHandler}
        fileData={true}
      />
    );

    const uploader: HTMLElement = screen.getByLabelText('file-upload');

    await waitFor(() =>
      fireEvent.change(uploader, { target: { files: [file] } })
    );

    expect(screen.getByText('File Name: isaac.png')).toBeInTheDocument();
    expect(screen.getByText('File Type: image/png')).toBeInTheDocument();
    expect(screen.getByText('Last Modified: 1/31/2017')).toBeInTheDocument();
  });
});
