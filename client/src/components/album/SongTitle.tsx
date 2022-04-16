import React from 'react';

interface IProps {
  title: string;
  domProps: any;
}

function SongTitle(props: IProps) {
  return <h2 {...props.domProps}>{props.title}</h2>;
}

export default SongTitle;
