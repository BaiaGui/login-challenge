import { Link } from "react-router-dom";
import { Submit } from "../Components/Submit";
import Icon from "../assets/ConsulTIIcone.png";
import { Input } from "../Components/Input";
import { useEffect, useState } from "react";

export function SignUpPage() {
  const [userData, setUserData] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setUserData(formJson);
  }

  useEffect(() => {
    async function registerUser() {
      const response = await fetch("https://login-challenge-back-end.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
    registerUser();
  }, [userData]);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <nav className="w-full h-fit px-48 py-5 absolute top-0">
        <img src={Icon} alt="ConsulTI Logo" width="50px" />
      </nav>

      <form onSubmit={handleSubmit} className="flex flex-col items-center px-10 py-8 w-fit gap-3">
        <h1 className="text-5xl font-bold mb-10">Fazer Cadastro</h1>
        <Input placeholder="Usuário" name="username" type="text" isFirst={true} />
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Senha" name="password" type="password" />
        <Submit>Enviar</Submit>
        <Link to="/" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">
          Já possui uma conta? Fazer login
        </Link>
      </form>
    </div>
  );
}
