import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const DynamicTitle = () => {
  const { pathname } = useLocation();

  // Map paths to titles
  const titleMap = {
    '/': 'Nandini Prajapati | Aspiring full-stack developer',
    '/about': 'Nandini Prajapati | About',
    '/skills': 'Nandini Prajapati | Skills',
    '/projects': 'Nandini Prajapati | Projects',
    '/certificates': 'Nandini Prajapati | Certificates',
    '/education': 'Nandini Prajapati | Education',
    '/contact': 'Nandini Prajapati | Contact',
  };

  const currentTitle = titleMap[pathname] || 'Nandini Prajapati | Aspiring full-stack developer';

  return (
    <Helmet>
      <title>{currentTitle}</title>
    </Helmet>
  );
};

export default DynamicTitle;
