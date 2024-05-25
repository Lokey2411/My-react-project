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

export const softAnimal: IData[] = [
  {
    id: 1,
    image: require("../assets/octopus1.png"),
    title: "Mực ống",
    description: `Bộ Mực ống (danh pháp khoa học: Teuthida) là một nhóm động vật biển thuộc siêu bộ Mười chân (Decapodiformes) của lớp Chân đầu (Cephalopoda). Mực ống có phần thân và phần đầu rõ ràng. Thân cân xứng hai phía, có da và có 6 "tay" và 2 "chi". Mực ống có chứa hợp chất mực màu đen trong cơ thể, khi gặp nguy hiểm, mực phun ra tạo màn đen dày đặc, qua đó lẩn trốn khỏi nguy cơ đe dọa.`,
  },
  {
    id: 2,
    image: require("../assets/octopus1.png"),
    title: "Mực nang",
    description:
      "Bộ Mực nang (danh pháp hai phần: Sepiida) là một bộ động vật nhuyễn thể thuộc lớp Cephalopoda (trong đó cũng bao gồm mực ống, bạch tuộc và ốc anh vũ).",
  },
  {
    id: 3,
    image: require("../assets/octopus1.png"),
    title: "Mực nang",
    description:
      "Bộ Mực nang (danh pháp hai phần: Sepiida) là một bộ động vật nhuyễn thể thuộc lớp Cephalopoda (trong đó cũng bao gồm mực ống, bạch tuộc và ốc anh vũ).",
  },
];
