import './style.less';
import { name } from '../../const'; // 从统一的位置获取本元素的名称

export default function Installer(dependencies) {
  const { React, UIComponents, enowSDK } = dependencies;
  const {
    ColorSelector
  } = UIComponents;
  const COLOR_ELECTOR_ID = 'COLOR_ELECTOR_ID';
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
        currentActEles.forEach(ele => {
          enow.editor.element.common.setEditableProperty([
            // 需要传入元素的id，可以从currentActEles获取，也可以从getEditableProperty获取
            { id: ele.id, titleColor: newColor }
          ])
        })
      }
    }
  
    const tooltip = {
      title: '这是一个颜色选择器',
      describe: '可以用来修改颜色'
    }

    return (
      <div>
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