import React from 'react';

interface IProps {
  title: string;
  className: string;
}

function SongTitle(props: IProps) {
  return <h2 {...props}>{props.title}</h2>;
}

export default SongTitle;
