export default function Home() {
  return (
    <main className="w-box h-box ">
      <div className="grid grid-cols-columns3 w-full h-full">

        <section className="bg-indigo-800 rounded-l-2xl flex flex-col text-white justify-center items-center">
          <h2 className="text-2xl">Bem Vindo</h2>
          <p className="text-xs mt-1 mb-3">Já possui uma conta?</p>
          <button className="px-10 py-1 border-2 border-white rounded-2xl">Login</button>
        </section>

        <section className="bg-white rounded-r-2xl flex flex-col text-indigo-800 justify-center items-center">
          <h2 className="text-3xl">Criar Conta</h2>
          <input className="outline-none mt-5 bg-gray-300 rounded-lg py-2 px-4 text-sm" placeholder="Nome" type="text" />
          <input className="outline-none mt-5 bg-gray-300 rounded-lg py-2 px-4 text-sm" placeholder="Sobrenome" type="text" />
          <input className="outline-none mt-5 bg-gray-300 rounded-lg py-2 px-4 text-sm" placeholder="Email" type="email" />
          <input className="outline-none mt-5 bg-gray-300 rounded-lg py-2 px-4 text-sm" placeholder="Senha" type="password" />
          <button className="bg-indigo-800 text-white rounded-2xl px-10 py-2 text-base mt-3">Registrar</button>
        </section>

      </div>
    </main>
  )
}
