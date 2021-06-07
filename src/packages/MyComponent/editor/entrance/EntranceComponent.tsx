import './style.less';
export default function installer(dependencies) {
  const { React, UIComponents, enowSDK } = dependencies;
  const {
    BtnGroup
  } = UIComponents;
  return function EntranceComponent() {
    const insertElement = () => {
      const enow = enowSDK.getEnowInstance();
      if (enow) {
      }
    }
    const tooltip = {
      title: '插入',
      describe: '点击插入数学画板'
    }
    return (
      <div 
        style={{
          padding: '12px',
        }}>
          <BtnGroup
            className={'btn-group'}
            btns={[
              {
                content: (
                  <div className={'btn-group-item'}>
                    insert
                  </div>
                ),
                tooltip: tooltip,
                onClick: insertElement,
              }]}
            />
        </div>
    )
  }
}