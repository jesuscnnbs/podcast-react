import React, { useState } from "react";
import PodcastItem from "../PodcastItem/PodcastItem";
import { usePodcasts } from "@/hooks";

interface Props {
  items?: any[];
}

const PodcastList = (props: Props) => {
  const [limit, setLimit] = useState(100);
  const { isPending, error, data, isFetching } = usePodcasts(limit);
  let content = (<div />) as React.ReactNode;
  if (isPending) return <div>Loading</div>;

  if (props.items) {
    content = props.items.map((item) => (
      <PodcastItem
        key={`item-${item.id}`}
        title={item.title}
        author={item.author}
        imageUrl={item.imageUrl}
      />
    ));
  } else {
    content = <PodcastItem />;
  }
  return (
    <div className="wrapper">
      <div>{content}</div>
    </div>
  );
};

export default PodcastList;
