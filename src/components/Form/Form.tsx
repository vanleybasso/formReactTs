import { useForms } from "../../hooks/useForms";
import { FormSchema } from "../../schemas/formSchema";
import { useState } from "react";

export const Form = () => {
  const { register, handleSubmit, errors } = useForms();
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = (data: FormSchema) => {
    console.log(data);
    // Aqui você pode realizar a lógica do cadastro, como uma chamada à API ou outro processo.
    setFeedbackMessage("Cadastro realizado com sucesso!");
    
    // Limpar a mensagem após alguns segundos
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 5000); // Mensagem desaparece após 5 segundos
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-96 bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-200"
    >
      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Nome:
        </label>
        <input
          type="text"
          id="name"
          placeholder="Digite seu nome"
          {...register("name")}
          className="h-10 pl-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        />
        {errors.name && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.name.message}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="lastname" className="text-sm font-medium text-gray-700">
          Sobrenome:
        </label>
        <input
          type="text"
          id="lastname"
          placeholder="Digite seu sobrenome"
          {...register("lastname")}
          className="h-10 pl-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        />
        {errors.lastname && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.lastname.message}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="gender" className="text-sm font-medium text-gray-700">
          Gênero:
        </label>
        <select
          id="gender"
          {...register("gender")}
          className="h-10 pl-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        >
          <option value="select">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
        {errors.gender && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.gender.message}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
          className="h-10 pl-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        />
        {errors.email && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.email.message}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Senha:
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Digite sua senha"
            {...register("password")}
            className="h-10 pl-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white w-full"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>
        {errors.password && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.password.message}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <label
          htmlFor="confirmpassword"
          className="text-sm font-medium text-gray-700"
        >
          Confirme a Senha:
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmpassword"
            placeholder="Repita sua senha"
            {...register("confirmpassword")}
            className="h-10 pl-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white w-full"
          />
          <button
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>
        {errors.confirmpassword && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.confirmpassword.message}
          </small>
        )}
      </div>

      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="agree"
            {...register("agree")}
            className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-blue-500"
          />
          <label htmlFor="agree" className="text-sm text-gray-700">
            Concordo com os termos.
          </label>
        </div>
        {errors.agree && (
          <small className="text-red-500 text-sm italic mt-1">
            {errors.agree.message}
          </small>
        )}
      </div>

      <button
        type="submit"
        className="w-full h-11 bg-blue-500 text-white font-semibold rounded-md mt-4 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
      >
        Cadastrar
      </button>

      {/* Exibe a mensagem de feedback */}
      {feedbackMessage && (
        <div className="mt-4 p-4 bg-green-100 text-green-700 text-sm font-semibold rounded-md">
          {feedbackMessage}
        </div>
      )}
    </form>
  );
};
