# rnative-dropdown

<p align="center">
  <img src="record.gif" width="50%" />
</p>

## Install

    yarn add rnative-dropdown

## Using

```JS
import React, { Component } from 'react';
import Dropdown, { DropdownItem } from 'rnative-dropdown';

class Example extends Component {
  render() {
    return (
      <Dropdown label="Options">
        <DropdownItem label="item1" onPress={() => alert("item1")} />
        <DropdownItem label="item2" onPress={() => alert("item2")} />
        <DropdownItem label="item3" onPress={() => alert("item3")} />
      </Dropdown>
    )
  }
}
```
