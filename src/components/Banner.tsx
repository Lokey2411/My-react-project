import React from "react";

type Props = {
	image: string;
	title: string;
};

const Banner = (props: Props) => {
	return (
		<div className="w-full relative">
			<img
				src={props.image}
				className="w-full object-cover h-[352px]"
				alt=""
			/>
			<div className="absolute inset-0 w-full h-full bg-black opacity-40"></div>
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<center>
					<h1 className="mobile:text-[28px] md:text-[40px] uppercase mb-3 font-bold text-white font-inter text-center">{props.title}</h1>
					<div className="w-16 h-1 bg-primary-light-3"></div>
				</center>
			</div>
		</div>
	);
};

export default Banner;
