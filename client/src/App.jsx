import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NotFound from './components/Body/NotFound';
import { Element } from 'react-scroll';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ServerStatus from './components/Reusable/ServerStatus';
import BackgroundTransition from './components/Reusable/BackgroundTransition';
import Home from './components/Body/Home';

const App = () => {
  const [serverActive, setServerActive] = useState(false);

  // Function to format time
	const formatTime = (timestamp) => {
		// Create a new Date object using the timestamp
		const currentDate = new Date(timestamp);

		// Get hours, minutes, and seconds
		const hours = currentDate.getHours();
		const minutes = currentDate.getMinutes();
		const seconds = currentDate.getSeconds();

		// Format hours, minutes, and seconds to ensure they have leading zeros if necessary
		const formattedHours = hours < 10 ? `0${hours}` : hours;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
		const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

		// Construct the HH:MM:SS string
		return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
	}

  // React useEffect hook to check server readiness
	useEffect(() => {
		const checkServerReady = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/working`);
				if (response.ok) {
					console.log("Server is ready at: " + formatTime(Date.now()));
					setServerActive(true); // Server is ready
				} else {
					console.log("Server not ready");
					setServerActive(false); // Server is not ready
				}
			} catch (error) {
				console.log("Error checking server status:", error);
				setServerActive(false); // Error occurred, assume server is not ready
			}
		};

		// Call the check immediately once
		checkServerReady();

		// Set the interval to continuously check server status
		const intervalId = setInterval(checkServerReady, 10000); // Check every 10 seconds

		// Clean up interval on component unmount
		return () => clearInterval(intervalId);
	}, []);

  return (
		<>
			<BackgroundTransition>
				{/* Checking the server status - if the server, when HOSTED, is connected to the client or not */}
				<ServerStatus serverActive={serverActive}/>

				{/* An opaque are below the server status */}
				{/* <div className='fixed -top-10 z-10 blur-xl h-[100px] bg-gray-200 w-full' /> */}

				{/* Routing */}
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route exact path="/" element={<Home serverActive={serverActive} />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
					<Element name='credits'>
						<Footer />
					</Element>
				</BrowserRouter>
			</BackgroundTransition>
		</>
  )
}

export default App