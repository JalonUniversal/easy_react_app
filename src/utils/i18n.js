import React, { useState } from 'react';

export function i18n() {
  const [content, changeLanguage] = useState({ defaultLan: 'zh-ch' })
  return <div onClick={() => { changeLanguage('en' )}}>{content}</div>
}