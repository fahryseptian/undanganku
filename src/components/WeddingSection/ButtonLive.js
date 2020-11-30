import React from 'react';

import IconIg from './assets/lokasi.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadiri pernikahan kami secara langsung : </p>
        <a href="https://maps.app.goo.gl/5DieywYhAmkbtn7G6" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Lokasi" />
              <span>Lokasi Acara</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
