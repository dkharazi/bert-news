import styled from 'styled-components';
import Tab from '@material-ui/core/Tab';

const NewsTab = styled(Tab)`
  ${({ theme }) => `
  max-width: 1rem !important;
  min-width: 8rem !important;
  font-weight: bold !important;
  `}
`;

export default NewsTab;
