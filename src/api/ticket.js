import axios from 'axios';
import qs from 'qs';

const queryTicketList = async (object = {}) => {
  const res = await axios.post('https://tour-test.yjylx.com/tour/viewInfoEc.do?viewInfoList', qs.stringify(object));
  return res;
}

export { queryTicketList };
