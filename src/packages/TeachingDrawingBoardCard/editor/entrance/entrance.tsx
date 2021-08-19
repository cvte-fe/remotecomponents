import './style.less';
import { name } from '../../const'; // 从统一的位置获取本元素的名称
export default function installer(dependencies) {
  const { React, UIComponents, enowSDK } = dependencies;
  const { useState, useEffect } = React
  const {
    BtnGroup
  } = UIComponents;
  return function EntranceComponent() {
    // useEffect(() => {
    //   console.error('hahaha')
    // })
    const insertElement = async () => {
      const enow = enowSDK.getEnowInstance();
      if (enow) {
        // 生成初始 model 数据
        const modelDataInitial = await enow.element.common.proxyElementStaticMethod(name, 'creator', {
          x: 100,
          y: 100,
          width: 211,
          height: 269,
          title: '数学画板示例',
          thumb: '',
          thumbUri: 'http://store-g1.seewo.com/enow-cloud_assets/e77d11ec08a5f0bd773291bffd4d1da6',
          displayUrl: 'http://www.baidu.com'
        });
        // 向画布添加元素
        enow.element.common.addElements([modelDataInitial]);
      }
    }
    return (
      <div style={{ padding: '12px' }}>
        <BtnGroup
          className={'btn-group'}
          btns={[
            {
              content: (
                <div className={'btn-group-item'}>
                  插入数学画板
                </div>
              ),
              onClick: insertElement,
            }]}
          />
      </div>
    )
  }
}
