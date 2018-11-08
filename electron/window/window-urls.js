const fixedConfig = { resizable: false, maximizable: false, minimizable: false }

const urls = {
  home: '/',

  pac: { url: '/pac', config: { title: 'pac-sync', minWidth: 600, minHeight: 400 } },
  setting: {
    url: '/setting',
    config: {
      title: '设置',
      width: 600, height: 400,
      ...fixedConfig,
    }
  },

  about: {
    url: '/about',
    config: {
      title: ' 关于',
      width: 300, height: 240,
      ...fixedConfig,
    }
  },

}


module.exports = urls