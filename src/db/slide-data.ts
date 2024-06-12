import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export const headerSlideData: MemberImageProps[] = [
  { name: "slideimg", image: require("../assets/slide1.png") },
  { name: "slideimg", image: require("../assets/slide1.png") },
  { name: "slideimg", image: require("../assets/slide1.png") },
];

export const basic: IData[] = [
  {
    id: 1,
    image: require("../assets/lesson1.png"),
    title: "Bài 1: Khám phá Scratch",
    description:
      "Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình",
  },
  {
    id: 2,
    image: require("../assets/lesson2.png"),
    title: "Bài 2: Thiết kế phông nền",
    description:
      "Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình",
  },
  {
    id: 3,
    image: require("../assets/lesson1.png"),
    title: "Bài 3: Thiết kế nhân vật  ",
    description:
      "Khóa học Scratch cơ bản giúp học sinh biết cách sử dụng công cụ Scratch để lập trình",
  },
];

