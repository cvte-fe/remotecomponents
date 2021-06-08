import './style.less';

export default function (dependencies) {
  const { Component } = dependencies.kernel;
  const { showThirdPart, isOpenLink, hideThirdPartDialog, parseUrl, decode, isImmutable } = dependencies.utils;
  return class ComponentRenderer extends Component {
    title = '';
    url = '';
    constructor(props, context) {
      super(props, context);
    }

    getSlide() {
      const { modelManager } = this.context;
      const currentSlideId = this.getSlideId();
      return modelManager.getSlide(currentSlideId);
    }

    getSlideId() {
      const { modelManager } = this.context;
      const stageModel = modelManager.getStage();
      return stageModel.getCurrentSlideId();
    }

    createIframeSrc() {
      // 测试环境无数学画板内容，需用生产环境
      const easinoteUrl = 'https://easinote.seewo.com/embedpc3/cola/detail/fullscreen';
      const url = parseUrl(decode(this.url));
      const params = (url && url.params) || {};
      return `${easinoteUrl}?id=${params.id}&title=${params.title}&auth=1&closable=0&preview=1`;
    }

    emitEvent(eventName) {
      this.context.eventEmitter.emit(eventName, {
        slideId: this.getSlideId(),
        id: this.props.model.get('id')
      })
    }

    showThirdPart() {
      this.context.fridayReporter.report('sketchpad_open');
      const slide = this.getSlide();
      const slideWidth = slide.get('width');
      const slideHeight = slide.get('height');

      if (!isOpenLink(this, slideWidth, slideHeight)) {
        return;
      }

      this.emitEvent('element.ThirdPart.openDialog');
      showThirdPart(
        {
          title: this.title,
          url: this.createIframeSrc(),
          width: slideWidth,
          height: slideHeight,
          cb: () => {
            this.context.fridayReporter.report('sketchpad_close');
            this.emitEvent('element.ThirdPart.closeDialog');
          },
        },
        0,
      );
    }

    componentDidUpdate() {
      const { model } = this.props;
      const isFromSDK = model.get('isFromSDK', false);
      if (isFromSDK) {
        const isShowDialog = model.get('isShowDialog', { flag: false });
        if (isShowDialog.flag) {
          this.showThirdPart();
        } else {
          this.emitEvent('element.ThirdPart.closeDialog');
          hideThirdPartDialog();
        }
        model.set('isFromSDK', false);
      }
    }

    clickEvent(e) {
      // 避免选中图片的默认事件
      e.preventDefault();
    }

    render(props) {
      const { model } = props;
      const originWidth = model.get('originWidth');
      const originHeight = model.get('originHeight');
      let scaleRatio = model.get('scaleRatio', { width: 1, height: 1 });
      if (isImmutable(scaleRatio)) {
        scaleRatio = scaleRatio.toJS();
      }
      const styles = {
        width: `${originWidth}px`,
        height: `${originHeight}px`,
        'transform-origin': 'top left',
        transform: `scale(${scaleRatio.width}, ${scaleRatio.height})`,
      };
      const title = model.get('title', '');
      const thumb = model.get('thumb', '') || model.get('thumbUri', '');
      this.url = model.get('displayUrl', '');
      this.title = title;
      return (
        <div className="enow-teachingDrawingBoard"
          style={styles}
          ref={e => {
            e && e.addEventListener('mousedown', this.clickEvent, false);
          }}>
          <div
            class="enow-teachingDrawingBoard-head"
            style={{
              'font-size': `${originWidth * 0.076}px`,
            }}
          >
            <div
              class="enow-teachingDrawingBoard-head-text"
              style={{
                height: `${originHeight * 0.18}px`,
                'line-height': `${originHeight * 0.18}px`,
              }}
            >
              {decode(title)}
            </div>
          </div>
          <div
            class="enow-teachingDrawingBoard-content"
            style={{
              height: `${originHeight * 0.7}px`,
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
              height: `${originHeight * 0.12}px`,
              'line-height': `${originHeight * 0.12}px`,
              'font-size': `${originWidth * 0.06}px`,
            }}
            // onClick={this.showThirdPart.bind(this)}
            onmouseup={this.showThirdPart.bind(this)}
            ontouchend={this.showThirdPart.bind(this)}
          >
            打开在线画板
          </div>
        </div>
      );
    }
  }

}
