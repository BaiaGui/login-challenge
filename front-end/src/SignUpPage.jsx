import Icon from "./assets/ConsulTIIcone.png"

export function SignUpPage(){
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <nav className="w-full h-fit px-48 py-5 absolute top-0"><img src={Icon} alt="ConsulTI Logo" width="50px"/></nav>
            <form action="" className="flex flex-col items-center px-10 py-8 w-fit gap-3">
                <h1 className="text-5xl font-bold mb-10">Fazer Cadastro</h1>
                <div  className="w-full">
                    <label htmlFor="Email" className="text-sm text-stone-500">Username</label>
                    <input autoFocus type="email" id="username" placeholder="Username" className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
                </div>
                <div  className="w-full">
                    <label htmlFor="Email" className="text-sm text-stone-500">Email</label>
                    <input type="email" id="email" placeholder="Email" className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
                </div>
               <div className="w-full">
                    <label htmlFor="password" className="text-sm text-stone-500">Password</label>
                    <input type="password" id="password" placeholder="Password"  className="bg-transparent w-full p-2 border border-stone-300 outline-none rounded-md focus:ring-2"/>
               </div>
               <input type="submit" value="Submit" className="p-2 w-full mt-3 bg-blue-600 text-white font-bold cursor-pointer rounded-md" />
                <a href="#" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">Já possui uma conta? Fazer login</a>
            </form>
        </div>
    );
}