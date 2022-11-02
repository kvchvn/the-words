import { StandardProperties } from 'csstype';
import { css } from 'styled-components';

export const flex = (
  {
    direction,
    wrap,
    justify,
    align,
    gap,
  }: Partial<{
    direction: StandardProperties['flexDirection'];
    wrap: StandardProperties['flexWrap'];
    justify: StandardProperties['justifyContent'];
    align: StandardProperties['alignItems'];
    gap: StandardProperties['gap'];
  }> = { direction: 'row', wrap: 'nowrap', align: 'flex-start', justify: 'flex-start', gap: '0' }
) => css`
  display: flex;
  flex-wrap: ${wrap};
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  gap: ${gap};
`;
