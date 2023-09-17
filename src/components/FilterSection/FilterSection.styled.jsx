import styled from '@emotion/styled';

export const StyledForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: end;
    gap: 18px;
    margin-top: 30px;
    margin-bottom: 30px;
    
    & > label:first-of-type {
        width: 224px;
    }

    & > label:last-of-type {
        width: 135px;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: start;
`;

export const InputHeading = styled.span`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: background:#F7F7FB;
`;

export const selectStyles = {
  container: baseStyles => ({
    ...baseStyles,
    width: '100%',
  }),
  control: baseStyles => ({
    ...baseStyles,
    height: '46px',
    fontSize: '18px',
    fontWeight: '500',
    lineHeight: 'calc(20 / 18)',
    textAlign: 'left',
    backgroundColor: '#F7F7FB',
    borderRadius: '14px',
    border: '0',
    outline: '0',
    cursor: 'text',
  }),
  menuList: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
    height: '272px',
    padding: '14px 18px',
    marginTop: '4px',
    backgroundColor: `#F7F7FB`,
    border: `1px solid  #3470ff`,
    borderRadius: '14px',
    //  ============== scrollbar ==============
    '&::-webkit-scrollbar': {
      width: '26px',
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '13px',
      backgroundColor: `#F7F7FB`,
      border: `9px solid #ffffff`,
    },
    '&::-webkit-scrollbar-thumb:hover': {
      backgroundColor: `rgba(18, 20, 23, 0.20)`,
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    fontSize: '16px',
    lineHeight: 'calc(20 / 16)',
    textWrap: 'nowrap',
    padding: 0,
    color: state.isSelected
      ? `#121417`
      : `rgba(18, 20, 23, 0.20)`,
    '&:hover': {
      color: `#121417`,
    },
  }),
  indicatorsContainer: baseStyles => ({
    ...baseStyles,
    padding: '0 18px 0 6px',
  }),
  valueContainer: baseStyles => ({
    ...baseStyles,
    display: 'flex',
    flexWrap: 'no-wrap',
    height: '100%',
    padding: '0 0 0 18px',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    margin: '0',
    fontSize: '18px',
    fontWeight: '500',
    textAlign: 'left',
    textWrap: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#121417',
  }),
};

export const Fieldset = styled.fieldset`
    position: relative;
    width: 320px;
    height: 72px;
    margin: 0;
    padding: 0;
    border: 0;
`;

export const Legend = styled.legend`
    position: absolute;
    top: 0;
    left: 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #8A8A89;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: end;
    height: 100%;

    & > label:first-of-type {
        border-radius: 14px 0 0 14px;
        border-right: 1px solid rgba(138, 138, 137, 0.20);
    }

    & > label:last-of-type {
        border-radius: 0 14px 14px 0;
    }

    & > label:first-of-type > input {
        padding: 14px 24px 14px 70px;
    }

    & > label:last-of-type > input {
        padding: 14px 24px 14px 48px;
    }
`;

export const InputLabel = styled.label`
    position: relative;
    overflow: hidden;
`;

export const LabelText = styled.span`
    position: absolute;
    left: 24px;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
`;

export const NumberInput = styled.input`
    width: 160px;
    padding: 14px 24px 14px 70px;
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    color: #121417;
    background-color: #F7F7FB;
    border: 0;
    outline: 0;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        appearance: none;
    }
`;

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 18px;
`;