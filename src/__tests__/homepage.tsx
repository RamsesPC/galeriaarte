import {render, screen} from '@testing-library/react';
import { it } from 'node:test';
import HomePage from '../app/page';


it("render home page", () => {
    render(<HomePage/>)
    expect(screen.getByText("Obras")).toBeInTheDocument()
});