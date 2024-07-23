import React, { HtmlHTMLAttributes, useRef } from "react";
import { IQueryOptions, queryDocuments } from "@/config/firebase/api";
import { EQueryOperator } from "@/config/firebase/type";
import "./Home.css";

import Slider, { Settings } from "react-slick";
import { actions, events, news } from "@/data";

type Props = {};

const imgUrl = "/assets/banner.png";

type SectionProps = { additionalClassName?: string; title: string } & HtmlHTMLAttributes<HTMLDivElement>;

const Section = ({ title, additionalClassName, ...props }: SectionProps) => {
	return (
		<div
			className={"py-16 bg-[#F3F4F6] " + additionalClassName}
			{...props}
		>
			<h1 className="text-[40px] text-center font-bold uppercase">{title}</h1>
			<div className="h-1 w-8 bg-primary m-auto mb-8"></div>
			{props.children}
		</div>
	);
};

const Home = (props: Props) => {
	const slider = useRef(null);
	var sliderEventSetting: Settings = {
		centerMode: true,
		appendDots: (dots: any) => <ul className="w-full flex justify-center mt-8 items-center gap-2 ">{dots}</ul>,
		customPaging: (index) => {
			return <div className="w-[10px] h-[10px] border border-primary rounded-full"></div>;
		},
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 2000,
		swipeToSlide: true,
		className: "w-full h-full gap-8 bg-transparent rounded-2xl home-event-slider",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					centerPadding: "320px",
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerPadding: "0px",
				},
			},
		],
	};
	const getList = async () => {
		const options: IQueryOptions = {
			property: "regions",
			queryOperator: EQueryOperator.ARRAY_CONTAIN,
			value: "east_coast",
		};
		const list = await queryDocuments("cities", options);
		console.log("list", list);
	};
	return (
		<div className="w-full overflow-hidden">
			<div>
				<div className="banner lg:p-[128px] lg:pt-[80px] mobile:px-5 mobile:pt-12 mobile:pb-[72.4px]">
					<div className=" flex flex-col justify-center items-center pt-20 px-5">
						<div className="text-3xl font-bold mobile:font-semibold text-center">Câu lạc bộ người khuyết tật</div>
						<div className="text-2xl py-2 text-center">Tạo ra sự nhận thức và hỗ trợ cho cộng đồng người khuyết tật</div>
					</div>
					<div className="flex justify-center mt-10">
						<img
							src={imgUrl}
							alt=""
							className="object-cover md:w-7/12 h-auto mobile:w-full"
						/>
					</div>
				</div>
				<Section
					title="Mục tiêu"
					additionalClassName="md:px-[224px] mobile:px-5"
				>
					<div className="text-center text-[21px]">Mục tiêu của chúng tôi là tạo ra một nền tảng trực tuyến để quảng bá và tiếp thị các sản phẩm của người khuyết tật, giúp họ tiếp cận nhiều khách hàng hơn và tạo ra cơ hội kinh doanh tích cực.</div>
				</Section>
				<Section title="Hoạt động">
					<div className="flex items-center justify-center gap-8 md:px-40 mobile:px-5 mobile:flex-col md:flex-row">
						{actions.map((action, index) => {
							return (
								<div
									key={index}
									className="flex flex-col relative w-full h-[235px] rounded-2xl overflow-hidden flex-1"
								>
									<img
										src={action.img}
										alt=""
										className="object-cover w-full h-full"
									/>
									<div className="absolute text-[18px] text-white uppercase font-semibold inset-0 bg-black opacity-40"></div>
									<p className="text-white uppercase font-semibold absolute pt-4 pl-4 text-[18px]">{action.text}</p>
								</div>
							);
						})}
					</div>
				</Section>
				<Section title="Sự kiện">
					<div id="slider-home-event">
						<div className="relative">
							<Slider
								{...sliderEventSetting}
								ref={slider}
							>
								{events.map((event, index) => {
									return (
										<div
											key={index}
											className="relative p-2 bg-white rounded-2xl "
										>
											<img
												src={event.img}
												alt=""
												className="w-full h-full object-cover rounded-xl mobile:h-[468px]"
											/>
											<div className="absolute bottom-4 left-4 right-4  height-fit text-white uppercase bg-[rgba(0,0,0,0.65)] p-4 rounded-lg">
												<div className="text-[14px] font-medium mb-2">{event.title}</div>
												<div className="text-[12px] font-normal ">{event.subtitle}</div>
											</div>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</Section>
				<Section title="Tin tức">
					<div id="slider-home-news">
						<div className="relative">
							<Slider
								{...sliderEventSetting}
								ref={slider}
							>
								{news.map((newspaper, index) => {
									return (
										<div
											key={index}
											className="relative p-2 bg-white rounded-2xl"
										>
											<img
												src={newspaper.img}
												alt=""
												className="w-full md:h-full object-cover rounded-xl mobile:h-[468px]"
											/>
											<div className="absolute bottom-4 left-4 right-4  height-fit text-white uppercase bg-[rgba(0,0,0,0.65)] p-4 rounded-lg">
												<div className="text-[14px] font-medium mb-2">{newspaper.title}</div>
												<div className="text-[12px] font-normal">{newspaper.subtitle}</div>
											</div>
										</div>
									);
								})}
							</Slider>
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
};

export default Home;
