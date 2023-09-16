import { Typography } from "antd";
import { FC } from "react";
import { TopicList } from "../components/topic-list";

interface HomePageProps {}
export const HomePage: FC<HomePageProps> = (props) => {
  return (
    <>
      <Typography.Title level={2}> Hello Louis! Let's learn some things new today!</Typography.Title>
      <TopicList /> 
    </>
  );

};