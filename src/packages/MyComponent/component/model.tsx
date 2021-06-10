export default function(dependencies) {
  const { ElementModel } = dependencies.kernel;
  return class ComponentModel extends ElementModel {
    // 是否开始debug输出
    static isDebug = false;

    // 是否清除没有在模型定义的数据
    static isRemoveAddition = true;

    // 模型字段
    static fields = {
    };

    // 默认数据
    static defaultData = {
    };

    // TODO 必须!!!
    // static toJsonx(modelData) {
    //   const jsonx = new TeachingDrawingBoardCardSaveInfo(modelData).toJsonx();
    //   return jsonx;
    // }

    // resize(width, height, scale) {
    //   const scaleRatio = {
    //     width: width / this.get('originWidth'),
    //     height: height / this.get('originHeight'),
    //   };
    //   this.merge({
    //     scaleRatio,
    //     width,
    //     height,
    //   });
    // }

    // // 转换数据以适应模型
    // static transform(modelData) {
    //   return modelData.merge({
    //     originWidth: modelData.get('width'),
    //     originHeight: modelData.get('height'),
    //   });
    // }

    // // 在模型实例化前会调用该方法检查是否不需要渲染，只有返回true才会不渲染
    // static notRender(props, context) {
    //   return false;
    // }

    // 初始化模型
    init(props) {
      // console.log(props);
    }

    /** enow-SDK方法 start */

    /**
     * 显示第三方资源
     */
    openDialog() {
      this.merge({ isShowDialog: { flag: true }, isFromSDK: true });
    }

    /**
     * 关闭第三方资源
     */
    closeDialog() {
      this.merge({ isShowDialog: { flag: false }, isFromSDK: true });
    }

    /** enow-SDK方法 end */
  }

}
