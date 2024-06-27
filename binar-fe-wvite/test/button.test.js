import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import Button from '../src/components/button'

test('Button rendered correctlu and responds to click event', () => {
    const label = 'Button to Click'
    const handleClick = jest.fn();
    render(<Button label={label} onClick={handleClick} />)

    const button = screen.getByText(label)
    expect(button).toBeInTheDocument()

    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)

})