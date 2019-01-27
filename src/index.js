import _ from 'lodash'
import * as d3 from 'd3'

const component = () => {
  let element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  d3.select(document.body).append('svg')

  return svg
}

component()
