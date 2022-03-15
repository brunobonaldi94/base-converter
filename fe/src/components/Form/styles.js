import styled from 'styled-components';
import Button from '../Button';
import helpers from '../../styles/helpers';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }) => theme.spacing.small};
    box-shadow:  ${({ theme }) => theme.shadow.medium};
    padding: ${({ theme }) => theme.spacing.large};

    button{
        margin-top: ${({ theme }) => theme.spacing.medium};
    }
    input {
        ${helpers.responsive.s`
        font-size: 24px;
    `};
    }
`;

FormContainer.Title = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.small};
    padding: ${({ theme }) => theme.spacing.small} 0;
    border-bottom: 1px solid ${({ theme }) => helpers.hexToRgb(theme.defaultColors.black.normal, 0.1)};
    text-align: center;
`;

FormContainer.InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > *{
        margin-top: ${({ theme }) => theme.spacing.medium};
    }
    & > :first-child{
        margin-bottom: ${({ theme }) => theme.spacing.large};
    }

`;

FormContainer.SelectInput = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    input {
        ${helpers.responsive.s`
            font-size: 16px !important;
        `};
    }
   label {
    display: flex;
    align-items: center;
    justify-content:flex-end;
    width: 100%;
    margin-top: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => helpers.hexToRgb(theme.defaultColors.black.light, 0.8)};
 
    cursor: pointer;
    input[type=checkbox]{
        margin-left: ${({ theme }) => theme.spacing.small};
        width:auto;
    }
   }
`;

FormContainer.Button = styled(Button)`
    
`;

export const Error = styled.p`
    padding:${({ theme }) => theme.spacing.small} 4px;
    align-self:start;
    color:${({ theme }) => theme.defaultColors.red.normal};
`;
