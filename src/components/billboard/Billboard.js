import React, { Component } from 'react';
import classnames from 'classnames';
import { enhance, addPropTypes, addClassName } from '../_utils/components';
import { colorIds, colorVariations, colorBaseVariation } from '../../design-patterns/colors/_vars';
import { billboardSizes } from '../billboard/_vars';

if (__INCLUDE_CSS__) {
  require('./Billboard.scss');
}

const billboardSizeIds = billboardSizes.map(({ id }) => id);
const billboardSizeDefaultId = billboardSizes.find((size) => size.default).id;

const propTypes = {
  children: { node: true },
  color: { oneOf: [...colorIds] },
  image: { string: true },
  overlay: { bool: true },
  size: { oneOf: billboardSizeIds, default: billboardSizeDefaultId },
  variation: { oneOf: [...colorVariations], default: colorBaseVariation },
};

export class Billboard extends Component {
  static propTypes = propTypes;

  render() {
    const {
      className,
      children,
      image,
      color,
      variation = propTypes.variation.default,
      overlay,
      size = propTypes.size.default,
      ...rest,
    } = this.props;

    const classes = classnames(className,
      'ax-billboard', {
        [`ax-billboard--${color}--${variation}`]: color,
        [`ax-billboard--${size}`]: size,
        'ax-billboard--image': image,
        'ax-billboard--overlay': overlay === true,
      }
    );

    const style = {
      backgroundImage: image && `url('${image}')`,
    };

    return (
      <div { ...rest } className={ classes } style={ style }>
        { children }
      </div>
    );
  }
}

export default enhance(Billboard)(
  addPropTypes('global', 'text'),
  addClassName('global', 'text'),
);
