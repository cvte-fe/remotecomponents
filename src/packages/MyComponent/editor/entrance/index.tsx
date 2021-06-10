import EntranceComponent from './entrance';

export default function install(dependencies) {
  return {
    name: 'demo元素',
    icon: 'https://store-tg1.cvte.com/enow-cloud_assets/c54bb9d03ae3104d7a42179fdd2e4dbc',
    onClick: () => {
      console.log('点击到demo元素的入口')
    },
    tooltip: {
      title: 'demo元素',
      description: '这是一个远程加载回来的demo元素'
    },
    popupComponent: EntranceComponent(dependencies),
  }
}
