import styled from 'styled-components';
import Button from '../Button';

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

    input, select{
        font-size: ${({ theme }) => theme.typography.body.b1.fontSize};
        width: 100%;
        border-radius: 4px;
        background-color: ${({ theme }) => theme.defaultColors.white.light};
        outline: none;
        border: 1px solid transparent;
        padding: ${({ theme }) => theme.spacing.small};
        box-shadow: ${({ theme }) => theme.shadow.medium};
        transition: all 0.3s ease;
        &:focus{
            border-color: ${({ theme }) => theme.defaultColors.primary.normal};
        }
    }
    input{
        background: transparent;
        font-size: ${({ theme }) => theme.typography.head.h3.fontSize};
        text-align: center;
    }
    button{
        margin-top: ${({ theme }) => theme.spacing.medium};
    }
`;

FormContainer.Title = styled.h2`
    margin-bottom: ${({ theme }) => theme.spacing.large};


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
