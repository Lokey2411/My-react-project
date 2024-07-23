import HomeImages from "@/components/img/Home";

type News = {
	title: string;
	subtitle: string;
	img: string;
	detailHtml: string;
};

export const actions = [
	{
		img: HomeImages.action1,
		text: "Hỗ trợ người khuyết tật",
	},
	{
		img: HomeImages.action2,
		text: "Cơ hội việc làm",
	},
	{
		img: HomeImages.action3,
		text: "Quảng bá, tiếp thị",
	},
];
export const events: News[] = [
	{
		img: HomeImages.event1,
		title: `Dự án "Cơ hội và hòa nhập cho người khuyết tật"`,
		subtitle: "Dự án hướng đến việc góp phần nâng cao chất lượng cuộc sống của người khuyết tật thông qua nâng cao chất lượng và hiệu quả của việc xây dựng và thực thi chính sách đối với người khuyết tật.",
		detailHtml: ``,
	},
	{
		img: HomeImages.event2,
		title: `Dự án "Cơ hội và hòa nhập cho người khuyết tật"`,
		subtitle: "Dự án hướng đến việc góp phần nâng cao chất lượng cuộc sống của người khuyết tật thông qua nâng cao chất lượng và hiệu quả của việc xây dựng và thực thi chính sách đối với người khuyết tật.",
		detailHtml: ``,
	},
	{
		img: HomeImages.event3,
		title: `Dự án "Cơ hội và hòa nhập cho người khuyết tật"`,
		subtitle: "Dự án hướng đến việc góp phần nâng cao chất lượng cuộc sống của người khuyết tật thông qua nâng cao chất lượng và hiệu quả của việc xây dựng và thực thi chính sách đối với người khuyết tật.",
		detailHtml: ``,
	},
];
export const news = [
	{
		img: HomeImages.news1,
		title: `Người khuyết tật tạo ra những sản phẩm xuất sang "trời tây"`,
		subtitle: "Nhiều sản phẩm thủ công mỹ nghệ xuất khẩu sang thị trường châu Âu, châu Á được chính đôi bàn tay của những người khuyết tật, neo đơn, có hoàn cảnh khó khăn làm ra.",
	},
	{
		img: HomeImages.news2,
		title: `Người khuyết tật tạo ra những sản phẩm xuất sang "trời tây"`,
		subtitle: "Nhiều sản phẩm thủ công mỹ nghệ xuất khẩu sang thị trường châu Âu, châu Á được chính đôi bàn tay của những người khuyết tật, neo đơn, có hoàn cảnh khó khăn làm ra.",
	},
	{
		img: HomeImages.news3,
		title: `Người khuyết tật tạo ra những sản phẩm xuất sang "trời tây"`,
		subtitle: "Nhiều sản phẩm thủ công mỹ nghệ xuất khẩu sang thị trường châu Âu, châu Á được chính đôi bàn tay của những người khuyết tật, neo đơn, có hoàn cảnh khó khăn làm ra.",
	},
];
