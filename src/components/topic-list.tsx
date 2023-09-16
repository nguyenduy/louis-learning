import { List } from 'antd';
import { FC } from 'react';


interface TopicListProps {
  topics: [];
}
export const TopicList: FC<TopicListProps> = (props) => {
  return (
    <>
      <List 
        dataSource={["Topic 1", "Topic 2", "Topic 3"]}
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta title={item} description="Topic description" />
          </List.Item>
        )}
      />

      
    </>
  );
}