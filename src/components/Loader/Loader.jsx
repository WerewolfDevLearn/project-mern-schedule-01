import { FallingLines } from 'react-loader-spinner';

import { DivloaderContainer } from '../Styled-Components/Styled-Components.styled';

export default function Loader() {
  return (
    <DivloaderContainer>
      <FallingLines color="#404040" width="100" visible={true} />
    </DivloaderContainer>
  );
}
