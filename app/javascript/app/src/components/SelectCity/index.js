import React, { Component } from "react";
import { Select } from "antd";

const Option = Select.Option;

const cities = ["Таллин", "Рига", "Хельсинки"];

class SelectCity extends Component {
  constructor(props) {
    super(props);
  }

  handleChange = (value) => {
    this.props.onSelectChange(this.props.name, value);
  }

  render() {
    const cityOptions = cities.map((city,i) => {
      return(
        <Option key={i} value={city}>{city}</Option>
      );
    });
    return(
      <Select
        defaultValue={this.props.cityFrom}
        showSearch
        style={{ width: 200 }}
        placeholder="Выберите город"
        optionFilterProp="children"
        onChange={this.handleChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {cityOptions}
      </Select>
    );
  }
}

export default SelectCity;
