import styled from "styled-components";

export const Spinner = () => {
  return (
    <Container>
      <div className="spinner">
        <div className="spinner-circle spinner-circle-outer"></div>
        <div className="spinner-circle-off spinner-circle-inner"></div>
        <div className="spinner-circle spinner-circle-single-1"></div>
        <div className="spinner-circle spinner-circle-single-2"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  .spinner {
    display: inline-block;
    width: 51.2px;
    height: 51.2px;
    position: relative;
    top: 50%;
    margin-top: -25.6px;
    line-height: 100%;
  }
  .spinner .text {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    margin-top: 1.6em;
    text-align: center;
    font-size: 80%;
    color: hsla(0, 0%, 0%, 0.4);
  }
  .spinner .spinner-circle {
    position: absolute;
    background-color: transparent;
    -webkit-border-radius: 50%;
    border-radius: 50%;
    border-style: solid;
    border-color: #181818 transparent #181818 transparent;
  }
  .spinner .spinner-circle.spinner-circle-outer {
    width: 51.2px;
    height: 51.2px;
    border-width: 12.8px;
    top: -6.400000000000002px;
    left: -6.400000000000002px;
    opacity: 0.2;
    -ms-filter: alpha(opacity=50);
    filter: alpha(opacity=50);
    -webkit-animation: spinner-rotate-outer 2s 0s ease-in-out infinite;
    -moz-animation: spinner-rotate-outer 2s 0s ease-in-out infinite;
    -o-animation: spinner-rotate-outer 2s 0s ease-in-out infinite;
    -ms-animation: spinner-rotate-outer 2s 0s ease-in-out infinite;
    animation: spinner-rotate-outer 2s 0s ease-in-out infinite;
  }
  .spinner .spinner-circle.spinner-circle-inner {
    width: 25.6px;
    height: 25.6px;
    border-width: 6.4px;
    top: 12.799999999999999px;
    left: 12.799999999999999px;
    opacity: 0;
    -ms-filter: alpha(opacity=70);
    filter: alpha(opacity=70);
    -webkit-animation: spinner-rotate-inner 3s 0s linear infinite;
    -moz-animation: spinner-rotate-inner 3s 0s linear infinite;
    -o-animation: spinner-rotate-inner 3s 0s linear infinite;
    -ms-animation: spinner-rotate-inner 3s 0s linear infinite;
    animation: spinner-rotate-inner 3s 0s linear infinite;
  }
  .spinner .spinner-circle.spinner-circle-single-1 {
    width: 38.4px;
    height: 38.4px;
    border-width: 9.6px;
    top: 3.200000000000001px;
    left: 3.200000000000001px;
    opacity: 0.9;
    -ms-filter: alpha(opacity=30);
    filter: alpha(opacity=30);
    -webkit-animation: spinner-rotate-single-1 5s 0s ease-in-out infinite;
    -moz-animation: spinner-rotate-single-1 5s 0s ease-in-out infinite;
    -o-animation: spinner-rotate-single-1 5s 0s ease-in-out infinite;
    -ms-animation: spinner-rotate-single-1 5s 0s ease-in-out infinite;
    animation: spinner-rotate-single-1 5s 0s ease-in-out infinite;
    border-color: transparent transparent transparent #4dc3ff;
    -webkit-box-shadow: 2px 0 2px #4dc3ff;
    box-shadow: 2px 0 2px #4dc3ff;
  }
  .spinner .spinner-circle.spinner-circle-single-2 {
    width: 0;
    height: 0;
    border-width: 25.6px;
    top: 6.399999999999999px;
    left: 6.399999999999999px;
    opacity: 0;
    -ms-filter: alpha(opacity=30);
    filter: alpha(opacity=30);
    -webkit-animation: spinner-rotate-single-2 7s 0s ease-in-out infinite;
    -moz-animation: spinner-rotate-single-2 7s 0s ease-in-out infinite;
    -o-animation: spinner-rotate-single-2 7s 0s ease-in-out infinite;
    -ms-animation: spinner-rotate-single-2 7s 0s ease-in-out infinite;
    animation: spinner-rotate-single-2 7s 0s ease-in-out infinite;
    border-color: #4dc3ff transparent transparent transparent;
    -webkit-box-shadow: 0 -12px 4px #4dc3ff;
    box-shadow: 0 -12px 4px #4dc3ff;
  }
  @-moz-keyframes spinner-rotate-outer {
    0% {
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  @-webkit-keyframes spinner-rotate-outer {
    0% {
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  @-o-keyframes spinner-rotate-outer {
    0% {
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  @-ms-keyframes spinner-rotate-outer {
    0% {
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  @keyframes spinner-rotate-outer {
    0% {
      -webkit-transform: rotateZ(0deg);
      -moz-transform: rotateZ(0deg);
      -o-transform: rotateZ(0deg);
      -ms-transform: rotateZ(0deg);
      transform: rotateZ(0deg);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }
  @-moz-keyframes spinner-rotate-inner {
    0% {
      -webkit-transform: rotateZ(30deg);
      -moz-transform: rotateZ(30deg);
      -o-transform: rotateZ(30deg);
      -ms-transform: rotateZ(30deg);
      transform: rotateZ(30deg);
    }
    100% {
      -webkit-transform: rotateZ(390deg);
      -moz-transform: rotateZ(390deg);
      -o-transform: rotateZ(390deg);
      -ms-transform: rotateZ(390deg);
      transform: rotateZ(390deg);
    }
  }
  @-webkit-keyframes spinner-rotate-inner {
    0% {
      -webkit-transform: rotateZ(30deg);
      -moz-transform: rotateZ(30deg);
      -o-transform: rotateZ(30deg);
      -ms-transform: rotateZ(30deg);
      transform: rotateZ(30deg);
    }
    100% {
      -webkit-transform: rotateZ(390deg);
      -moz-transform: rotateZ(390deg);
      -o-transform: rotateZ(390deg);
      -ms-transform: rotateZ(390deg);
      transform: rotateZ(390deg);
    }
  }
  @-o-keyframes spinner-rotate-inner {
    0% {
      -webkit-transform: rotateZ(30deg);
      -moz-transform: rotateZ(30deg);
      -o-transform: rotateZ(30deg);
      -ms-transform: rotateZ(30deg);
      transform: rotateZ(30deg);
    }
    100% {
      -webkit-transform: rotateZ(390deg);
      -moz-transform: rotateZ(390deg);
      -o-transform: rotateZ(390deg);
      -ms-transform: rotateZ(390deg);
      transform: rotateZ(390deg);
    }
  }
  @-ms-keyframes spinner-rotate-inner {
    0% {
      -webkit-transform: rotateZ(30deg);
      -moz-transform: rotateZ(30deg);
      -o-transform: rotateZ(30deg);
      -ms-transform: rotateZ(30deg);
      transform: rotateZ(30deg);
    }
    100% {
      -webkit-transform: rotateZ(390deg);
      -moz-transform: rotateZ(390deg);
      -o-transform: rotateZ(390deg);
      -ms-transform: rotateZ(390deg);
      transform: rotateZ(390deg);
    }
  }
  @keyframes spinner-rotate-inner {
    0% {
      -webkit-transform: rotateZ(30deg);
      -moz-transform: rotateZ(30deg);
      -o-transform: rotateZ(30deg);
      -ms-transform: rotateZ(30deg);
      transform: rotateZ(30deg);
    }
    100% {
      -webkit-transform: rotateZ(390deg);
      -moz-transform: rotateZ(390deg);
      -o-transform: rotateZ(390deg);
      -ms-transform: rotateZ(390deg);
      transform: rotateZ(390deg);
    }
  }
  @-moz-keyframes spinner-rotate-single-1 {
    0% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
    20% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    40% {
      -webkit-transform: rotateZ(-250deg);
      -moz-transform: rotateZ(-250deg);
      -o-transform: rotateZ(-250deg);
      -ms-transform: rotateZ(-250deg);
      transform: rotateZ(-250deg);
    }
    60% {
      -webkit-transform: rotateZ(40deg);
      -moz-transform: rotateZ(40deg);
      -o-transform: rotateZ(40deg);
      -ms-transform: rotateZ(40deg);
      transform: rotateZ(40deg);
    }
    70% {
      -webkit-transform: rotateZ(-80deg);
      -moz-transform: rotateZ(-80deg);
      -o-transform: rotateZ(-80deg);
      -ms-transform: rotateZ(-80deg);
      transform: rotateZ(-80deg);
    }
    100% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
  }
  @-webkit-keyframes spinner-rotate-single-1 {
    0% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
    20% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    40% {
      -webkit-transform: rotateZ(-250deg);
      -moz-transform: rotateZ(-250deg);
      -o-transform: rotateZ(-250deg);
      -ms-transform: rotateZ(-250deg);
      transform: rotateZ(-250deg);
    }
    60% {
      -webkit-transform: rotateZ(40deg);
      -moz-transform: rotateZ(40deg);
      -o-transform: rotateZ(40deg);
      -ms-transform: rotateZ(40deg);
      transform: rotateZ(40deg);
    }
    70% {
      -webkit-transform: rotateZ(-80deg);
      -moz-transform: rotateZ(-80deg);
      -o-transform: rotateZ(-80deg);
      -ms-transform: rotateZ(-80deg);
      transform: rotateZ(-80deg);
    }
    100% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
  }
  @-o-keyframes spinner-rotate-single-1 {
    0% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
    20% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    40% {
      -webkit-transform: rotateZ(-250deg);
      -moz-transform: rotateZ(-250deg);
      -o-transform: rotateZ(-250deg);
      -ms-transform: rotateZ(-250deg);
      transform: rotateZ(-250deg);
    }
    60% {
      -webkit-transform: rotateZ(40deg);
      -moz-transform: rotateZ(40deg);
      -o-transform: rotateZ(40deg);
      -ms-transform: rotateZ(40deg);
      transform: rotateZ(40deg);
    }
    70% {
      -webkit-transform: rotateZ(-80deg);
      -moz-transform: rotateZ(-80deg);
      -o-transform: rotateZ(-80deg);
      -ms-transform: rotateZ(-80deg);
      transform: rotateZ(-80deg);
    }
    100% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
  }
  @-ms-keyframes spinner-rotate-single-1 {
    0% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
    20% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    40% {
      -webkit-transform: rotateZ(-250deg);
      -moz-transform: rotateZ(-250deg);
      -o-transform: rotateZ(-250deg);
      -ms-transform: rotateZ(-250deg);
      transform: rotateZ(-250deg);
    }
    60% {
      -webkit-transform: rotateZ(40deg);
      -moz-transform: rotateZ(40deg);
      -o-transform: rotateZ(40deg);
      -ms-transform: rotateZ(40deg);
      transform: rotateZ(40deg);
    }
    70% {
      -webkit-transform: rotateZ(-80deg);
      -moz-transform: rotateZ(-80deg);
      -o-transform: rotateZ(-80deg);
      -ms-transform: rotateZ(-80deg);
      transform: rotateZ(-80deg);
    }
    100% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
  }
  @keyframes spinner-rotate-single-1 {
    0% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
    20% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    40% {
      -webkit-transform: rotateZ(-250deg);
      -moz-transform: rotateZ(-250deg);
      -o-transform: rotateZ(-250deg);
      -ms-transform: rotateZ(-250deg);
      transform: rotateZ(-250deg);
    }
    60% {
      -webkit-transform: rotateZ(40deg);
      -moz-transform: rotateZ(40deg);
      -o-transform: rotateZ(40deg);
      -ms-transform: rotateZ(40deg);
      transform: rotateZ(40deg);
    }
    70% {
      -webkit-transform: rotateZ(-80deg);
      -moz-transform: rotateZ(-80deg);
      -o-transform: rotateZ(-80deg);
      -ms-transform: rotateZ(-80deg);
      transform: rotateZ(-80deg);
    }
    100% {
      -webkit-transform: rotateZ(56deg);
      -moz-transform: rotateZ(56deg);
      -o-transform: rotateZ(56deg);
      -ms-transform: rotateZ(56deg);
      transform: rotateZ(56deg);
    }
  }
  @-moz-keyframes spinner-rotate-single-2 {
    0% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
    10% {
      -webkit-transform: rotateZ(142deg);
      -moz-transform: rotateZ(142deg);
      -o-transform: rotateZ(142deg);
      -ms-transform: rotateZ(142deg);
      transform: rotateZ(142deg);
    }
    20% {
      -webkit-transform: rotateZ(-87deg);
      -moz-transform: rotateZ(-87deg);
      -o-transform: rotateZ(-87deg);
      -ms-transform: rotateZ(-87deg);
      transform: rotateZ(-87deg);
    }
    30% {
      -webkit-transform: rotateZ(-345deg);
      -moz-transform: rotateZ(-345deg);
      -o-transform: rotateZ(-345deg);
      -ms-transform: rotateZ(-345deg);
      transform: rotateZ(-345deg);
    }
    40% {
      -webkit-transform: rotateZ(86deg);
      -moz-transform: rotateZ(86deg);
      -o-transform: rotateZ(86deg);
      -ms-transform: rotateZ(86deg);
      transform: rotateZ(86deg);
    }
    50% {
      -webkit-transform: rotateZ(175deg);
      -moz-transform: rotateZ(175deg);
      -o-transform: rotateZ(175deg);
      -ms-transform: rotateZ(175deg);
      transform: rotateZ(175deg);
    }
    60% {
      -webkit-transform: rotateZ(-245deg);
      -moz-transform: rotateZ(-245deg);
      -o-transform: rotateZ(-245deg);
      -ms-transform: rotateZ(-245deg);
      transform: rotateZ(-245deg);
    }
    70% {
      -webkit-transform: rotateZ(4deg);
      -moz-transform: rotateZ(4deg);
      -o-transform: rotateZ(4deg);
      -ms-transform: rotateZ(4deg);
      transform: rotateZ(4deg);
    }
    80% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    90% {
      -webkit-transform: rotateZ(345deg);
      -moz-transform: rotateZ(345deg);
      -o-transform: rotateZ(345deg);
      -ms-transform: rotateZ(345deg);
      transform: rotateZ(345deg);
    }
    100% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
  }
  @-webkit-keyframes spinner-rotate-single-2 {
    0% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
    10% {
      -webkit-transform: rotateZ(142deg);
      -moz-transform: rotateZ(142deg);
      -o-transform: rotateZ(142deg);
      -ms-transform: rotateZ(142deg);
      transform: rotateZ(142deg);
    }
    20% {
      -webkit-transform: rotateZ(-87deg);
      -moz-transform: rotateZ(-87deg);
      -o-transform: rotateZ(-87deg);
      -ms-transform: rotateZ(-87deg);
      transform: rotateZ(-87deg);
    }
    30% {
      -webkit-transform: rotateZ(-345deg);
      -moz-transform: rotateZ(-345deg);
      -o-transform: rotateZ(-345deg);
      -ms-transform: rotateZ(-345deg);
      transform: rotateZ(-345deg);
    }
    40% {
      -webkit-transform: rotateZ(86deg);
      -moz-transform: rotateZ(86deg);
      -o-transform: rotateZ(86deg);
      -ms-transform: rotateZ(86deg);
      transform: rotateZ(86deg);
    }
    50% {
      -webkit-transform: rotateZ(175deg);
      -moz-transform: rotateZ(175deg);
      -o-transform: rotateZ(175deg);
      -ms-transform: rotateZ(175deg);
      transform: rotateZ(175deg);
    }
    60% {
      -webkit-transform: rotateZ(-245deg);
      -moz-transform: rotateZ(-245deg);
      -o-transform: rotateZ(-245deg);
      -ms-transform: rotateZ(-245deg);
      transform: rotateZ(-245deg);
    }
    70% {
      -webkit-transform: rotateZ(4deg);
      -moz-transform: rotateZ(4deg);
      -o-transform: rotateZ(4deg);
      -ms-transform: rotateZ(4deg);
      transform: rotateZ(4deg);
    }
    80% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    90% {
      -webkit-transform: rotateZ(345deg);
      -moz-transform: rotateZ(345deg);
      -o-transform: rotateZ(345deg);
      -ms-transform: rotateZ(345deg);
      transform: rotateZ(345deg);
    }
    100% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
  }
  @-o-keyframes spinner-rotate-single-2 {
    0% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
    10% {
      -webkit-transform: rotateZ(142deg);
      -moz-transform: rotateZ(142deg);
      -o-transform: rotateZ(142deg);
      -ms-transform: rotateZ(142deg);
      transform: rotateZ(142deg);
    }
    20% {
      -webkit-transform: rotateZ(-87deg);
      -moz-transform: rotateZ(-87deg);
      -o-transform: rotateZ(-87deg);
      -ms-transform: rotateZ(-87deg);
      transform: rotateZ(-87deg);
    }
    30% {
      -webkit-transform: rotateZ(-345deg);
      -moz-transform: rotateZ(-345deg);
      -o-transform: rotateZ(-345deg);
      -ms-transform: rotateZ(-345deg);
      transform: rotateZ(-345deg);
    }
    40% {
      -webkit-transform: rotateZ(86deg);
      -moz-transform: rotateZ(86deg);
      -o-transform: rotateZ(86deg);
      -ms-transform: rotateZ(86deg);
      transform: rotateZ(86deg);
    }
    50% {
      -webkit-transform: rotateZ(175deg);
      -moz-transform: rotateZ(175deg);
      -o-transform: rotateZ(175deg);
      -ms-transform: rotateZ(175deg);
      transform: rotateZ(175deg);
    }
    60% {
      -webkit-transform: rotateZ(-245deg);
      -moz-transform: rotateZ(-245deg);
      -o-transform: rotateZ(-245deg);
      -ms-transform: rotateZ(-245deg);
      transform: rotateZ(-245deg);
    }
    70% {
      -webkit-transform: rotateZ(4deg);
      -moz-transform: rotateZ(4deg);
      -o-transform: rotateZ(4deg);
      -ms-transform: rotateZ(4deg);
      transform: rotateZ(4deg);
    }
    80% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    90% {
      -webkit-transform: rotateZ(345deg);
      -moz-transform: rotateZ(345deg);
      -o-transform: rotateZ(345deg);
      -ms-transform: rotateZ(345deg);
      transform: rotateZ(345deg);
    }
    100% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
  }
  @-ms-keyframes spinner-rotate-single-2 {
    0% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
    10% {
      -webkit-transform: rotateZ(142deg);
      -moz-transform: rotateZ(142deg);
      -o-transform: rotateZ(142deg);
      -ms-transform: rotateZ(142deg);
      transform: rotateZ(142deg);
    }
    20% {
      -webkit-transform: rotateZ(-87deg);
      -moz-transform: rotateZ(-87deg);
      -o-transform: rotateZ(-87deg);
      -ms-transform: rotateZ(-87deg);
      transform: rotateZ(-87deg);
    }
    30% {
      -webkit-transform: rotateZ(-345deg);
      -moz-transform: rotateZ(-345deg);
      -o-transform: rotateZ(-345deg);
      -ms-transform: rotateZ(-345deg);
      transform: rotateZ(-345deg);
    }
    40% {
      -webkit-transform: rotateZ(86deg);
      -moz-transform: rotateZ(86deg);
      -o-transform: rotateZ(86deg);
      -ms-transform: rotateZ(86deg);
      transform: rotateZ(86deg);
    }
    50% {
      -webkit-transform: rotateZ(175deg);
      -moz-transform: rotateZ(175deg);
      -o-transform: rotateZ(175deg);
      -ms-transform: rotateZ(175deg);
      transform: rotateZ(175deg);
    }
    60% {
      -webkit-transform: rotateZ(-245deg);
      -moz-transform: rotateZ(-245deg);
      -o-transform: rotateZ(-245deg);
      -ms-transform: rotateZ(-245deg);
      transform: rotateZ(-245deg);
    }
    70% {
      -webkit-transform: rotateZ(4deg);
      -moz-transform: rotateZ(4deg);
      -o-transform: rotateZ(4deg);
      -ms-transform: rotateZ(4deg);
      transform: rotateZ(4deg);
    }
    80% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    90% {
      -webkit-transform: rotateZ(345deg);
      -moz-transform: rotateZ(345deg);
      -o-transform: rotateZ(345deg);
      -ms-transform: rotateZ(345deg);
      transform: rotateZ(345deg);
    }
    100% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
  }
  @keyframes spinner-rotate-single-2 {
    0% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
    10% {
      -webkit-transform: rotateZ(142deg);
      -moz-transform: rotateZ(142deg);
      -o-transform: rotateZ(142deg);
      -ms-transform: rotateZ(142deg);
      transform: rotateZ(142deg);
    }
    20% {
      -webkit-transform: rotateZ(-87deg);
      -moz-transform: rotateZ(-87deg);
      -o-transform: rotateZ(-87deg);
      -ms-transform: rotateZ(-87deg);
      transform: rotateZ(-87deg);
    }
    30% {
      -webkit-transform: rotateZ(-345deg);
      -moz-transform: rotateZ(-345deg);
      -o-transform: rotateZ(-345deg);
      -ms-transform: rotateZ(-345deg);
      transform: rotateZ(-345deg);
    }
    40% {
      -webkit-transform: rotateZ(86deg);
      -moz-transform: rotateZ(86deg);
      -o-transform: rotateZ(86deg);
      -ms-transform: rotateZ(86deg);
      transform: rotateZ(86deg);
    }
    50% {
      -webkit-transform: rotateZ(175deg);
      -moz-transform: rotateZ(175deg);
      -o-transform: rotateZ(175deg);
      -ms-transform: rotateZ(175deg);
      transform: rotateZ(175deg);
    }
    60% {
      -webkit-transform: rotateZ(-245deg);
      -moz-transform: rotateZ(-245deg);
      -o-transform: rotateZ(-245deg);
      -ms-transform: rotateZ(-245deg);
      transform: rotateZ(-245deg);
    }
    70% {
      -webkit-transform: rotateZ(4deg);
      -moz-transform: rotateZ(4deg);
      -o-transform: rotateZ(4deg);
      -ms-transform: rotateZ(4deg);
      transform: rotateZ(4deg);
    }
    80% {
      -webkit-transform: rotateZ(-132deg);
      -moz-transform: rotateZ(-132deg);
      -o-transform: rotateZ(-132deg);
      -ms-transform: rotateZ(-132deg);
      transform: rotateZ(-132deg);
    }
    90% {
      -webkit-transform: rotateZ(345deg);
      -moz-transform: rotateZ(345deg);
      -o-transform: rotateZ(345deg);
      -ms-transform: rotateZ(345deg);
      transform: rotateZ(345deg);
    }
    100% {
      -webkit-transform: rotateZ(-24deg);
      -moz-transform: rotateZ(-24deg);
      -o-transform: rotateZ(-24deg);
      -ms-transform: rotateZ(-24deg);
      transform: rotateZ(-24deg);
    }
  }
`;
