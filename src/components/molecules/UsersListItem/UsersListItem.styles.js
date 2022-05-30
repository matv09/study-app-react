import styled from 'styled-components';


export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
`;

export const StyledAverage = styled.p`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: 10px;
  margin-right: 20px;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({value, theme}) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value > 2) return theme.colors.error;
  }};
`;

export const StyledInfo = styled.div`
  padding: 25px 20px;
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
  p:first-child {
    display: flex;
    align-items: center;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  p:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;