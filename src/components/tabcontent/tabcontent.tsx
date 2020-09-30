import React, { useState, useEffect } from 'react'
import { Col, Button, Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'
import { Link } from 'react-router-dom'
import style from './index.module.scss'

export const Tabcontent: React.FC<{
  images: Object
  type: Object
  version: Object
}> = (images) => {
  const [checked, setChecked] = useState<any>(false)

  useEffect(() => {
    let checkedInCookie = '1' === localStorage.getItem('checked')
    setChecked(checkedInCookie)
  }, [])

  const onCheckboxChanged = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked)
    localStorage.setItem('checked', e.target.checked ? '1' : '0')
  }

  const src = '/picInner/' + images['images'] + '.png'
  const downloadSrc = `https://s3.cn-north-1.amazonaws.com.cn/momenta-download/mona-${images['version'].toString().split('+').join('%2B')}.${images['type']}`
  return (
    <div className={style.tabContent}>
      <div className={style.topContent}>
        <Col span={24} offset={0} className={style.leftElement}>
          <div className={style.imgSize}>
            <img alt="roundtop" src={src} />
          </div>
          <span className={style.spanText}>
            &nbsp;&nbsp;{images['images']} ({images['version']}.{images['type']})
          </span>
        </Col>
        <div className={style.topButton}>
          <Button icon="download" disabled={!checked} type="primary" size="large" style={{ borderRadius: '20px', marginTop: '8px' }} href={downloadSrc}>
            下载
          </Button>
        </div>
      </div>
      <div className={style.bottomContent}>
        <Checkbox autoFocus={false} onChange={onCheckboxChanged} checked={checked}>
          同意软件
          <Link to="/terms">使用协议</Link>
        </Checkbox>
      </div>
    </div>
  )
}
