import { observable, action } from "mobx";

class TimerData {
  @observable secondsPassed = 0
}

let timerData = new TimerData()

setInterval(action(() => {
  timerData.secondsPassed++;
}), 1000);

export default timerData
