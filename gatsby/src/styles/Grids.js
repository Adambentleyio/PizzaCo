import styled from 'styled-components';

export const HomePageGrid = styled.div`
  display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));
  @media (max-width: 800px) {
    --columns: 1;
  }
`;

export const ItemsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  margin-top: 4rem;
`;

export const ItemStyles = styled.div`
  position: relative;
  text-align: center;
  img {
    height: auto;
    font-size: 0;
  }
  p {
    transform: rotate(-2deg) translateY(-50%);
    position: absolute;
    width: 100%;
    left: 0;
  }
  .mark {
    display: inline;
  }
  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }
  img.loading {
    --shine: rgba(200, 200, 200, 0.5);
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 800ms infinite linear;
  }
`;
