import React from 'react';

type Props = {};

const Categories = (props: Props) => {
  const data = [
    {
      id: 1,
      name: 'All',
      slug: 'all',
    },
    {
      id: 2,
      name: 'Architecture',
      slug: 'architecture',
    },
    {
      id: 3,
      name: 'Database',
      slug: 'database',
    },
  ];
  return <div>Categories</div>;
};

export default Categories;
