import React from "react";

interface Props {
  items?: any[];
  component: typeof React.Component;
}

const PodcastList = (props: Props) => {
  const ListItem = props.component;
  let content = <div /> as React.ReactNode;

  // If we have items, render them
  if (props.items) {
    content = props.items.map(item => (
      <ListItem key={`item-${item.id}`} item={item} />
    ));
  } else {
    // Otherwise render a single component
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