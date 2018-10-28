import axios from  'axios'
import qs from 'qs'

const queryDriveList = async (object = {}) => {
	const res = await axios.post(`https://tour-test.yjylx.com/tour/driveInfoAction.do?queryDriveBasePage`, qs.stringify(object))
	return res
}

export { queryDriveList }
