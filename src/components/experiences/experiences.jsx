import React from 'react'
import './experiences.css'
import BSOC1 from '../../assets/bsoc1.jpg'
import UBS1 from '../../assets/ubs1.jpg'
import CIRCLES2 from '../../assets/circles2.PNG'

function Experiences() {
	return (
		<section id='experiences'>
			<h2>My Experiences</h2>
			<h3>~ some things i've done recently ~</h3>

			<div className="container experience__container">
				<div className='experience__content'>
					<div className="content">
						<h4>UBS</h4>
						<h2>Tech Cadet</h2>
						<h5>July 2021 - Current</h5>
					</div>
					<div className="pictures fade">
						<img src={UBS1} alt="ubs1" />
					</div>
				</div>

				<div className='experience__content'>
					<div className="content">
						<h4>UNSW Business Society</h4>
						<h2>Education Director</h2>
						<h5>November 2021 - Current</h5>
					</div>
					<div className="pictures fade">
						<img src={BSOC1} alt="bsoc1" />
					</div>
				</div>

				<div className='experience__content'>
					<div className="content">
						<h4>UNSW CSESoc</h4>
						<h2>Circles Frontend</h2>
						<h5>February 2021 - November 2021</h5>
					</div>
					<div className="pictures fade">
						<img src={CIRCLES2} alt="circles2" />
					</div>
				</div>

				<div className='experience__content'>
					<h4>Self-Employed</h4>
					<h2>3U & 4U Math Tutor</h2>
					<h5>February 2019 - Current</h5>
				</div>
			</div>
		</section>
	)
}

export default Experiences