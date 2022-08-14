import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionBox = styled.section`
  margin-top: ${p => p.theme.space[4]}px;
`;

const Title = styled.p`
  display: flex;
  align-content: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Section = ({ title, children }) => (
  <SectionBox>
    <Title>{title}</Title>
    {children}
  </SectionBox>
);

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};
