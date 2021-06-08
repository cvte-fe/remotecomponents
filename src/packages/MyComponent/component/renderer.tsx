import './style.less';

export default function (dependencies) {
  const { Component } = dependencies.kernel;
  const { showThirdPart, isOpenLink, hideThirdPartDialog, parseUrl, decode, isImmutable } = dependencies.utils;
  return class ComponentRenderer extends Component {
    render(props) {
      const { model } = props;
      const { width, height } = model.get(['width', 'height']);
      const styles = {
        width: `${width}px`,
        height: `${height}px`,
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        outline: 'hotpink 1px solid'
      }
      return (
        <div style={styles}>
          自定义元素内容
        </div>
      );
      }
    }
}
