import Banner from "@/components/Banner";
import IntroductionImages from "@/components/img/Introduction";
import React from "react";

const Introduction = () => {
	const introductions = [
		{
			img: IntroductionImages.whoAreUs,
			title: "Chúng tôi là ai?",
			subtitle: "Lorem ipsum dolor sit amet consectetur. ",
			detail: "Lorem ipsum dolor sit amet consectetur. Turpis tristique amet aliquam a. Augue venenatis praesent tellus at. Arcu imperdiet interdum consectetur dui egestas pharetra leo arcu. Cum sed duis velit vitae. Vulputate scelerisque sit convallis arcu risus leo. Felis convallis non aliquam ipsum amet sed eleifend purus eu. Justo facilisi sollicitudin porttitor lacus ut nunc sed tristique id.",
			flex: "flex md:flex-row",
		},
		{
			img: IntroductionImages.goal,
			title: "Mục tiêu chiến lược",
			subtitle: "Lorem ipsum dolor sit amet consectetur. ",
			detail: "Lorem ipsum dolor sit amet consectetur. Turpis tristique amet aliquam a. Augue venenatis praesent tellus at. Arcu imperdiet interdum consectetur dui egestas pharetra leo arcu. Cum sed duis velit vitae. Vulputate scelerisque sit convallis arcu risus leo. Felis convallis non aliquam ipsum amet sed eleifend purus eu. Justo facilisi sollicitudin porttitor lacus ut nunc sed tristique id.",
			flex: "flex md:flex-row-reverse",
		},
		{
			img: IntroductionImages.action,
			title: "Hoạt động ưu tiên",
			subtitle: "Lorem ipsum dolor sit amet consectetur. ",
			detail: "Lorem ipsum dolor sit amet consectetur. Turpis tristique amet aliquam a. Augue venenatis praesent tellus at. Arcu imperdiet interdum consectetur dui egestas pharetra leo arcu. Cum sed duis velit vitae. Vulputate scelerisque sit convallis arcu risus leo. Felis convallis non aliquam ipsum amet sed eleifend purus eu. Justo facilisi sollicitudin porttitor lacus ut nunc sed tristique id.",
			flex: "flex md:flex-row",
		},
	];
	return (
		<div className="w-screen mt-16">
			{/* header */}
			<Banner
				title="Giới thiệu về câu lạc bộ của chúng tôi"
				image={IntroductionImages.banner}
			/>
			{/* content */}
			<div className="md:pt-24 md:pb-[128px] md:px-40 mobile:px-5 mobile:pt-12 mobile:pb-16">
				{introductions.map((introduction, index) => (
					<div
						className={`mobile:flex mobile:flex-col-reverse mobile:gap-6 md:${introduction.flex} w-full md:gap-16 mb-16`}
						key={index}
					>
						<div className="md:py-5 flex-1 text-justify">
							<h3 className="text-primary text-left uppercase mobile:text-[16px] md:text-lg font-semibold font-inter mb-3">{introduction.title}</h3>
							<h1 className="md:text-[28px] text-left mobile:text-[24px] font-semibold font-inter mb-3">{introduction.subtitle}</h1>
							<p className="mobile:text-[16px] md:text-lg font-inter">{introduction.detail}</p>
						</div>
						<div className="flex-1">
							<img
								src={introduction.img}
								alt=""
								className="w-full h-full object-cover rounded-2xl"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Introduction;
