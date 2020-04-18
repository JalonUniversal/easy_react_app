import React, { useState } from 'react';
import { APP_NAME, APP_VERSION } from 'CONFIG';
import styles from './style.less';

export function AppInfo () {
  const DEFAULT_INFO = { APP_NAME, APP_VERSION };
  let [Info, changeVal] = useState(DEFAULT_INFO);
  return (
    <div 
      className={styles.primary}
      onClick={() => { 
        changeVal({
          APP_NAME: Info.APP_NAME === DEFAULT_INFO.APP_NAME ? 'Easy-React-App' : DEFAULT_INFO.APP_NAME,
          APP_VERSION: '0.8.0'
        })
      }}
    >
      { Info.APP_NAME } { Info.APP_VERSION }
    </div>
  )
}