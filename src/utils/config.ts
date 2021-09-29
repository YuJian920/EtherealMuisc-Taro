export default (url: string): string => {
  let BASE_URL = ''
  if (process.env.NODE_ENV === 'development') {
    // 开发模式
    BASE_URL = url.includes('/api/') ? '' : ''
  } else {
    // 生产环境
    BASE_URL = url.includes('/api/') ? '' : ''
  }
  return BASE_URL
}
