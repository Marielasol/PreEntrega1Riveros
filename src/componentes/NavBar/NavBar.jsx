import CartWidget from '../CartWidget/CartWidget';
import '../../assets/LogoCosmeticasf.png';

const NavBar = () => {
    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <img src="./../../assets/LogoCosmeticasf.png" alt="Logo Cosmetica"/>
                <h1 className="navbar-brand" href="#">Cosmetica integral</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <li className="nav-link active" aria-current="page" href="#">Productos</li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-link" href="#">Capacitacion</li>
                        </li>
                        <li className="nav-item">
                            <li className="nav-link" href="#">Contacto</li>
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>

    )
}

export default NavBar