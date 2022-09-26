import React from 'react';
import bannerImg from '../../images/Group 12.jpg';

const Bannar = () => {
	return (
		<div>
			<div className="container py-5">
				<div className="row d-flex align-items-center">
					<div className="col-md-6 text-align-center">
						<p className="text-warning">Sale up to 70% off</p>
						<br />
						<h1 className="fs-1 fw-bold">New Collection For Fall</h1>
						<p>Discover all the new arrivals of ready-to-wear collection.</p>
						<br />
						<button className="btn btn-warning">SHOP NOW</button>
					</div>
					<div className="col-md-6">
						<img className="img-fluid" src={bannerImg} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bannar;
