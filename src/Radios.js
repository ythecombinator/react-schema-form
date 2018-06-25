import React from 'react';
import utils from './utils';
import classNames from 'classnames';
import ComposedComponent from './ComposedComponent';

import RadioButton from '@material-ui/core/Radio';
import RadioButtonGroup from '@material-ui/core/RadioGroup';

class Radios extends React.Component {

    render() {
        let items = this.props.form.titleMap.map(function(item, index) {
            return (
                <RadioButton label={item.name}
                             value={item.value}
                             key={index}
                             disabled={this.props.form.readonly}
                    />
            )
        }.bind(this));

        return (
            <span className={this.props.form.htmlClass}>
              <label className="control-lable">{this.props.form.title}</label>
              <RadioButtonGroup defaultSelected={this.props.value} name={this.props.form.title} onChange={this.props.onChangeValidate}>
                  {items}
              </RadioButtonGroup>
            </span>
        );
    }
}

export default ComposedComponent(Radios);
