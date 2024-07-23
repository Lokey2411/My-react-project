import Banner from "@/components/Banner";
import Send from "@/components/Icons/Send";
import AboutImages from "@/components/img/About";
import React from "react";

type Props = {};

const About = (props: Props) => {
	return (
		<div className="w-full mt-16">
			<Banner
				image={AboutImages.banner}
				title="Liên hệ"
			/>
			{/* content */}
			<div className="md:py-32 md:px-40 flex md:flex-row mobile:flex-col mobile:px-5 mobile:py-12 md:gap-32 bg-gray-gray-2 mobile:gap-12">
				<div className="md:py-12 gap-8 flex-1 flex flex-col">
					<h1 className="font-bold font-inter text-5xl">Liên hệ</h1>
					<p className="font-inter text-[18px] text-justify">
						<p>Sử dụng biểu mẫu để cung cấp cho chúng tôi thông tin chi tiết và tôi sẽ phản hồi bạn sớm nhất có thể.</p>
						<br />
						<p>Ngoài ra, hãy liên hệ bằng thông tin bên dưới hoặc liên hệ với tôi qua mạng xã hội.</p>
					</p>
					<p className="flex mobile:gap-1 md:gap-8 md:flex-row mobile:flex-col">
						<a
							href="mailto:emaildemo@gmail.com"
							className="text-primary font-inter"
						>
							emaildemo@gmail.com
						</a>
						<a
							href="tel:+(84)34 562 2456"
							className="font-bold"
						>
							+(84)34 562 2456
						</a>
					</p>
				</div>
				<div className="flex-1 flex flex-col md:gap-8 mobile:gap-6  mobile:flex-col">
					{/* form controls */}
					<div className="flex flex-1 md:gap-8 mobile:gap-6 md:flex-row mobile:flex-col">
						<div className="flex-1 flex flex-col">
							{/* form content */}
							{/* form label */}
							<label
								htmlFor="name"
								className="font-medium"
							>
								Họ tên
							</label>
							<input
								type="text"
								name="name"
								placeholder="Họ tên"
								className="px-6 py-3 rounded-xl mt-2"
							/>
						</div>
						<div className="flex-1 flex flex-col">
							{/* form content */}
							{/* form label */}
							<label
								htmlFor="email"
								className="font-medium"
							>
								Email
							</label>
							<input
								type="text"
								name="email"
								placeholder="Email"
								className="px-6 py-3 rounded-xl mt-2"
							/>
						</div>
					</div>
					<div className="flex-1 flex flex-col">
						<label
							htmlFor="support"
							className="font-medium"
						>
							Thông tin cần hỗ trợ
						</label>
						<textarea
							name="support"
							placeholder="Nhập nội dung"
							className="px-6 py-3 rounded-xl mt-2 flex-1 min-h-[136px] resize-none"
						></textarea>
					</div>
					<button className="px-6 py-3 rounded-xl bg-primary text-white w-full flex justify-center items-center text-[16px] gap-2">
						Gửi <Send />
					</button>
				</div>
			</div>
		</div>
	);
};

export default About;
