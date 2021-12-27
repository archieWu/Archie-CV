import styled from 'styled-components';

const PageWrapper = styled.div`
  div.animation {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
    // background-color: #e08958;
    position: fixed;
    top: 0;
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes fadeInside {
    to {
      stroke-dashoffset: 0px;
    }
  }
  @keyframes fill {
    form {
      fill: transparent;
    }

    to {
      fill: white;
    }
  }

  svg {
    animation: fill 1.5s ease-in forwards 2.4s;
  }

  #one {
    stroke-dasharray: 424px;
    stroke-dashoffset: 424px;
    animation: fadeInside 1s ease-in forwards;
  }

  #two {
    stroke-dasharray: 217;
    stroke-dashoffset: 217;
    animation: fadeInside 1s ease-in forwards 0.3s;
  }

  #three {
    stroke-dasharray: 337px;
    stroke-dashoffset: 337px;
    animation: fadeInside 1s ease-in forwards 0.6s;
  }

  #four {
    stroke-dasharray: 415px;
    stroke-dashoffset: 415px;
    animation: fadeInside 1s ease-in forwards 0.9s;
  }

  #five {
    stroke-dasharray: 233px;
    stroke-dashoffset: 233px;
    animation: fadeInside 1s ease-in forwards 1.2s;
  }

  #six {
    stroke-dasharray: 379px;
    stroke-dashoffset: 379px;
    animation: fadeInside 1s ease-in forwards 1.5s;
  }

  #seven {
    stroke-dasharray: 658px;
    stroke-dashoffset: 658px;
    animation: fadeInside 1s ease-in forwards 1.8s;
  }

  #eight {
    stroke-dasharray: 359px;
    stroke-dashoffset: 359px;
    animation: fadeInside 1s ease-in forwards 2.1s;
  }

  #nine {
    stroke-dasharray: 1376px;
    stroke-dashoffset: 1376px;
    animation: fadeInside 1s ease-in forwards 0.3s;
  }

  #ten {
    stroke-dasharray: 1124px;
    stroke-dashoffset: 1124px;
    animation: fadeInside 1s ease-in forwards 0.6s;
  }

  #eleven {
    stroke-dasharray: 919px;
    stroke-dashoffset: 919px;
    animation: fadeInside 1s ease-in forwards 0.9s;
  }

  #twelve {
    stroke-dasharray: 1382px;
    stroke-dashoffset: 1382px;
    animation: fadeInside 1s ease-in forwards 1.2s;
  }

  #thirteen {
    stroke-dasharray: 602px;
    stroke-dashoffset: 602px;
    animation: fadeInside 1s ease-in forwards 1.5s;
  }

  #fourteen {
    stroke-dasharray: 1274px;
    stroke-dashoffset: 1274px;
    animation: fadeInside 1s ease-in forwards 1.8s;
  }

  #fifteen {
    stroke-dasharray: 1203px;
    stroke-dashoffset: 1203px;
    animation: fadeInside 1s ease-in forwards 2.1s;
  }

`;


export {
  PageWrapper,
};
