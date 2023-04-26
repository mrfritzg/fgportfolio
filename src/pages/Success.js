import { Link } from "react-router-dom"
export default function Success() {
    return (
        <>
            <h1 className="text-center m-4">Thank you! Your Message was sucessfully sent!</h1>
            <h2>Please return to the <Link to="/">home page</Link></h2>            
        </>
    )
}