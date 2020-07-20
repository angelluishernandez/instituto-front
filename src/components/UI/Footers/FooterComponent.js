import React from "react";
import FooterAdresses from "./FooterAdresses";

const FooterComponent = () => {
	return (
		<nav class="navbar navbar-light bg-dark navbar-expand-lg">
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto d-flex justify-content-between">
					<li className="nav-item">
						<a
							href="https://aulavirtual33.educa.madrid.org/cc.primerodemayo.madrid/login/index.php"
							target="_blank"
						>
							<img
								src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/Aula_virtual.jpg"
								alt="Aula virtual"
							/>
						</a>
					</li>
					<li className="nav-item">
						<a href="http://www.madridexcelente.com/" target="_blank">
							<img
								src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/logo_madrid_excelente.jpg"
								alt="excenlente"
							/>
						</a>
					</li>

					<li className="nav-item">
						<a href="http://reau07.blog.com.es/" target="_blank">
							<img
								src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/escuelas_unesco.jpg"
								alt="unesco"
							/>
						</a>
					</li>
					<li>
						<a
							href="http://www.oapee.es/oapee/inicio/pap/erasmus.html"
							target="_blank"
						>
							<img
								src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/Erasmus.jpg"
								alt="Erasmus"
							/>
						</a>
					</li>
					<li>
						<a
							href="https://web2.alexiaedu.com/ACWeb/LogOn.aspx?key=W%2bUzduD5iR4%3d"
							target="_blank"
						>
							<img
								src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/logo_alexia.jpg"
								alt="Alexia"
							/>
						</a>
					</li>
					<li>
						<a href="https://webmail.1and1.es/" target="_blank">
							<img
								src="http://www.fundacionjosemariadellanos.es/images/imagenes/Logos/serviciospropios.png"
								alt="servicios-propios"
							/>
						</a>
					</li>
				</ul>
			</div>
			<div>
				<FooterAdresses />
			</div>
		</nav>
	);
};

export default FooterComponent;
