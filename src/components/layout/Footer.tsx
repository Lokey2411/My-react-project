import React from "react";

function Footer() {
	return (
		<div style={{ backgroundColor: "#D7DEFE" }}>
			<div className=" flex justify-center ">
				<div className="container flex justify-between md:items-center px-5 py-12 max-md:flex-col">
					<div className="my-10 ">
						<div className="text-3xl font-bold">LOGO</div>
						<div className="font-bold">Câu lạc bộ người khuyết tật</div>
					</div>
					<div className="my-10">
						<div>Địa chỉ: Trung Hòa, Cầu Giấy, Hà Nội</div>
						<div>Hotline: 0923 456 789</div>
						<div>Email: info@gmail.com</div>
					</div>
				</div>
			</div>

			<div
				className="flex justify-center "
				style={{ borderTop: "1px solid #3758F9" }}
			>
				<div className="px-5 py-8 md:px-40 md:py-8 flex justify-between md:items-center w-full max-md:flex-col ">
					<p className="md:font-bold md:text-right">© 2024 Cau lac bo nguoi khuyet tat</p>
					<p className="md:font-bold ">Made with by Nguyen Van A</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
