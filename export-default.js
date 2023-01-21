import exportDefaultResult from './export-default-chunk.js'

document.getElementById('app').insertAdjacentElement('afterbegin', '<p>${exportDefaultResult}</p>')
