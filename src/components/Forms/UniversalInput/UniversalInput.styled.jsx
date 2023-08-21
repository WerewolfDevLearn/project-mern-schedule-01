import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const InputField = styled(Field)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  width: 200px;

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border: 1px solid rgba(17, 17, 17, 15%);
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;

    &:hover {
      border: 1px solid black;
    }
  }
`;

// export const DateInput = styled(DatePicker)`
//   font-size: 14px;
//   line-height: 1.29;
//   font-weight: 600;
//   letter-spacing: -0.02em;
//   border: 1px solid rgba(17, 17, 17, 15%);
//   border-radius: 8px;
//   margin-bottom: 8px;
//   padding: 0 18px;
//   color: #111111;
//   width: 200px;

//   @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
//     width: 299px;
//     height: 42px;
//   }

//   @media screen and (${themes.breakpoints.m} <= width) {
//     font-size: 16px;
//     line-height: 1.13;
//     width: 354px;
//     height: 46px;
//     border: 1px solid rgba(17, 17, 17, 15%);
//     border-radius: 8px;
//     padding: 0 18px;

//     &:hover {
//       border: 1px solid black;
//     }
//   }

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.r};
  line-height: 14px;
  padding-left: 14px;
  color: red;
  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
  }

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding-left: 18px;
  }
`;
