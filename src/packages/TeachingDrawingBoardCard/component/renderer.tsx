import './style.less';

export default function (dependencies) {
  const { Component } = dependencies.kernel;
  const { showThirdPart } = dependencies.utils;
  return class ComponentRenderer extends Component {
    constructor(props, context) {
      super(props, context);
      this.model = props.model;
    }

    handleClick() {

      showThirdPart(
        {
          title: this.model.get('title', ''),
          url: this.model.get('displayUrl', '')
        },
        0,
      );
    }

    render(props) {
      const { model } = props;
      const width = model.get('width');
      const height = model.get('height');
      const styles = {
        width: `${width}px`,
        height: `${height}px`,
      };
      const title = model.get('title', '');
      const thumb = model.get('thumb', '') || model.get('thumbUri', '');
      const titleColor = model.get('titleColor', 'rgba(255, 0, 0, 1)')
      return (
        <div className="enow-teachingDrawingBoard"
          style={styles}>
          <div
            class="enow-teachingDrawingBoard-head"
            style={{
              'font-size': `${width * 0.076}px`,
            }}
          >
            <div
              class="enow-teachingDrawingBoard-head-text"
              style={{
                height: `${height * 0.18}px`,
                'line-height': `${height * 0.18}px`,
                color: titleColor
              }}
            >
              {title}
            </div>
          </div>
          <div
            class="enow-teachingDrawingBoard-content"
            style={{
              height: `${height * 0.7}px`,
              width: '100%',
              'pointer-events': 'none',
            }}
          >
            <img
              src={thumb}
              alt={'截图'}
              style={{
                display: 'block',
                height: `100%`,
                width: '100%',
              }}
            />
          </div>
          <div
            class="enow-teachingDrawingBoard-footer"
            style={{
              height: `${height * 0.12}px`,
              'line-height': `${height * 0.12}px`,
              'font-size': `${width * 0.06}px`,
            }}
            onmouseup={this.handleClick.bind(this)}
          >
            打开在线画板
          </div>
        </div>
      );
    }
  }

}
