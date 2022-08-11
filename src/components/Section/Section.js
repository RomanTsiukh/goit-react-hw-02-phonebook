import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionBox = styled.section`
  margin-bottom: 20px;
`;

const Title = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
`;

const Section = ({ title, children }) => (
  <SectionBox>
    <Title>{title}</Title>
    {children}
  </SectionBox>
);

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Section;
