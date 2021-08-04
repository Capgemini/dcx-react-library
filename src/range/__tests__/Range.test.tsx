import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Range } from '../Range';

beforeEach(() => {
    jest.useFakeTimers();
});

afterEach(() => {
    jest.clearAllTimers();
});

describe('Range', () => {
    it('should render', () => {
        render(<Range/>);
        expect(screen.getByLabelText('input-slider')).toBeInTheDocument();
    });

    it('should render disable range', () => {
        render(<Range disabled={true}/>);
        const range: any = screen.getByLabelText('input-slider');
        expect(range.disabled).toBeTruthy();
    });

    it('should render prefix image', () => {render(
        <Range
            prefix={
                <img aria-label="prefixImg" alt="" src="" />
            }/>
    );
        expect(screen.getByLabelText('prefixImg')).toBeInTheDocument();
    });

    it('should render suffix image', () => {
        render(
            <Range
                suffix={
                    <img aria-label="suffixImg" alt="" src="" />
                } />
        );
        expect(screen.getByLabelText('suffixImg')).toBeInTheDocument();
    });

    it('should accept className as attribute', () => {
        render(<Range inputClass="test" />);
        const range: any = screen.getByRole('slider');
        expect(range.getAttribute('class')).toBe('test');
    });

    it('should call onChange function', () => {
        const handleChange = jest.fn();
        render(<Range value={50} onChange={handleChange} />)
        fireEvent.change(screen.getByRole('slider'), { target: { value: '80' }})
        expect(handleChange).toHaveBeenCalled();
    });

});
