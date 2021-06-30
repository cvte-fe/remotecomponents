import './style.less';
import { name } from '../../const'; // 从统一的位置获取本元素的名称
import { Input } from 'antd'
export default function Installer(dependencies) {
  const { React, UIComponents, enowSDK } = dependencies;
  const {
    ColorSelector
  } = UIComponents;
  const COLOR_ELECTOR_ID = 'COLOR_ELECTOR_ID';
  const { Search } = Input;
  return function DemoPanelComponent(props) {
    const { useState, useEffect } = React;
    const { currentActEles } = props;
    const [color, setColor] = useState('rgba(0,0,0,1)');

    useEffect(() => {
      const target = currentActEles.find(ele => ele._type === name);
      const targetColor = target.titleColor;
      setColor(targetColor);
    }, [currentActEles])

    const handleColorChange = (newColor) => {
      setColor(newColor);
      const enow = enowSDK.getEnowInstance();
      if (enow) {
        const newPropertySet = currentActEles.map(ele => {
          // 需要传入元素的id，可以从currentActEles获取，也可以从getEditableProperty获取
          return { id: ele.id, titleColor: newColor }
        })
        enow.editor.element.common.setEditablePropertyAsync(newPropertySet);
      }
    }
  
    const tooltip = {
      title: '这是一个颜色选择器',
      describe: '可以用来修改颜色'
    }

    return (
      <div>
        <Search placeholder="input search text" onSearch={() => {}} style={{ width: 200 }} />
        <div className={'move-btn-title'}>修改标题颜色: </div>
        <ColorSelector
          tooltip={tooltip}
          colorSelectorId={COLOR_ELECTOR_ID}
          value={color}
          onChange={handleColorChange}
        />
      </div>
    )
  }
}