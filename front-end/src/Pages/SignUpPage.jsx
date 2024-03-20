import { Link } from "react-router-dom";
import { Submit } from "../Components/Submit";
import Icon from "../assets/ConsulTIIcone.png"

export function SignUpPage(){

    function handleSubmit(e){
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        // const formJson = Object.fromEntries(formData.entries());
        // console.log(formJson);
    }






    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <nav className="w-full h-fit px-48 py-5 absolute top-0"><img src={Icon} alt="ConsulTI Logo" width="50px"/></nav>
           
            <form onSubmit={handleSubmit} className="flex flex-col items-center px-10 py-8 w-fit gap-3">
                <h1 className="text-5xl font-bold mb-10">Fazer Cadastro</h1>
                <div  className="w-full max-w-72">
                    <label htmlFor="username" className="text-sm text-stone-500">Username</label>
                    <input autoFocus required type="text" id="username" name="username" placeholder="Username" className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
                </div>
                <div  className="w-full max-w-72">
                    <label htmlFor="email" className="text-sm text-stone-500">Email</label>
                    <input required type="email" id="email" name="email" placeholder="Email" className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
                </div>
               <div className="w-full max-w-72">
                    <label htmlFor="password" className="text-sm text-stone-500">Password</label>
                    <input required type="password" id="password" name="password" placeholder="Password"  className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
               </div>
                <Submit>Enviar</Submit>
                <Link to="/" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">Já possui uma conta? Fazer login</Link>
            </form>
        </div>
    );
}

