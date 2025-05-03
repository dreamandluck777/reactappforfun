import React from 'react';

interface H1Props {
  text: string;
}

const H1: React.FC<H1Props> = ({ text }) => <h1>{text}</h1>;

export default H1;