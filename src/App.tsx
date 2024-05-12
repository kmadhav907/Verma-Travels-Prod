import "./App.css";
import HeroImage from "./assets/traveller.png";
import PostCard from "./assets/postcard.png";
import Ladakh from "./assets/Ladakh.jpeg";
import Manali from "./assets/Manali.jpeg";
import Shimla from "./assets/Shimla.jpeg";
import Travel from "./components/Travel";
import Airport from "./assets/Airport.jpeg";
import { useState } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
const dataForTravel = [
	{ title: "Manali", subtitle: "4 Days for 23,999Rs/-", image: Manali },
	{ title: "Shimla", subtitle: "4 Days for 23,999Rs/-", image: Shimla },
	{ title: "Leh/Ladhak", subtitle: "4 Days for 23,999Rs/-", image: Ladakh },
	{
		title: "Yamunanagar-Delhi(Shared)",
		subtitle: "4:30, 7:00 AM  500Rs per head",
		image: Airport,
	},
	{
		title: "Yamunanagar-Delhi",
		subtitle: "4:30, 7:00 AM  One way 2700Rs - Airport",
		image: Airport,
	},
	{ title: "Other Trips", subtitle: "Do call for enquiry" },
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
	return (
		<>
			<main className="container max-w-screen-2xl w-screen flex bg-slate-100 flex-col min-h-screen justify-between md:items-start p-0">
				<div
					className="w-[95vw] flex mt-11 items-center md:justify-between mx-auto flex-col md:flex-row md:mt-[100px]"
					id="herosection"
				>
					<div className="md:max-w-[45%] md:min-h-[300px] flex items-start justify-center flex-col max-w-screen-md">
						<h1 className="font-nunito-xl max-w-[100%]">Verma Travels</h1>
						<h3 className="font-nunito-md max-w-[100%]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam
							sint incidunt optio dicta minima iusto placeat! Accusantium
							tempore porro, facere consectetur error dolorem veniam magnam
							similique deleniti fugit hic?
						</h3>
						<button className="font-nunito-md shadow-lg bg-sky-500 hover:bg-sky-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0">
							Explore Destinations
						</button>
					</div>
					<div className="md:max-w-[50%]  h-[400px] md:w-[50%] flex items-center justify-center">
						<img
							src={HeroImage}
							alt="Hero Image"
							loading="lazy"
							className="object-cover"
						></img>
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
							className="object-cover h-[100%]"
						></img>
					</div>
					<div className="md:max-w-[45%] md:min-h-[300px] flex items-start justify-center flex-col max-w-screen-md">
						<h1 className="font-nunito-xl max-w-[100%]">What we do?</h1>
						<h3 className="font-nunito-md max-w-[100%]">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Et totam
							sint incidunt optio dicta minima iusto placeat! Accusantium
							tempore porro, facere consectetur error dolorem veniam magnam
							similique deleniti fugit hic?
						</h3>
						<button className="font-nunito-md shadow-lg bg-sky-500 hover:bg-sky-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0">
							Contact Us
						</button>
					</div>
				</div>
				<div
					id="explore"
					className="flex mt-[100px] items-center justify-center flex-col md:w-[100vw] w-screen p-2 md:p-8"
				>
					<h1 className="font-nunito-xl text-center">Explore our trips</h1>
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
								<header>Hello there :)</header>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Nullam pulvinar risus non risus hendrerit venenatis.
									Pellentesque sit amet hendrerit risus, sed porttitor quam.
								</p>
							</Modal>
						)}
					</div>
				</div>
				<div
					id="exploreDestination"
					className="flex mt-[20px] md:mt-[100px] items-center justify-center flex-col md:w-[100vw] w-screen p-2 md:p-8 mb-[20px]"
				>
					<h1 className="font-nunito-xl max-w-[100%] text-center">
						Discover North India with Verma Travels
					</h1>
					<button className="font-nunito-md shadow-lg bg-sky-500 hover:bg-sky-600  md:flex-row rounded-md text-white px-4 py-2 mt-4 mx-auto md:mx-0">
						Plan your trip now
					</button>
				</div>
			</main>
		</>
	);
}

export default App;
