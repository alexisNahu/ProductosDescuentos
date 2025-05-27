import { Link } from "react-router-dom";
const Welcome = () => {
  return (
    <Link
        to="/steffany-melgarejo"
        className="px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Ir a la pagina de Steffany
      </Link>
  )
}

export default Welcome