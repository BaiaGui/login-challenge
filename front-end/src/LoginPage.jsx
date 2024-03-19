import Icon from "./assets/ConsulTIIcone.png"

export function LoginPage(){
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <nav className="w-full h-fit px-48 py-5 absolute top-0"><img src={Icon} alt="ConsulTI Logo" width="50px"/></nav>
            <form action="" className="flex flex-col items-center px-10 py-8 w-96 gap-5">
                <h1 className="text-5xl font-bold mb-10">Fazer Login</h1>
                <div  className="w-full">
                    <label htmlFor="Email" className="text-sm text-stone-500">Email</label>
                    <input autoFocus type="email" id="email" placeholder="Email" className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
                </div>
               <div className="w-full">
                    <label htmlFor="password" className="text-sm text-stone-500">Password</label>
                    <input type="password" id="password" placeholder="Password"  className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
               </div>
               <input type="submit" value="Submit" className="p-2 w-full bg-blue-600 text-white font-bold cursor-pointer rounded-md" />
                <a href="#" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">Não possui uma conta? Cadastre-se</a>
            </form>
        </div>
    );
}