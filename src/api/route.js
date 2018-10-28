import axios from  'axios'
import qs from 'qs'

const getRoute = async (object = {}) => {
	const res = await axios.post(`https://tour-test.yjylx.com/tour/searchRoute.do?listRouteOnSell`, qs.stringify(object))
	return res
}

export { getRoute }
