import styled, { keyframes } from 'styled-components';
import helpers from '../../styles/helpers';

export const Wrapper = styled.div`
  z-index: 999;
  position:absolute;
  top:0;
  right:0;
  width:fit-content;
  height:100%;
`;

const OctocatWave = keyframes`
    0%,100%{transform:rotate(0)}
    20%,60%{transform:rotate(-25deg)}
    40%,80%{transform:rotate(10deg)}
`;

export const SVGWrapper = styled.svg`
  fill: ${({ theme }) => theme.defaultColors.primary.normal};
  color: ${({ theme }) => theme.defaultColors.white.normal};
  height:100%;
  cursor: pointer;

  &:hover .octo-arm{
    animation: ${OctocatWave} 560ms ease;
  }

  ${helpers.responsive.xs`
    &:hover .octo-arm{
      animation:none
    }
    & .octo-arm{
      animation:${OctocatWave} 560ms ease;
    }
  `}
`;
