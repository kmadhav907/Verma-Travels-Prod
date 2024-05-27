import "./App.css";
import PostCard from "./assets/Postcard.webp";
import Ladakh from "./assets/Ladakh.webp";
import Manali from "./assets/Manali.webp";
import Shimla from "./assets/Shimla.webp";
import Airport from "./assets/Airport.webp";
import CharDham from "./assets/CharDham.webp";
import Chandigarh from "./assets/Chandigarh.webp";
import Delhi from "./assets/Delhi.webp";
import TaxiMobile from "./assets/TaxiMobile.jpeg";
import Travel from "./components/Travel";

import { useEffect, useState } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { setMetaTags } from "./components/Seo";
const dataForTravel = [
	{
		title: "Manali",
		subtitle: "4 days for 23,999/-",
		image: Manali,
		bulletPoints: [
			"6,000Rs per day for Innova",
			"5,500Rs per day for Ertiga",
			"4,500Rs per day for Sedan",
			"Minimum 4 days compulsory",
		],
	},
	{
		title: "Shimla",
		subtitle: "Tours available, please do contact",
		image: Shimla,
		bulletPoints: [
			"6,000Rs per day for Innova",
			"5,500Rs per day for Ertiga",
			"4,500Rs per day for Sedan",
			"Minimum 2 days compulsory",
		],
	},
	{
		title: "Leh/Ladhak",
		subtitle: "Tours available, please do contact",
		image: Ladakh,
		bulletPoints: [
			"6,000Rs per day for Innova",
			"5,500Rs per day for Ertiga",
			"4,500Rs per day for Sedan",
			"Minimum 7 days compulsory",
		],
	},

	{
		title: "Delhi (Shared)",
		subtitle: "Sharing cab, 500₹ per person",
		image: Delhi,
		bulletPoints: [
			"Sharing cab services",
			"500₹ per person",
			"Timings: 4:30AM and 7:00AM",
		],
	},
	{
		title: "Char Dhaam Yatra",
		subtitle: "Travel to 4 Dhaams",
		image: CharDham,
		bulletPoints: [
			"We will cover Kedarnath Badarinath Gangotri Yamunotri",
			"For more information, do contact us",
		],
	},
	{
		title: "Chandigarh",
		subtitle: "One way service",
		image: Chandigarh,
		bulletPoints: [
			"One way service to Chandigarh",
			"Cost for a Sedan: 2000₹",
			"Cost for a SUV: 3000₹",
		],
	},
	{
		title: "Delhi to Yamuna Nagar",
		subtitle: "One way service",
		image: Airport,
		bulletPoints: [
			"One way service to Yamuna Nagar",
			"Cost for a Sedan: 2700₹",
			"Cost for a Ertiga: 3500₹",
			"Cost for a Innova: 5000₹",
		],
	},

	{ title: "Other Himachal Trips", subtitle: "Do call for enquiry" },
];
function App() {
	const [modalState, setModalState] = useState({
		isOpen: false,
		dataIndex: -1,
	});
	const openModal = (index: number) => {
		setModalState({ ...modalState, isOpen: true, dataIndex: index });
	};
	const closeModal = () => {
		setModalState({ ...modalState, isOpen: false, dataIndex: -1 });
	};
	const scrollToId = (id: string) => {
		document.getElementById(id)?.scrollIntoView();
	};

	useEffect(() => {
		const structuredData = {
			"@context": "http://schema.org",
			"@type": "TravelAgency",
			name: "Verma Travel",
			url: "https://vermatravel.com",
			logo: "https://vermatravel.com/Flight.svg",
			sameAs: ["https://www.facebook.com/p/Verma-Travels-100066727214727/"],
			address: {
				"@type": "PostalAddress",
				streetAddress: "Opposite to Rohit Automobile",
				addressLocality: "Yamunanagar",
				addressRegion: "HR",
				postalCode: "135001",
				addressCountry: "IN",
			},
			contactPoint: {
				"@type": "ContactPoint",
				telephone: "+91-9017158692",
				contactType: "Customer Owner",
			},
		};

		setMetaTags({
			title: "Travel Services in Yamunanagar | Verma Travels",
			description:
				"Explore the best travel services in Yamunanagar. Book your trips, tours, and travel services with Verma Travels.",
			keywords:
				"travel services, Yamunanagar, tours, trips, travel agency, shimla, manali, delhi, new delhi, himachal pradesh, holiday, cabs",
			canonicalUrl: "https://vermatravel.com",
			structuredData: structuredData,
		});
	}, []);

	return (
		<>
			<main className="container max-w-screen-2xl w-screen flex flex-col min-h-screen justify-between md:items-start p-0">
				<div
					className="w-[100vw] h-[100vh] flex  items-center pt-10 md:pt-0 justify-start md:justify-center mx-auto flex-col md:flex-row relative"
					id="herosection"
				>
					<img
						className="hidden
						absolute top-0 left-0 h-[100vh] w-[100vw] object-cover blur-[4px] -z-10 md:block"
						src={TaxiMobile}
						loading="lazy"
						alt="Web Image for verma travels"
					></img>
					<img
						className="md:hidden 
					absolute top-0 left-0 object-cover blur-[2px] -z-10
					h-[100vh] w-[100vw]"
						src={TaxiMobile}
						alt="Mobile Image for verma travels"
						loading="lazy"
					></img>

					<div className="md:max-w-[100vw] md:min-h-[300px] flex items-center justify-center flex-col p-4">
						<h1 className="font-nunito-xl max-w-[100%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							Discover North India with Verma Travels
						</h1>
						<h3 className="font-nunito-md max-w-[100%] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
							With a fleet of modern vehicles and professional drivers, we
							strive to make every ride with us a pleasant experience.
						</h3>
						<button
							className="font-nunito-md shadow-lg bg-orange-500 hover:bg-orange-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0"
							onClick={() => {
								scrollToId("explore");
							}}
						>
							Explore Destinations
						</button>
					</div>
				</div>
				<div
					id="whatwedo"
					className="w-[95vw] flex mt-11 items-center md:justify-between mx-auto flex-col-reverse md:flex-row md:mt-[100px]"
				>
					<div className="md:max-w-[50%] h-[400px] md:w-[50%] flex items-center justify-center">
						<img
							src={PostCard}
							alt="Sub Hero Image"
							loading="lazy"
							className="object-cover w-[90vw] md:w-[300px]"
						></img>
					</div>
					<div className="md:max-w-[45%] md:min-h-[300px] flex items-start justify-center flex-col max-w-screen-md">
						<h1 className="font-nunito-xl max-w-[100%]">What we do?</h1>
						<h3 className="font-nunito-md max-w-[100%]">
							From airport transfers to city tours, we've got you covered for
							all your transportation needs.
						</h3>
						<button
							className="font-nunito-md shadow-lg bg-orange-500 hover:bg-orange-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0"
							onClick={() => {
								scrollToId("contact");
							}}
						>
							Contact Us
						</button>
					</div>
				</div>
				<div
					id="explore"
					className="flex mt-[100px] items-center justify-center flex-col md:w-[100vw] w-screen p-2 md:p-8"
				>
					<h1 className="font-nunito-xl text-center">
						Explore our trips from Yamuna Nagar
					</h1>
					<div className="flex flex-wrap justify-evenly w-[100%] flex-col md:flex-row">
						{dataForTravel.map((element, index) => {
							return (
								<Travel
									key={index}
									element={element}
									index={index}
									openModal={openModal}
								></Travel>
							);
						})}
						{modalState.isOpen && (
							<Modal
								open={modalState.isOpen}
								onClose={closeModal}
								center
							>
								<div className="">
									<header className="font-nunito-lg text-size-md">
										{dataForTravel[modalState.dataIndex].title}
									</header>

									<ul className="mt-1 mb-1 p-3 list-disc">
										{dataForTravel[modalState.dataIndex].bulletPoints?.map(
											(ele) => (
												<li className="font-nunito-md">{ele}</li>
											)
										)}
									</ul>
									<p className="font-nunito-md text-slate-700">
										Thank you for visiting! Contact us for more adventures.
									</p>
								</div>
							</Modal>
						)}
					</div>
				</div>
			</main>
		</>
	);
}

export default App;
