import { Puff } from 'react-loader-spinner';

import { DivloaderContainer } from '../../Styled-Components/Styled-Components.styled';

export default function Loader() {
  return (
    <DivloaderContainer>
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#5b7cf2"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      {/* <Puff color="#404040" width="100" visible={true} /> */}
    </DivloaderContainer>
  );
}
