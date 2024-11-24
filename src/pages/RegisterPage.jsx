import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  let navigate = useNavigate()

  return (
    <div className="mx-auto my-16 p-8 max-w-[370px]">
      <h1 className="text-3xl text-center text-[#58bc82] font-semibold">
        Registro
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
        <span className="w-full flex flex-col gap-2">
          <label
            for="password"
            className="self-start text-[#58bc82] font-semibold"
          >
            Rol
          </label>
          <select className="w-full text-[#58bc82] flex items-center gap-2 bg-[#9c9c9c60] px-3 py-4 rounded-lg border-[none]">
            <option value="Usuario" className="self-start text-[#58bc82] font-semibold">Usuario</option>
            <option value="Almacenista" className="self-start text-[#58bc82] font-semibold">Almacenista</option>
            <option value="Admin" className="self-start text-[#58bc82] font-semibold">Admin</option>
          </select>
        </span>
        <input
          className="w-full flex items-center gap-2 bg-[#707070] text-[#efefef] cursor-pointer transition-all duration-300 font-semibold text-[0.9rem] px-3 py-4 rounded-[3rem] border-[none] hover:bg-[#58bc82] hover:text-[#707070]"
          type="submit"
          value="Registrarse"
          onClick={() => navigate("/")}
        />
        <span className="no-underline text-[#707070]">
          ¿Ya tienes cuenta?{" "}
          <Link to={"/login"} className="text-[#58bc82]">
            Inicia Sesion
          </Link>
        </span>
      </form>
    </div>
  );
}
