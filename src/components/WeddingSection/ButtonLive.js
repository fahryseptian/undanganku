import React from 'react';

import IconIg from './assets/instagram.png';
import { styButtonWrapper } from './styles';

function ButtonLive() {
  return (
    <div className="row">
      <div className="col-md-12">
        <p className="text__live">Hadir secara langsung : </p>
        <a href="https://calendar.google.com/calendar/u/0/r/eventedit?dates=20210106T080000Z/20201003T060000Z&text=Miftah+%26+Fahry+Wedding&details=Miftah+%26+Fahry+Wedding&pli=1&sf=true" target="_blank" rel="noreferrer">
          <div css={styButtonWrapper}>
            <div className="img__wrapper">
              <img src={IconCalender} alt="simpan di kalender" />
              
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default React.memo(ButtonLive);
