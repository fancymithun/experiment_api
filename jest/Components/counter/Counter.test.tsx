import {render,screen} from '@testing-library/react'
import { Counter } from './Counter'


describe('Counter',() => {
    test('renders correctly',() => {
        render(<Counter/>)

        const countElement = screen.getByRole('heading')
        expect(countElement).toBeInDocument()

        const incrementButton = screen.getByRole('button',{name : "Increment"})
        expect(incrementButton).toBeInDocument()
    })
})