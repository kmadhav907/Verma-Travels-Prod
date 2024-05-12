import TouristImage from "../assets/tourist.jpeg";

const Travel = (props: any) => {
	return (
		<div
			className="relative isolate flex flex-col justify-end overflow-hidden aspect-square  rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24 md:w-[45%] cursor-pointer hover:scale-110 transition duration-300 ease-in-out"
			onClick={() => {
				props.openModal(props.index);
			}}
		>
			<img
				src={props.element.image || TouristImage}
				alt="University of Southern California"
				className="absolute inset-0 h-full w-full object-cover"
				loading="lazy"
			></img>
			<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
			<h3 className="z-10 mt-3 text-3xl font-bold text-white">
				{props.element.title}
			</h3>
			<div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
				{props.element.subtitle}
			</div>
		</div>
	);
};
export default Travel;
