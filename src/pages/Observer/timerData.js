import { observable } from "mobx";

class TimerData {
  @observable secondsPassed = 0
}

let timerData = new TimerData()

setInterval(() => {
  timerData.secondsPassed++;
}, 1000);

export default timerData
