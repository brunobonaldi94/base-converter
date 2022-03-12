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

    input + select, select + select {
        margin-top: ${({ theme }) => theme.spacing.small};
    }

    button{
        margin-top: ${({ theme }) => theme.spacing.medium};
    }
`;

FormContainer.Title = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.large};
    padding: ${({ theme }) => theme.spacing.small} 0;
    border-bottom: 1px solid ${({ theme }) => helpers.hexToRgb(theme.defaultColors.black.normal, 0.1)};

`;

FormContainer.InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

FormContainer.Button = styled(Button)`
    
`;

export const Error = styled.p`
    padding:${({ theme }) => theme.spacing.small} 4px;
    align-self:start;
    color:${({ theme }) => theme.defaultColors.red.normal};
`;
