import { Link, useNavigate } from "react-router-dom";
import { Submit } from "../Components/Submit";
import Icon from "../assets/ConsulTIIcone.png";
import { Input } from "../Components/Input";
import { useEffect, useState, useRef } from "react";
import { ErrorPopUp } from "../Components/ErrorPopUp";

export function LoginPage() {
  const [userData, setUserData] = useState();
  const [errorState, setErrorState] = useState();
  const didFirstPaint = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrorState();
    async function registerUser() {
      const response = await fetch("https://login-challenge-back-end.onrender.com/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const jsonResponse = await response.json();
      if (response.status != 200) {
        setErrorState(jsonResponse);
      } else {
        console.log(jsonResponse);
        return navigate("/dashboard");
      }
    }

    if (didFirstPaint.current) registerUser();
    else didFirstPaint.current = true;
  }, [userData]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setUserData(formJson);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <nav className="w-full h-fit px-48 py-5 absolute top-0">
        <img src={Icon} alt="ConsulTI Logo" width="50px" />
      </nav>
      <form onSubmit={handleSubmit} className="flex flex-col items-center px-10 py-8 w-96 gap-3">
        {errorState && <ErrorPopUp>{errorState.message}</ErrorPopUp>}
        <h1 className="text-5xl font-bold mb-10">Fazer Login</h1>
        <Input placeholder="Email" name="email" type="email" isFirst={true} />
        <Input placeholder="Senha" name="password" type="password" />
        <Submit>Entrar</Submit>
        <Link to="/signUp" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">
          Não possui uma conta? Cadastre-se
        </Link>
      </form>
    </div>
  );
}
