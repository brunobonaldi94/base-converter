import { css } from 'styled-components';

export default class UIHelpers {
  static hexToRgb(hex, opacity) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16,
      )},${opacity})`
      : null;
  }

  static breakpoints = {
    xl: '1440px',
    l: '1140px',
    m: '960px',
    s: '540px',
    xs: '540px',
  };

  static responsive = Object.keys(this.breakpoints).reduce(
    (accumulator, label) => {
      if (label === 'xl') {
        accumulator[label] = (...args) => css`
          @media (min-width: ${this.breakpoints[label]}) {
            ${css(...args)};
          }
        `;
      } else if (label === 'l') {
        accumulator[label] = (...args) => css`
          @media (max-width: ${this.breakpoints.xl}) and (min-width: ${this.breakpoints[label]}) {
            ${css(...args)};
          }
        `;
      } else if (label === 'm') {
        accumulator[label] = (...args) => css`
          @media (max-width: ${this.breakpoints.l}) and (min-width: ${this.breakpoints[label]}) {
            ${css(...args)};
          }
        `;
      } else if (label === 's') {
        accumulator[label] = (...args) => css`
          @media (max-width: ${this.breakpoints.m}) {
            ${css(...args)};
          }
        `;
      } else if (label === 'xs') {
        accumulator[label] = (...args) => css`
          @media (max-width: ${this.breakpoints.s}) {
            ${css(...args)};
          }
        `;
      }
      return accumulator;
    },
    {},
  );
}
