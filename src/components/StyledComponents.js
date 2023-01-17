const StyledImg = styled.img`
  animation: bounce 0.5s ease-in-out;
  transform-origin: center center;

  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`;
