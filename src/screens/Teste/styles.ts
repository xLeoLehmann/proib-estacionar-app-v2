import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 24px;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.TEXT};
  color: ${({ theme }) => theme.COLORS.SUBTEXT};
  text-align: center;
  margin: 12px 0 24px;
`;