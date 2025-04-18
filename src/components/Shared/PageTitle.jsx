/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: PageTitle.jsx
  Created and maintained by: [Santoshi Santoshi]
*/


import { useEffect } from 'react';

export default function PageTitle({ title = '', separator = ' | ' }) {
  useEffect(() => {
    document.title = `${title}${separator}Om Oasis`;
  }, [title, separator]);

  return null;
}
