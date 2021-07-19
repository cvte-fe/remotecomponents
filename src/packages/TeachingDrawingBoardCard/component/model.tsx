import { name } from '../const';
interface ICreateParams {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  thumb: string;
  thumbUri: string
  displayUrl: string;
}

export default function(dependencies) {
  const { ElementModel } = dependencies.kernel;
  const { uuid } = dependencies.utils;
  return class ComponentModel extends ElementModel {
    // 模型字段
    static fields = {
      needCustomThumb: 'boolean',
      title: 'string',
      thumb: 'string',
      thumbUri: 'string',
      displayUrl: 'string',
      titleColor: 'string?',
    };

    // 默认数据
    static defaultData = {
      needCustomThumb: true,
      title: '',
      thumb: '',
      thumbUri: '',
      displayUrl: '',
      titleColor: 'rgba(0, 255, 0, 1)'
    }

    static creator(params: ICreateParams) {
      const { x, y, width, height, title, thumb, thumbUri, displayUrl } = params;
      const modelData = {
        ...ElementModel.getBaseInitModelData(), // 调用 ElementModel 提供的创建元素基础默认数据的方法
        id: uuid(), // 该元素的唯一id
        _type: name,
        x,
        y,
        width,
        height,
        title,
        thumb,
        thumbUri,
        displayUrl,
      }
      return modelData; // 返回元素数据
    }

    // 设置属性
    public async setEditablePropertyAsync(property) {
      const self: any = this;
      self.set('titleColor', property.titleColor);
    }
    // 获取属性
    public getEditableProperty() {
      const self: any = this;
      const commonProp = super.getEditableProperty() || {}; // 获取公用的属性（包括x,y,width,height)
      return {
        ...commonProp,
        titleColor: self.get('titleColor'),
        _type: self.get('_type')
      };
    }
  }

}
