import TravelImage from "../assets/Travel.webp";
const Travel = (props: any) => {
	return (
		<div
			className="relative isolate flex flex-col justify-end overflow-hidden aspect-square h-[80vw]  rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 md:w-[45%] md:h-[300px] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
			onClick={() => {
				props.openModal(props.index);
			}}
		>
			<img
				src={props.element.image || TravelImage}
				alt="Find your destination"
				className="absolute inset-0 h-full w-full object-cover"
				loading="lazy"
			></img>
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
			<h3 className="z-10 mt-3 font-bold font-nunito-lg text-white">
				{props.element.title}
			</h3>
			<div className="z-10 gap-y-1 overflow-hidden font-nunito-md leading-6 text-gray-300">
				{props.element.subtitle}
			</div>
		</div>
	);
};
export default Travel;
