import styled from 'styled-components';
import { rem } from 'polished';
import media from 'utils/media';

import Text from 'components/Text';
import { COLORS } from 'config';

export const TableWrapper = styled(Text).attrs({
  as: 'div',
  color: 'black',
  fontSize: [1, 2],
  heavy: true,
})`
  overflow-x: auto;
`;

export default styled.table`
  width: 100%;
  border-bottom: 1px solid #787A7D;
  min-width: ${rem(480)};

  td, th {
    border-top: 1px solid #787A7D;
    height: ${rem(40)};

    ${media.sm.css`
      height: ${rem(50)};
    `}
  }

  a {
    color: ${COLORS.base};
  }
`;
