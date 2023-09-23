import { useEffect, useState } from 'react';
import './App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceFive, faPause } from '@fortawesome/free-solid-svg-icons';

function App() {
	const [textObj, setTextObj] = useState({ id: 0, advice: 'Press the dice to get the advice rolling' });

	const handleOnClick = async () => {
		const newAdvice = await fetchData();
		setTextObj({ ...textObj, id: newAdvice.slip.id, advice: newAdvice.slip.advice });
	};

	const fetchData = async () => {
		const res = await fetch('https://api.adviceslip.com/advice');
		return await res.json();
	};

	useEffect(() => {}, [textObj]);

	return (
		<div className='container'>
			<p className='advice-num'>ADVICE # {textObj.id}</p>
			<p className='advice'>"{textObj.advice}"</p>
			<div className='divider'>
				<hr />
				<FontAwesomeIcon className='pause' icon={faPause} />
				<hr />
			</div>
			<button onClick={handleOnClick} type='button'>
				<FontAwesomeIcon className='dice' icon={faDiceFive} />
			</button>
		</div>
	);
}

export default App;
