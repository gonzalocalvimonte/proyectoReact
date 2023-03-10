import './styles/Footer.css'

function Footer() {
  return (
    <footer id="footer">
    <section className="categorias">
        <nav>
            <h6>Deportes acuáticos</h6>
            <ul>
                <li><a href="/">Chalecos</a></li>
                <li><a href="/">Juegos de arrastre</a></li>
                <li><a href="/">Accesorios</a></li>
            </ul>
        </nav>
        <nav>
            <h6>Iluminación</h6>
            <ul>
                <li><a href="/">Linternas</a></li>
                <li><a href="/">Luces</a></li>
                <li><a href="/">Faros</a></li>
            </ul>
        </nav>
        <nav>
            <h6>Fondeo y amarre</h6>
            <ul>
                <li><a href="/">Anclas</a></li>
                <li><a href="/">Cabos</a></li>
                <li><a href="/">Boyas</a></li>
            </ul>
        </nav>
        <nav>
            <h6>Cocina</h6>
            <ul>
                <li><a href="/">Conservadoras</a></li>
                <li><a href="/">Frigobares</a></li>
                <li><a href="/">Anafes</a></li>
            </ul>
        </nav>
        <span id="logo-whatsapp">
            <a href="/" target="_blank">
                <img src="http://localhost:3000/logowppsinfondo.webp" alt="logowsp" className="logo-editar"/>
            </a>
        </span>
    </section>
    <section className="detalles-oxigeno">
        <p>Copyright © 2000-2022 Oxigeno S.A</p>
        <p>Calle falsa 123,CP 3000,Albuquerque,CABA</p>
    </section>
    </footer>
);
}  

export default Footer;