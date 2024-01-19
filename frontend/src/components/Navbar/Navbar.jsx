import { useDispatch } from "react-redux";
import { changeForm } from "../../redux/actions";

export const Navbar = () => {
    const dispatch = useDispatch();

    return (
        <>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="text-white font-bold text-lg">Logo</div>
                        <div className="space-x-4">
                            <a
                                href="#"
                                className="text-white"
                                onClick={() => dispatch(changeForm("signIn"))}
                            >Sign In</a>
                            <a
                                href="#"
                                className="text-white"
                                onClick={() => dispatch(changeForm("signUp"))}
                            >Sign Up</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}