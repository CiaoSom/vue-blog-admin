const IS_DEV = process.env.NODE_ENV !== 'production'

exports.API_ROOT = IS_DEV ? '/api' : 'http://chejinsong.com/api'