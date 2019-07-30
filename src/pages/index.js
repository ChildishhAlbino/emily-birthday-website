import React from 'react';
import birthdayImage from '../images/birthday-page-gif.gif';
const IndexPage = () => {
	return (
		<div className="page">
			<h1>
				<i>Happy 20th Birthday Emily!!!!</i>
			</h1>
			<p>
				It's not every day one of your all-time best friends turns 20! You've been an amazing friend and someone
				I've come to truly respect.
			</p>
			<p>
				Our friendship has lasted a long time; through good and bad, and I'm so glad I've been allowed to see
				you grow as a person for many years, and I hope to continue to do so for so many more to come.
			</p>
			<p>
				A little birdie told me that you're a big fan of Eevee and the zodiac so I thought I'd combine the two
				and produce the "Eeviac"
			</p>
			<p>
				The Eeviac works on the principle that all beings contain elements from every sign, rather than
				pertaining to one or a few as with other Zodiac systems. As the inventor of this system, I believe I'm
				the only person qualified to present you with your very first Eeviac Horoscope.
			</p>
			<p>
				So click around and enjoy! Right is forwards, left is backwards. (There might be a special surprise for
				you on the last slide)
			</p>

			<img className="image" src={birthdayImage} alt="Birthday Pikachu and Togepi Gif." />
		</div>
	);
};

export default IndexPage;
