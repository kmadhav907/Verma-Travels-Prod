import LogoImgage from "../assets/Flight.webp";

const Navbar = () => {
	return (
		<nav className="w-screen z-20 flex justify-between items-center px-1 py-2 h-[64px] sticky top-0 bg-white shadow-lg md:px-2 md:py-4">
			<a
				href="/"
				className="px-0 md:px-5 flex items-center gap-2"
			>
				<img
					src={LogoImgage}
					className="h-[64px] mix-blend-multiply contrast-100"
					loading="lazy"
					alt="verma-travels-icon"
				></img>
				<div className="font-nunito-lg font-black hidden md:block">
					Verma Travels
				</div>
			</a>
			<div className="flex gap-4 px-4">
				<a
					href="#explore"
					className="font-nunito-md whitespace-nowrap
					px-4 py-2 nav-link rounded-md"
				>
					Explore
				</a>
				<a
					href="#contact"
					className="font-nunito-md whitespace-nowrap nav-link px-4 py-2 rounded-md"
				>
					Contact us
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
