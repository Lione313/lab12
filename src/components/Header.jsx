import { NavLink } from "react-router-dom";
function HeaderComponent() {


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">SeriesApp</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" to = "/"> Login  </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/categorias">Categorias</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/series">Series</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/inicio ">Inicio</NavLink>
                        </li>
                    </ul>
                    <div>
                        Bienvenido Dilan Gutierrez
                        <div className="text-end">
                            <a href="/">Salir</a>
                        </div> 
                    </div>
                </div>
            </div>
        </nav>
    )
}
  
export default HeaderComponent
