import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    background: ${({ theme }) => theme.defaultColors.white.dark};
    border-radius:8px;
    padding:16px 32px;
    margin-top:32px;
    box-shadow: ${({ theme }) => theme.shadow.small};
    text-align:center;
    > * {
        padding:8px 0;
    }
`;

export const Title = styled.h2`
    width:100%;
    border-bottom:1px solid ${({ theme }) => theme.defaultColors.gray.gray1};
    font-weight:400;
`;

export const ResultValue = styled.p`
    width:100%;
    font-size:${({ theme }) => theme.typography.head.h3.fontSize};
    font-weight:700;
`;
