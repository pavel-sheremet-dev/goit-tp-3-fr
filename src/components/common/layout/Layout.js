import React, { useState, useEffect } from 'react';

import { PageFormatContext, format } from 'context/pageFormatContext';
import { getCssVars } from 'styles/vars';

const { mobile, tablet, desktop } = getCssVars().breakPoints;

const Layout = ({ children }) => {
  const [pageFormat, setPageFormat] = useState(null);

  useEffect(() => {
    const onHandleResize = () => {
      const viewport = window.innerWidth;

      if (
        viewport < Number.parseInt(mobile) &&
        pageFormat !== format.response
      ) {
        setPageFormat(format.response);
        return;
      }
      if (
        viewport >= Number.parseInt(mobile) &&
        viewport < Number.parseInt(tablet) &&
        pageFormat !== format.mobile
      ) {
        setPageFormat(format.mobile);
        return;
      }
      if (
        viewport >= Number.parseInt(tablet) &&
        viewport < Number.parseInt(desktop) &&
        pageFormat !== format.tablet
      ) {
        setPageFormat(format.tablet);
        return;
      }
      if (
        viewport >= Number.parseInt(desktop) &&
        pageFormat !== format.desktop
      ) {
        setPageFormat(format.desktop);
        return;
      }
    };
    window.addEventListener('resize', onHandleResize);
    onHandleResize();
  }, [pageFormat]);

  return (
    <PageFormatContext.Provider value={pageFormat}>
      {children}
    </PageFormatContext.Provider>
  );
};

export default Layout;
