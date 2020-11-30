import React from 'react';

import IconIg from './assets/lokasi.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara  langsung : </p>
        <a href="https://goo.gl/maps/MkTYe5WF9cogx1NY9" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconIg} alt="Lokasi" />
              <span>@dindadipoyono</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
