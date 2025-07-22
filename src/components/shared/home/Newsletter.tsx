

export const Newsletter = () => {
  return (
    <div className="relative bg-gray-500 text-white py-20">
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-70 h-full"
                style={{ backgroundImage: 'url(/img/background-newsletter.webp)' }} /> 

      {/* Content */}
      <div className="container z-10 relative p-5 md:p-0">
        <div className="w-full text-black bg-white p-8 space-x-5 md:w-[50%] lg:w-[40%]">
            <p className="text-xs uppercase font-semibold">
              subcribete a nuestro newsletter y recibe las últimas novedades
            </p>
            <p className="text-xs font-medium w-[80%] leading-5">
              Recibe un 10% de descuento en tu primera compra
            </p>
            <form className="flex flex-col gap-5 x1:flex-row">
              <input
                type="email" className="border border-slate-200 focus:outline-none rounded-full py-3 px-4 w-full text-xs
                font-medium"
                placeholder="Ingresa tu correo electrónico"
              />
              <button
                type="submit"
                className="bg-black text-white font-semibold rounded-full uppercase tracking-wider py-3 text-xs xl:px-5"
              >
                Subscribirse
              </button>
            </form>
        </div>
      </div>
    </div>
  )
}
