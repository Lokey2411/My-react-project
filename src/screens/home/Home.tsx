import { StyleSheet } from "react-native";
import React from "react";
import { ScrollView, VStack } from "@gluestack-ui/themed";
import SlideImage from "./component/SlideImage";
import { headerSlideData, basic } from "../../db/slide-data";
import CardList from "./component/CardList";
import { EDisplayType } from "../../types";
import PopularList from "./component/PopularList";

type Props = {};

const Home = (props: Props) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <VStack flex={1} p={"$4"} gap={"$4"} bg="$white">
        <SlideImage data={headerSlideData} />
        <PopularList />
        <CardList
          title="Scratch Cơ bản"
          data={basic}
          displayType={EDisplayType.NORMAL}
        />
        <CardList
          title="Scratch Nâng cao"
          data={basic}
          displayType={EDisplayType.NORMAL}
        />
      </VStack>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
