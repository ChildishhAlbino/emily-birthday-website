import React from 'react';
import moment from 'moment';
import './timer.scss';
import { Context } from './layout';
class CountdownTimer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			countdownDate: props.countdownDate,
			...this.calcDiff(moment(), props.countdownDate)
		};
	}

	componentDidMount() {
		this.setState({ timer: setInterval(this.tick.bind(this), 1000) });
	}

	componentWillUnmount() {
		clearInterval(this.state.timer);
	}

	calcDiff(now, countdownDate) {
		const rawDiff = countdownDate.diff(now, 'seconds');
		const diff = { days: 0, hours: 0, minutes: 0, seconds: 0 };
		diff.days = Math.floor(rawDiff / (60 * 60 * 24));
		diff.hours = Math.floor((rawDiff % (60 * 60 * 24)) / (60 * 60));
		diff.minutes = Math.floor((rawDiff % (60 * 60)) / 60);
		diff.seconds = Math.floor(rawDiff % 60);
		return { diff: diff, rawDiff: rawDiff };
	}

	tick() {
		const diff = this.calcDiff(moment(), this.state.countdownDate);
		this.setState({ ...diff });
	}

	suffix(value, singular) {
		if (value === 1) {
			return `${value} ${singular}`;
		} else {
			return `${value} ${singular + 's'}`;
		}
	}

	render() {
		return (
			<Context.Consumer>
				{(context) => {
					if (this.state.rawDiff === 0) {
						context.state.setCountingDown(false);
					}
					const days = this.suffix(this.state.diff.days, 'day');
					const hours = this.suffix(this.state.diff.hours, 'hour');
					const minutes = this.suffix(this.state.diff.minutes, 'minute');
					const seconds = this.suffix(this.state.diff.seconds, 'second');
					return (
						<div className="timer">
							<h1>{days},</h1>
							<h1>{hours},</h1>
							<h1>{minutes},</h1>
							<h1>{seconds}.</h1>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

export default CountdownTimer;
