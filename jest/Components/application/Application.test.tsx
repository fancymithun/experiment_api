import {render,screen} from '@testing-library/react'
import { Application } from './Application'

describe("Application", () => {
    test("renders", () => {
        render(<Application/>)

        const pageHeading = screen.getByRole('heading',{level:1})
        expect(pageHeading).toBeInDocument()

        const sectionHeading = screen.getByRole('heading',{level:2})
        expect(sectionHeading).toBeInDocument()

        const bioElement = screen.getByRole('textbox',{name : 'Bio'})
        expect(bioElement).toBeInDocument()

        const checkboxElement = screen.getByRole('checkbox')
        expect(checkboxElement).toBeInDocument()

        const comboboxElement = screen.getByRole('combobox')
        expect(comboboxElement).toBeInDocument()

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInDocument()

        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInDocument()

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInDocument()
    })
})