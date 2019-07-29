import React from 'react';
import memeOne from '../images/emily-memes-1.png';
import memeTwo from '../images/emily-memes-2.jpg';
import memeThree from '../images/emily-memes-3.png';
import memeFour from '../images/emily-memes-4.jpg';
import memeFive from '../images/emily-memes-5.png';
import memeSix from '../images/emily-memes-6.jpg';
import memeSeven from '../images/emily-memes-7.png';
import memeEight from '../images/emily-memes-8.png';
import memeNine from '../images/emily-memes-9.png';
import memeTen from '../images/emily-memes-10.png';
import memeEleven from '../images/emily-memes-11.png';
import memeTwelve from '../images/emily-memes-12.jpg';
import memeThirteen from '../images/emily-memes-13.jpg';
import memeFourteen from '../images/emily-memes-14.jpg';
import memeFifteen from '../images/emily-memes-15.jpg';
import memeSixteen from '../images/emily-memes-16.jpg';
import memeSeventeen from '../images/emily-memes-17.mp4';
import memeEighteen from '../images/emily-memes-18.jpg';
import memeNineteen from '../images/emily-memes-19.jpg';
import memeTwenty from '../images/emily-memes-20.jpg';
import memeTwentyOne from '../images/emily-memes-21.mp4';
import memeTwentyTwo from '../images/emily-memes-22.jpg';
import memeTwentyThree from '../images/emily-memes-23.png';
import memeTwentyFour from '../images/emily-memes-24.jpg';

const TenthPage = () => {
	return (
		<div className="page">
			<div>
				<h1>MEMES AND OLD PHOTOS</h1>
				<i>
					<h6>Headphone Warning!!! The videos are loud!!!</h6>
				</i>
			</div>
			<div className="memesContainer">
				<img className="image" alt="memeImages" src={memeOne} />
				<img className="image" alt="memeImages" src={memeFive} />
				<img className="image" alt="memeImages" src={memeSix} />
				<img className="image" alt="memeImages" src={memeTwo} />
				<img className="image" alt="memeImages" src={memeThree} />
				<img className="image" alt="memeImages" src={memeFour} />
				<img className="image" alt="memeImages" src={memeSeven} />
				<img className="image" alt="memeImages" src={memeEight} />
				<img className="image" alt="memeImages" src={memeNine} />
				<img className="image" alt="memeImages" src={memeEighteen} />
				<img className="image" alt="memeImages" src={memeTwentyFour} />
				<img className="image" alt="memeImages" src={memeEleven} />
				<img className="image" alt="memeImages" src={memeTen} />
				<img className="image" alt="memeImages" src={memeTwelve} />
				<img className="image" alt="memeImages" src={memeThirteen} />
				<img className="image" alt="memeImages" src={memeFourteen} />
				<img className="image" alt="memeImages" src={memeFifteen} />
				<img className="image" alt="memeImages" src={memeSixteen} />
				<video className="image" controls>
					<source src={memeSeventeen} type="video/mp4" />
					Your browser does not support HTML5 video
					<p> Headphone user warning: LOUD CONTENT ABOVE</p>
				</video>

				<img className="image" alt="memeImages" src={memeNineteen} />
				<img className="image" alt="memeImages" src={memeTwenty} />
				<video className="image" controls>
					<p> Headphone user warning: LOUD CONTENT BELOW</p>
					<source src={memeTwentyOne} type="video/mp4" />
					Your browser does not support HTML5 video
				</video>
				<img className="image" alt="memeImages" src={memeTwentyTwo} />
				<img className="image" alt="memeImages" src={memeTwentyThree} />
			</div>
			<p>I hope you've enjoyed everything so far, but I have one last little present for you.</p>
			<p>Head over to the next page to see the newest member of KDA!</p>
		</div>
	);
};

export default TenthPage;
