import css from '@emotion/css/macro';
import styled from '@emotion/styled/macro';

type AlertType = 'danger' | 'info' | 'success' | 'warning';

interface Props {
  type: AlertType;
}

const HUES = {
  danger: 0,
  info: 211,
  success: 105,
  warning: 45
};

const Alert = styled.div`
  padding: 10px 16px;
  margin-bottom: 24px;
  ${({type}: Props) => css`
    border-left: 4px solid hsl(${HUES[type]}, 100%, 45%);
    background: hsl(${HUES[type]}, 100%, 93%);
    color: hsl(${HUES[type]}, 100%, 40%);
  `}
`;

export default Alert;
