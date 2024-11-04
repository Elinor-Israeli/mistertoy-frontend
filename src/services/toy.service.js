import { utilService } from './util.service.js'
import { httpService } from './http.service.js'

const STORAGE_KEY = 'toyDB'
const BASE_URL = 'toy/'

const labels = [
    'On wheels',
    'Box game',
    'Art',
    'Baby',
    'Doll',
    'Puzzle',
    'Outdoor',
    'Battery Powered',
  ]

export const toyService = {
    query,
    getById,
    save,
    remove,
     getEmptyToy,
    getDefaultFilter,
    getFilterFromSearchParams,
    getToyLabels,
}


function query(filterBy = {}) {
    return httpService.get(BASE_URL, filterBy)
}

function getById(toyId) {
    return httpService.get(BASE_URL + toyId)

}
function remove(toyId) {
    return httpService.delete(BASE_URL + toyId)

}

function save(toy) {
    if (toy._id) {
        return httpService.put(BASE_URL + toy._id, toy)
    } else {
        return httpService.post(BASE_URL, toy)
    }
}

function getDefaultFilter() {
    return {
      txt: '',
      inStock: null,
      labels: [],
      pageIdx: 0,
      sortBy: {
        type: '',
        desc: 1
      }
    }
  }
  
function getEmptyToy() {
    return {
      name: '',
      price: '',
      labels: _getRandomLabels(),
    }
  }

// function getRandomToy() {
//     return {
//         vendor: 'Susita-' + (Date.now() % 1000),
//         price: utilService.getRandomIntInclusive(1000, 9000),
//         speed: utilService.getRandomIntInclusive(90, 200),
//     }
// }


function getToyLabels() {
    return [...labels]
  }

  function _getRandomLabels() {
    const labelsCopy = [...labels]
    const randomLabels = []
    for (let i = 0; i < 2; i++) {
      const randomIdx = Math.floor(Math.random() * labelsCopy.length)
      randomLabels.push(labelsCopy.splice(randomIdx, 1)[0])
    }
    return randomLabels
  }
  function getFilterFromSearchParams(searchParams) {
    const defaultFilter = getDefaultFilter()
    const filterBy = {}
    for (const field in defaultFilter) {
        filterBy[field] = searchParams.get(field) || ''
    }
    return filterBy
}