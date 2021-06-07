import './style.less';

export default function Installer(dependencies) {
  const { React, UIComponents, enowSDK } = dependencies;
  const {
    BtnGroup
  } = UIComponents;
  return function DemoPanelComponent(props) {
    const {
      currentActEles
    } = props;
    const moveElement = (direction) => {
      const enow = enowSDK.getEnowInstance();
      if (enow) {
        direction === 'undo' ? enow.stage.goBackActions() : enow.stage.redoActions();
      }
    }
    const tooltip = {
      title: '撤销重做',
      describe: '点击按钮进行撤销重做',
    }
    return (
      <div>
        <div className={'move-btn-title'}>撤销重做</div>
        <BtnGroup
          className={'btn-group'}
          btns={[
            {
              content: (
                <div className={'btn-group-item'}>
                  Undo
                </div>
              ),
              tooltip: tooltip,
              onClick: () => moveElement('undo'),
            },
            {
              content: (
                <div className={'btn-group-item'}>
                  Redo
                </div>
              ),
              tooltip: tooltip,
              onClick: () => moveElement('redo'),
            }
          ]}
        />
      </div>
    )
  }
}