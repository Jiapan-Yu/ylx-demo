import React from 'react'
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './index.less'

export default class SearchBarExample extends React.Component {
  state = {
    value: '美食',
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  onChange= (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    return (<div>
      <WingBlank><div className="sub-title">Normal</div></WingBlank>
      <SearchBar placeholder="Search" maxLength={8} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">AutoFocus when enter page</div></WingBlank>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">Focus by operation</div></WingBlank>
      <SearchBar
        placeholder="手动获取获取光标"
        ref={ref => this.manualFocusInst = ref}
      />
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={this.handleClick}
        >click to focus</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank><div className="sub-title">Show cancel button</div></WingBlank>
      <SearchBar
        value={this.state.value}
        placeholder="Search"
        onSubmit={value => console.log(value, 'onSubmit')} // eslint-disable-line no-console
        onClear={value => console.log(value, 'onClear')} // eslint-disable-line no-console
        onFocus={() => console.log('onFocus')} // eslint-disable-line no-console
        onBlur={() => console.log('onBlur')} // eslint-disable-line no-console
        onCancel={() => console.log('onCancel')} // eslint-disable-line no-console
        showCancelButton
        onChange={this.onChange}
      />
    </div>);
  }
}