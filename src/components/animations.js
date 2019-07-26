const timeout = 550;
const slideLeft = {
	title: 'slideLeft',
	entering: {
		position: `absolute`,
		left: -2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	entered: {
		position: `absolute`,
		left: 0,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	exiting: {
		position: `absolute`,
		left: 2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	}
};

const slideRight = {
	title: 'slideRight',
	entering: {
		position: `absolute`,
		left: 2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	entered: {
		position: `absolute`,
		left: 0,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	},
	exiting: {
		position: `absolute`,
		left: -2000,
		transition: `left ${timeout}ms ease-in-out`,
		width: '100vw'
	}
};

export { slideLeft, slideRight };
