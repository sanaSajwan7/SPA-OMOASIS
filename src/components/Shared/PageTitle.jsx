/*
  Final Project – Single Page Application (SPA)
  Team Members:
  - Abhishek Ajay Chachad
  - Gaurav Gaurav
  - Ashwin Mathew
  - Santoshi Santoshi

  File: PageTitle.jsx
  Created and maintained by: [Santoshi Santoshi]
    Description: This file contains the PageTitle component, which sets the document title for the application.
    This component is used to set the title of the page dynamically based on the current page.
    The title and separator are passed as props from the parent component.
*/


import { useEffect } from 'react';

export default function PageTitle({ title = '', separator = ' | ' }) {
  useEffect(() => {
    document.title = `${title}${separator}Om Oasis`;
  }, [title, separator]);

  return null;
}
