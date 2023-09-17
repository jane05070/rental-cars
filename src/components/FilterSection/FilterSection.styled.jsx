import styled from '@emotion/styled';



export const FilterForm = styled.form`
  display: flex;
  gap: 18px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.28;
  color: #12141780;
  
  
`;

export const FormInput = styled.input`
  padding: 14px 18px;
  border-radius: 14px;
  

  border: none;
  background-color: #F7F7FB;

  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;

  &::placeholder {
    color: #121417;
  }
`;

export const DataList = styled.datalist`
  width: 100%;
  background-color: #121417;
`;

export const MileageInput = styled(FormInput)`
  width: 160px;
  

  &:first-of-type {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 1px solid #8A8A8933;
  }

  &:nth-of-type(2) {
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  width: 136px;
  display: flex;
height: 48px;
padding: 14px 44px;
justify - content: center;
align - items: center;
flex - shrink: 0;

border - radius: 12px;
cursor: pointer;
border: none;
background: #3470ff;

color: #fff;
font - family: Manrope;
font - size: 14px;
font - weight: 600;
line - height: 1.43;
transition: background - color 250ms cubic - bezier(0.4, 0, 0.2, 1);

  &: hover,
  &:focus {
  background - color: #0b44cd;
}
`;