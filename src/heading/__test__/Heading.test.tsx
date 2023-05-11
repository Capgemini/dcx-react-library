import React from 'react';
import { Heading, HeadingLevel } from '../Heading';
import {
    render,
    screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';


describe('Heading', () => {
    it('should render', () => {
        const headingLevels: HeadingLevel[] = '123456'.split('') as HeadingLevel[];
        headingLevels.forEach(level => {
            const { getByText, container } = render(<Heading id="first" className="heading" label={`This is a Level ${level} Heading`} level={`${level}`} />);
            const heading = getByText(`This is a Level ${level} Heading`);
            expect(heading).toBeTruthy();

            expect(container.querySelector(`h${level}`)).toBeInTheDocument();


            expect(container.querySelector(`.dcx-heading-${level}`)).toBeInTheDocument();
        });
    });

    it('Renders the given content in the header.', () => {
        render(<Heading id="first" className="heading" label="This is a Level 1 Heading" level="1" />);
        expect(screen.getByText('This is a Level 1 Heading')).toBeInTheDocument();
    });
});