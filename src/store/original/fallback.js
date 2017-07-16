import original from './index'
import dummy from '../dummy'

let api = {}

const switchTo = type => {
  for (let resource in api) {
    for (let method in api[resource]) {
      api[resource][method] = type[resource][method]
    }
  }
}

// construct a fallback api object
for (let resource in original) {
  let proxiedResource = {}

  for (let method in original[resource]) {
    proxiedResource[method] = (...args) =>
      // make request to backend server
      original[resource][method](...args)
        .then(resource => {
          switchTo(original)
          console.warn('Backend API server responds, fallback is removed.')
          return resource
        })
        .catch(_ => {
          switchTo(dummy)
          console.warn('Backend API server doesn\'t respond. ' +
            'Fallback with data.js content is used.')
          return dummy[resource][method](...args)
        })
  }

  api[resource] = proxiedResource
}

export default api
