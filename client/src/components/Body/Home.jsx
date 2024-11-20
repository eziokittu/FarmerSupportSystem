import Members from '../Body/Members';
import { Element } from 'react-scroll';
import Code from './Code';
import Model from './Model';
import Overview from './Overview';

const Home = () => {
	return (
		// <div className='min-h-[700px] pt-24 md:pt-14 lg:pt-8 bg-white/80 rounded-xl'>
		<div className='min-h-[700px] pt-24 md:pt-14 lg:pt-8 bg-white/80 rounded-xl flex flex-col gap-8'>

			<Element name='overview'><Overview /></Element>
			<Element name='model'><Model /></Element>
			<Element name='code'><Code /></Element>
			<Element name='members'><Members /></Element>

		</div>
	)
}

export default Home