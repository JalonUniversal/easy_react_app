import React, { useState } from 'react';
import styles from './style.less';

export function Foo () {
  let [inital, changeVal] = useState(0);
  return (
    <div>
      <div 
        className={styles.primary}
        onClick={() => { 
          changeVal(++inital)
          debugger
        }}
      >
        plus
      </div>
    </div>
  )
}