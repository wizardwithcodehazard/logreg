import styled from 'styled-components';

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 20px; /* Reduced padding */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  max-width: 350px; /* Reduced max-width for smaller size */
  text-align: left;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

export default GlassCard;
