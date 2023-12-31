import {render, screen} from '@testing-library/react'
import { Greet } from './Greet'

describe('Greet', () => {

    test('renders correctly',() => {
        render(<Greet/>)
        const textElement = screen.getByText('Hello Guest')
        expect(textElement).toBeInDocument()
    })

    test('renders a name',() => {
        render(<Greet name='Mithun'/>)
        const textElement = screen.getByText('Hello Mithun')
        expect(textElement).toBeInDocument()
    })
})