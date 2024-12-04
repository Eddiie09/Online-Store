const Layout = ({ children }) => {
  return (
      <div className="flex flex-col items-center pt-16 pb-10 bg-gray-100 border border-gray-300 rounded-lg shadow-lg max-w-4xl mx-auto">
          {/* Espacio para el navbar */}
          {children}
      </div>
  )
}

export default Layout;

