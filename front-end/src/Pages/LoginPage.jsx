import { Link } from "react-router-dom";
import { Submit } from "../Components/Submit";
import Icon from "../assets/ConsulTIIcone.png"
import { Input } from "../Components/Input";

export function LoginPage(){
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <nav className="w-full h-fit px-48 py-5 absolute top-0"><img src={Icon} alt="ConsulTI Logo" width="50px"/></nav>
            <form action="" className="flex flex-col items-center px-10 py-8 w-96 gap-3">
                <h1 className="text-5xl font-bold mb-10">Fazer Login</h1>
                <Input name="Email" type="email"/>
                <Input name="Senha" type="password"/>
                <Submit>Entrar</Submit>
                <Link to="/signUp" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">Não possui uma conta? Cadastre-se</Link>
            </form>
        </div>
    );
}