import React from 'react';
import { useMediaQuery } from 'react-responsive';

import MainContentArea from './MainContentArea';

export default function App ({ ...props }) {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 639px)' });

  return (
    <div>
      <MainContentArea isTabletOrMobile={isTabletOrMobile} />
    </div>
  );
}
