import React from "react";

interface Props {
  items?: any[];
  component: () => React.ReactNode;
}

const PodcastList = (props: Props) => {
  const ListItem = props.component;
  let content = <div /> as React.ReactNode;

  if (props.items) {
    content = props.items.map(item => (
      <ListItem key={`item-${item.id}`} title={item.title} author={item.author} imageUrl={item.imageUrl} />
    ));
  } else {
    content = <ListItem />;
  }
  return (
    <div className="wrapper">
      <ul>
        {content}
      </ul>
    </div>
  )
};

export default PodcastList;