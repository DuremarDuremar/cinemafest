import styled from "styled-components";
import { Link } from "react-router-dom";

import { respon } from "../variables";

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media ${respon.mdMax} {
    grid-template-columns: repeat(2, 1fr);
  }

  grid-gap: 10px;
  padding: 20px 5px 15px;
`;

export const Item = styled.div`
  margin: 0px auto;
  background-color: #2f3542;

  @media ${respon.mdMin} {
    &:hover {
      background-color: rgb(47, 53, 66, 0.4);
    }
    transition: all 0.5s ease-out;
  }

  @media ${respon.mdMax} {
    background-color: black;
  }
  max-width: 300px;
  width: 100%;
`;

export const Info = styled.div<{
  fs: string;
}>`
  color: #fff;
  max-width: 300px;

  span {
    &:first-child {
      font-size: ${({ fs }) => `calc(1vw + ${fs})`};
    }

    &:last-child {
      font-style: italic;
      font-size: ${({ fs }) => `calc(0.7vw + ${fs})`};
    }
  }
`;

export const Image = styled(Link)`
  img {
    max-height: 400px;
    max-width: 280px;
    width: 100%;
  }
`;
