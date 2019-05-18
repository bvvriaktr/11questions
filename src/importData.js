import {get} from 'lodash/fp'
const url='https://spreadsheet-parser.herokuapp.com/?id=1aQ48d8wVCJtSoSCPTfYjN0h20Cf3yBxaSu8LRwenSmU';

export const fetchData = () => fetch(url)
.then(rawData => rawData.json())
.then(get('data'));