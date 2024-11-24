import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  let navigate = useNavigate()

  return (
    <div className="mx-auto my-28 p-8 max-w-[370px]">
      <h1 className="text-3xl text-center text-[#58bc82] font-semibold">
        Inicio de Sesion
      </h1>
      <form className="flex flex-col items-center gap-4 w-full max-w-[300px]" onSubmit={handleSubmit}>
        <span className="w-full flex flex-col gap-2">
          <label for="user" className="self-start text-[#58bc82] font-semibold">
            Usuario
          </label>
          <input
            type="text"
            name="user"
            id="user"
            className="w-full flex items-center gap-2 bg-[#9c9c9c60] px-3 py-4 rounded-lg border-[none]"
          />
        </span>
        <span className="w-full flex flex-col gap-2">
          <label
            for="password"
            className="self-start text-[#58bc82] font-semibold"
          >
            Contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full flex items-center gap-2 bg-[#9c9c9c60] px-3 py-4 rounded-lg border-[none]"
          />
        </span>
        <input
          className="w-full flex items-center gap-2 bg-[#707070] text-[#efefef] cursor-pointer transition-all duration-300 font-semibold text-[0.9rem] px-3 py-4 rounded-[3rem] border-[none] hover:bg-[#58bc82] hover:text-[#707070]"
          type="submit"
          value="Iniciar Sesion"
          onClick={() => navigate("/")}
        />
        <span className="no-underline text-[#707070]">
          ¿No tienes cuenta?{" "}
          <Link to={"/register"} className="text-[#58bc82]">
            Registrate
          </Link>
        </span>
      </form>
    </div>
  );
}
