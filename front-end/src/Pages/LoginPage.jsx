import { Link, useNavigate } from "react-router-dom";
import { Submit } from "../Components/Submit";
import Icon from "../assets/ConsulTIIcone.png";
import { Input } from "../Components/Input";
import { useEffect, useState, useRef } from "react";
import { ErrorMessage } from "../Components/ErrorMessage";

export function LoginPage() {
  const [userData, setUserData] = useState();
  const [errorState, setErrorState] = useState();
  const [loadingState, setLoadingState] = useState(false);
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
        setLoadingState(false);
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
    setLoadingState(true);
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-3">
      <nav className="hidden sm:block w-full h-fit px-48 py-5 absolute top-0">
        <img src={Icon} alt="ConsulTI Logo" width="50px" />
      </nav>
      <form onSubmit={handleSubmit} className="flex flex-col items-center md:px-10 py-8 max-w-96 sm:w-96 gap-3">
        {errorState && <ErrorMessage message={errorState.message} />}
        <h1 className="text-5xl font-bold mb-10 text-center">Fazer Login</h1>
        <Input placeholder="Email" name="email" type="email" isFirst={true} loading={loadingState} />
        <Input placeholder="Senha" name="password" type="password" loading={loadingState} />
        <Submit loading={loadingState}>{loadingState ? "Enviando..." : "Entrar"}</Submit>
        <Link to="/signUp" className="text-sm mt-20 text-stone-500 hover:underline outline-none focus:ring-2">
          Não possui uma conta? Cadastre-se
        </Link>
      </form>
    </div>
  );
}
