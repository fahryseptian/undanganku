import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/p-dinda-2.jpg';
import Groom from '@assets/images/p-indra.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  const finalSubtitle = isInvitation ? '06 Januari 2021, Dusun Batu Lima, Desa Tebing T pangkatan, Pangkatan' : 'Rabu, 06 Januari 2021';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
              <p className="info">
                Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk
                rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan
                keberkahan.
              </p>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Miftahul Khairat Ritonga, S.Pd.</h3>
                <p className="parent-name parent-name__top">
                  Putri Bapak Alm Haris Fadillah Ritonga <br />& Ibu Roslaini pulungan
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Fahry Septian, S.Kom.</h3>
                <p className="parent-name">
                  Putra Bapak Dharma Putra <br />& Ibu Erniaty Ks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
