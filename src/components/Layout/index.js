import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';


import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = ``;
const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - Miftah & Fahry`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Miftah ❤️ Fahry Wedding</title>

        
        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Miftah & Fahry" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="The Wedding of Miftah & Fahry" />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta name="twitter:title" content="The Wedding of Miftah & Fahry" />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={IMAGE_URL} />
        <meta name="twitter:url" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="" />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
