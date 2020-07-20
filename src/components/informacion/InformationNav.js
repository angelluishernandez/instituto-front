import React from "react";

const InformationNav = () => {
	// Call to get basic information
	// Enlaces
	// Proyecto educativo (pdf link) // Misión y valores(text based component) // Plan de convivencia(pdf link) // Reglamento de régimen interno(pdf link)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<a className="nav-link" target="_blank" href="">
							Proyecto educativo (pdf)
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" target="_blank" href="">
							Misión y valores
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" target="_blank" href="">
							Plan de convivencia (pdf)
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" target="_blank" href="">
							Reglamento de régimen interno (pdf)
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default InformationNav;
