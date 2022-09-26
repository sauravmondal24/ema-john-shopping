import React from 'react';
import logo from '../../images/Logo.svg';

const Header = () => {
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-dark">
				<div class="container">
					<a class="navbar-brand text-light" href="#">
						<img src={logo} alt="" />
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
						<ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
							<li class="nav-item">
								<a
									class="nav-link active text-white px-2"
									aria-current="page"
									href="#"
								>
									Order
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white px-2" href="#">
									Order Review
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link text-white px-2" href="#">
									Manage Inventory
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link  text-whites px-2" href="#">
									Login
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Header;
