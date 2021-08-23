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
    
    // 需要同步的事件列表
    static liveEvents = [
    ];

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
