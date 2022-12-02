import { useAuth } from "../../context/AuthProvider/useAuth"

                                        // forma curta de criar uma interface in-line
export const ProtectedLayout = ( {children}: {children:JSX.Element}) =>{
    
    const auth = useAuth()

    if (!auth.email){
        return (
            <h1>Você não tem acesso</h1>
        )
    }
    return children;

}