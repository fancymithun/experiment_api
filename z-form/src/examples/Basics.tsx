import {z} from 'zod'

function Basics(){
    const formSchema = z.object({
        username: z.string({
            required_error: "Username is required"
        }).min(2,{
            message: "Username must be atleast 2 characters"
        }),

        password: z.string({
            required_error: "Password is required"
        }).describe("Your secure password").min(8, {
            message: "Password must be at least 8 characters"
        }),

        favoriteNumber: z.coerce.number({
            invalid_type_error: "Favorite number must be a number"
        }).min(1,{
            message: "Favorite number must be atleast 1."
        }).max(10,{
            message: "Favorite number must be atmost 10."
        }).default(1).optional()
    })

    return (
        <>

        </>
    )
}

export default Basics