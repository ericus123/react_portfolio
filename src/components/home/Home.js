import React, { Component } from "react";
import "../scss/styles.scss";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";
import { Link } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-free-solid";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/fontawesome-free-regular";
import { Helmet } from "react-helmet";
import ScrolButton from "../reusables/ScrollUp";

const Home = () => {
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
  });

  /*SCROLL HOME*/
  sr.reveal(".home__title", {});
  sr.reveal(".button", { delay: 200 });
  sr.reveal(".home__img", { delay: 400 });
  sr.reveal(".home__social-icon", { interval: 200 });

  /*SCROLL ABOUT*/
  sr.reveal(".about__img", {});
  sr.reveal(".about__subtitle", { delay: 400 });
  sr.reveal(".about__text", { delay: 400 });

  // /*SCROLL SKILLS*/
  // sr.reveal(".skills__subtitle", {});
  // sr.reveal(".skills__text", {});
  // sr.reveal(".skills__data", { interval: 200 });
  // sr.reveal(".skills__img", { delay: 600 });

  // /*SCROLL WORK*/
  // sr.reveal(".work__img", { interval: 200 });

  // /*SCROLL CONTACT*/
  // sr.reveal(".contact__input", { interval: 200 });

  const scrolToSection = (id) => {
    const anchor = document.querySelector(id);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <>
      <div className="home bd-grid" id="home">
        <ScrolButton />
        <Helmet>
          {" "}
          <meta
            name="keywords"
            content="web developer, programmer, react, noed js, js , rwanda, kigali"
          />
          <meta
            name="description"
            content="A web designer/developer focused on crafting great web experiences."
          />
        </Helmet>
        <div className="home__data">
          <h1 className="home__title">
            Hi,
            <br />
            I'am <span className="home__title-color">Amani</span>
            <br /> Web Developer
          </h1>
          <Link
            to={"#contact"}
            style={{ textDecoration: "none" }}
            className="button"
            onClick={() => {
              scrolToSection("#contact");
            }}
          >
            Contact
          </Link>
        </div>

        <div className="home__social">
          <a href="#" className="footer__icon">
            <i>
              <FontAwesomeIcon style={{ color: "#212529" }} icon={faTwitter} />
            </i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/amani-eric-b45986172/"
            className="footer__icon"
          >
            <i>
              <FontAwesomeIcon
                style={{ color: "#212529" }}
                icon={faLinkedinIn}
              />
            </i>
          </a>

          <a
            target="_blank"
            href="https://github.com/ericus123"
            className="footer__icon"
          >
            <i>
              <FontAwesomeIcon style={{ color: "#212529" }} icon={faGithub} />
            </i>
          </a>
        </div>

        <div className="home__img">
          <svg
            width="210"
            height="267"
            viewBox="0 0 210 267"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="210" height="267" fill="none" />
            <path
              d="M207.891 245.225C207.428 243.34 206.965 241.434 206.038 239.794C205.179 238.403 204.158 237.148 203.004 236.06C199.645 232.634 195.522 229.156 191.069 230.02C189.692 230.363 188.362 230.909 187.113 231.645C186.464 231.983 185.811 232.322 185.144 232.608C183.266 233.491 181.19 233.694 179.205 233.191C178.185 232.884 177.236 232.332 176.23 231.989C175.753 231.827 175.265 231.709 174.771 231.635C175.742 231.146 176.685 230.588 177.592 229.963C182.587 226.527 186.571 220.315 186.015 213.671C185.825 211.437 185.144 209.297 184.467 207.188L182.688 201.658C181.919 199.263 181.123 196.821 179.719 194.832C178.157 192.614 175.934 191.109 173.636 189.99C168.702 187.579 163.309 186.73 157.986 185.908L157.615 185.85V121.217C157.615 120.112 157.225 119.053 156.53 118.271C155.835 117.49 154.892 117.051 153.909 117.051H146.913C146.604 114.927 146.296 112.806 145.987 110.689C145.106 104.643 144.194 98.4888 141.715 93.0476C140.094 89.4861 137.513 86.086 134.034 85.3882C133.35 85.3189 132.678 85.1437 132.037 84.8675C131.018 84.3052 130.462 83.0555 129.679 82.1339C127.659 79.7544 124.374 79.7179 121.669 78.4891C119.278 77.4217 117.323 75.4118 115.146 73.8654C112.968 72.3189 110.263 71.2202 107.853 72.2252C107.853 72.423 107.821 72.6209 107.802 72.8136L106.255 72.0117C104.587 71.1421 102.887 70.2518 101.548 68.8251C99.8293 67.0027 98.912 64.5866 98.1985 62.0196C98.1244 61.7541 98.0549 61.499 97.9808 61.2126C100.942 57.8171 102.947 53.5156 103.744 48.8462L104.119 50.2156C104.204 50.5233 104.303 50.8257 104.416 51.1216C104.607 51.6938 104.926 52.2012 105.342 52.5952C105.461 52.6999 105.592 52.7857 105.732 52.8503C105.86 52.9073 105.993 52.9458 106.13 52.9648C106.322 52.9916 106.518 52.9757 106.704 52.918C107.018 52.809 107.305 52.6223 107.546 52.3718C107.786 52.1213 107.974 51.8133 108.094 51.4705C108.168 51.2658 108.223 51.0528 108.257 50.8352C108.274 50.7042 108.285 50.572 108.289 50.4395C108.289 50.3978 108.289 50.3562 108.289 50.3145C108.289 50.2729 108.289 50.1323 108.289 50.0438C108.289 49.9552 108.289 49.95 108.289 49.898C108.289 49.8459 108.289 49.7261 108.266 49.6376V49.5023C108.266 49.3981 108.238 49.294 108.219 49.195C108.201 49.0961 108.219 49.1378 108.219 49.1117C108.196 48.9816 108.168 48.8462 108.145 48.716C108.145 48.6848 108.145 48.6483 108.145 48.6171C108.145 48.5858 108.104 48.4036 108.08 48.2942C108.057 48.1849 108.048 48.1537 108.034 48.0808V48.0495C107.988 47.8412 107.946 47.6382 107.904 47.4299C107.568 45.6228 107.482 43.768 107.65 41.9314C107.927 39.2361 108.37 36.5655 108.975 33.9388L109.072 33.465C109.109 33.2827 109.146 33.1005 109.178 32.913C109.253 32.5381 109.327 32.1633 109.396 31.7832L109.563 30.8251L109.688 29.9711V29.8618C109.948 27.9268 110.003 25.9639 109.85 24.0144V24.0144C109.637 21.2912 108.887 18.7138 107.242 16.6623C106.079 15.2096 104.546 14.1369 103.466 12.6113C102.456 11.1846 101.886 9.4247 100.839 8.02404C97.9483 4.1449 90.5265 1.15613 85.9723 0.635442C80.7557 0.0418544 72.3285 1.54144 68.1218 5.00403C66.5652 6.27972 65.4996 8.12818 64.4155 9.8777C62.4234 13.132 60.1625 16.3811 56.9705 18.2087C55.7659 18.8961 54.3853 19.4167 53.5838 20.6143C53.107 21.4261 52.7983 22.3478 52.6804 23.3115C52.0666 26.7018 51.747 30.1511 51.726 33.6108V33.6108C51.726 34.0429 51.726 34.4751 51.726 34.9125C51.7355 36.2097 51.9815 37.4909 52.4488 38.6771C52.5229 38.8541 52.6063 39.026 52.6943 39.1978L52.7499 39.3071C53.3103 40.2074 53.806 41.1563 54.2324 42.1449C54.3387 42.4217 54.4149 42.7119 54.4594 43.0092C54.5388 43.772 54.4949 44.5446 54.3297 45.2899V45.2899C54.3297 45.4044 54.288 45.519 54.2695 45.6335L54.2278 45.8574C54.2278 45.9355 54.2278 46.0136 54.1907 46.0865C54.1537 46.3104 54.1212 46.5343 54.0934 46.753C54.0232 47.3553 54.0578 47.9672 54.1954 48.5546C54.2588 48.8819 54.3833 49.1903 54.5606 49.4596C54.7379 49.7288 54.9639 49.9528 55.2239 50.1167C55.4878 50.2589 55.7687 50.3571 56.0578 50.4082C56.3497 50.4655 56.6462 50.502 56.9334 50.5749C57.3028 50.6695 57.6595 50.8183 57.9943 51.0174C58.3151 51.19 58.6155 51.4069 58.8885 51.6631C59.0235 51.8011 59.1519 51.9471 59.273 52.1005C59.5177 52.4154 59.7378 52.7533 59.9309 53.1106C60.0297 53.2946 60.1224 53.4821 60.2089 53.673C60.5408 54.4265 60.8062 55.2147 61.0011 56.0265C61.1215 56.5107 61.2235 57.0002 61.3115 57.4896C61.3532 57.7083 61.3902 57.927 61.4227 58.1405C61.4551 58.354 61.4875 58.5727 61.5153 58.7862C61.6417 58.7781 61.7665 58.75 61.886 58.7028C62.567 58.4269 62.9469 57.5365 63.16 56.6722C63.1971 56.5264 63.2295 56.3858 63.2573 56.2452C63.3638 55.7245 63.475 55.1517 63.5816 54.605C65.4078 58.9636 68.3524 62.6084 72.0366 65.0709C72.1663 65.5031 72.2914 65.93 72.4026 66.3674C73.0095 68.7261 73.3014 71.1942 72.2497 73.2562C71.4992 74.7193 70.2391 75.6201 68.8307 76.2449C68.6276 75.9407 68.3664 75.6916 68.0662 75.5159C66.8478 74.8286 65.3838 75.6617 64.3599 76.6875C62.5068 78.5724 60.9964 81.2748 58.5595 81.8944C57.6793 82.1235 56.7064 82.0767 55.9744 82.6807C55.4903 83.1923 55.0848 83.7905 54.7745 84.451C54.2457 85.3045 53.5346 85.9949 52.7065 86.4589C51.8783 86.9229 50.9597 87.1456 50.035 87.1065C49.1872 87.0597 48.1819 86.841 47.6028 87.5387C47.1719 88.0594 47.1395 88.8821 46.6762 89.3767C46.0554 90.064 45.0362 89.7308 44.1698 89.6891C42.5205 89.611 40.987 90.8086 40.0465 92.3447C39.1061 93.8807 38.6567 95.7187 38.1934 97.5516V97.5828C38.0745 97.6801 37.9615 97.7862 37.8552 97.9004C37.406 98.4382 37.0578 99.0722 36.8313 99.7645C33.0847 109.352 30.8733 119.607 30.299 130.058C30.3081 130.568 30.2063 131.072 30.0024 131.527C29.7952 131.824 29.5675 132.102 29.3214 132.36C29.1013 132.663 28.9375 133.012 28.8398 133.387C28.7421 133.763 28.7124 134.156 28.7526 134.545C28.7928 134.933 28.902 135.309 29.0737 135.649C29.2454 135.989 29.4762 136.287 29.7523 136.525C29.8856 136.254 30.0525 136.005 30.248 135.786C30.197 136.025 30.1507 136.26 30.1183 136.473C29.9322 137.992 29.9151 139.531 30.0673 141.055C30.5059 148.289 30.9491 155.518 31.3969 162.742C31.522 164.788 31.6471 166.829 31.8139 168.871C32.1382 172.821 32.6015 176.756 33.2038 180.675C33.2316 180.852 33.264 181.034 33.3057 181.195C29.5299 182.544 26.1711 184.981 24.758 189.047C24.2669 190.453 24.0446 191.984 23.4423 193.333C22.7798 194.811 21.6911 195.993 20.9683 197.441C19.7221 199.93 19.6665 202.981 20.1205 205.772C20.9961 211.213 23.6137 216.076 27.0698 220.034C26.917 220.034 26.7594 220.034 26.6065 220.034C25.4774 220.174 24.3935 220.611 23.4423 221.309C16.1316 226.11 11.9527 236.409 13.4769 245.813C13.7781 247.651 14.3016 249.515 15.395 250.916C16.3038 252.029 17.4723 252.834 18.7677 253.238C19.5778 253.512 20.412 253.687 21.2556 253.759C26.954 254.279 32.4718 251.311 38.1841 251.062C40.0765 251.028 41.9688 251.127 43.8501 251.358C46.6021 251.615 49.3586 251.778 52.1198 251.848C56.6091 251.968 59.134 250.624 61.9972 246.854C62.7009 245.917 63.2884 244.876 63.7437 243.762C66.1806 243.605 68.8724 243.366 70.8182 243.189L70.846 243.491C70.9525 244.532 71.1147 245.73 71.8559 246.386C72.2729 246.709 72.747 246.927 73.2458 247.026C77.925 248.318 82.6598 249.63 87.478 249.63C89.7391 249.578 91.9958 249.384 94.2374 249.046L102.702 247.948C105.168 248.299 107.602 248.895 109.975 249.729C112.421 250.661 114.705 252.046 117.096 253.144C122.656 255.675 128.632 256.581 134.553 257.466C135.563 257.617 136.721 257.721 137.467 256.945C138.43 255.904 138.111 254.165 137.837 252.707C137.726 252.108 137.643 251.509 137.578 250.905C141.573 252.089 145.483 253.614 149.271 255.467L149.934 255.795C150.129 256.93 151.06 257.836 151.954 259.059C152.247 259.576 152.591 260.054 152.978 260.486C153.42 260.809 153.923 261.012 154.446 261.08C160.697 262.388 167.079 262.713 173.409 262.043C174.704 261.845 176.014 261.794 177.319 261.892C178.277 262.039 179.223 262.277 180.145 262.605L185.505 264.334C189.457 265.604 193.502 266.891 197.602 266.604C198.433 266.545 199.259 266.411 200.071 266.203C203.314 265.36 206.335 263.324 207.891 260.049C210.092 255.597 209.077 250.119 207.891 245.225Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M57.9204 244.209C56.9429 241.71 56.0163 238.836 56.9939 236.337C57.632 234.865 58.7281 233.707 60.0747 233.082C61.4073 232.471 62.8119 232.082 64.2443 231.926C68.7403 231.264 73.2897 231.194 77.8001 231.718C78.1291 234.644 77.4341 237.612 76.8365 240.44C76.2944 243.043 75.984 243.428 73.5935 243.564C72.0461 243.657 58.2864 245.131 57.9204 244.209Z"
              fill="#5E372E"
            />
            <path
              d="M99.1762 227.349C135.765 227.349 165.426 218.025 165.426 206.522C165.426 195.019 135.765 185.694 99.1762 185.694C62.5872 185.694 32.9259 195.019 32.9259 206.522C32.9259 218.025 62.5872 227.349 99.1762 227.349Z"
              fill="#464353"
            />
            <path
              opacity="0.1"
              d="M99.1762 227.349C135.765 227.349 165.426 218.025 165.426 206.522C165.426 195.019 135.765 185.694 99.1762 185.694C62.5872 185.694 32.9259 195.019 32.9259 206.522C32.9259 218.025 62.5872 227.349 99.1762 227.349Z"
              fill="black"
            />
            <path
              d="M111.055 96.5728C108.784 101.505 105.013 105.355 100.427 107.424C97.7201 108.533 94.871 109.141 91.9907 109.226C88.845 109.387 85.6344 109.158 82.6786 107.95C78.7129 106.336 75.4189 103.035 72.9495 99.1866C70.4802 95.3387 68.7799 90.9441 67.302 86.513C66.5237 84.2064 65.7824 81.7487 66.1484 79.3119C68.5344 78.7027 71.1473 77.8071 72.3797 75.4275C73.4314 73.3864 73.1395 70.9392 72.5326 68.6065C72.3612 67.9452 72.1619 67.2891 71.9627 66.6591C71.4994 65.1491 69.9011 62.2801 71.0361 60.9888C71.745 60.1713 74.7147 59.7547 75.7385 59.2236C78.8935 57.5887 81.803 55.2247 85.2684 54.4489C88.2659 53.7772 91.3606 54.4072 94.3535 55.105C94.7505 55.1699 95.1318 55.3239 95.4747 55.558C95.8656 55.9283 96.1548 56.4158 96.3086 56.9638C97.161 59.2965 97.6614 61.874 98.3471 64.3056C99.0605 66.8518 99.9778 69.2417 101.697 71.0485C103.036 72.4596 104.74 73.3448 106.408 74.2039L110.513 76.3179C111.243 76.6252 111.905 77.1066 112.454 77.729C112.991 78.5582 113.312 79.539 113.381 80.5615C114.116 86.0406 113.303 91.641 111.055 96.5728V96.5728Z"
              fill="#5E372E"
            />
            <path
              opacity="0.1"
              d="M98.3282 64.3056C95.0595 68.1305 90.7537 70.6279 86.0861 71.4063C81.4185 72.1846 76.653 71.1999 72.537 68.6065C72.3656 67.9452 72.1663 67.2892 71.9671 66.6591C71.5038 65.1491 69.9055 62.2801 71.0406 60.9888C71.7494 60.1713 74.7191 59.7548 75.7429 59.2237C78.8979 57.5887 81.8074 55.2247 85.2728 54.4489C88.2702 53.7772 91.365 54.4073 94.3578 55.105C94.7548 55.1699 95.1361 55.3239 95.479 55.558C95.8699 55.9283 96.1592 56.4158 96.3129 56.9639C97.1422 59.2965 97.6426 61.874 98.3282 64.3056Z"
              fill="black"
            />
            <path
              d="M82.9612 70.6215C94.731 70.6215 104.272 59.898 104.272 46.6698C104.272 33.4416 94.731 22.718 82.9612 22.718C71.1913 22.718 61.6499 33.4416 61.6499 46.6698C61.6499 59.898 71.1913 70.6215 82.9612 70.6215Z"
              fill="#5E372E"
            />
            <path
              d="M147.891 124.404L146.14 112.48C145.255 106.497 144.342 100.4 141.868 95.0107C140.242 91.4804 137.662 88.1167 134.182 87.419C133.497 87.3503 132.824 87.1751 132.181 86.8983C131.162 86.3464 130.606 85.1071 129.823 84.1907C127.803 81.8372 124.514 81.8007 121.808 80.6031C119.417 79.5618 117.462 77.5571 115.285 76.0263C113.107 74.4955 110.397 73.4228 107.988 74.4017C107.599 79.0619 107.187 83.8262 105.426 88.0698C104.28 90.8325 102.599 93.2723 100.507 95.211C98.4139 97.1497 95.9621 98.5381 93.3305 99.2748C90.6988 100.011 87.954 100.078 85.2966 99.4688C82.6393 98.8598 80.1366 97.5911 77.9717 95.7552C73.8438 92.2614 71.1984 86.8723 69.966 81.2332C69.6649 79.8586 69.3221 78.2809 68.1963 77.6508C66.9778 76.9635 65.5138 77.7966 64.49 78.8068C62.6368 80.6761 61.1218 83.3524 58.6849 83.9824C57.8047 84.2115 56.8318 84.1647 56.0998 84.7635C55.6133 85.2681 55.2061 85.8613 54.8953 86.5182C54.362 87.3651 53.6495 88.0494 52.8221 88.5093C51.9946 88.9693 51.0783 89.1905 50.1558 89.1529C49.308 89.106 48.3027 88.8873 47.7235 89.5799C47.2927 90.1005 47.2603 90.9128 46.797 91.3971C46.1715 92.0792 45.1569 91.7459 44.2859 91.7095C42.6366 91.6314 41.1032 92.8185 40.158 94.3129C39.2129 95.8073 38.7682 97.6558 38.3049 99.4469C43.3686 112.121 48.0015 124.81 53.0653 137.483C53.3025 137.961 53.4284 138.498 53.4313 139.045C53.3297 139.613 53.1142 140.147 52.8012 140.607C50.318 145.091 50.3967 150.73 50.6701 155.999C50.9434 161.268 51.277 166.835 49.1829 171.557C48.6131 172.854 47.8718 174.041 47.3298 175.338C46.0603 178.274 45.6017 187.667 46.3429 190.823H151.083C149.086 184.653 149.846 172.271 150.263 165.72C150.555 161.138 149.8 156.561 149.476 151.979C148.767 142.623 149.267 133.745 147.891 124.404Z"
              fill="#6C63FF"
            />
            <path
              d="M30.2805 138.046C30.0952 139.552 30.0765 141.079 30.2249 142.591L31.5546 164.08C31.6796 166.106 31.8047 168.126 31.9715 170.146C32.2912 174.067 32.7684 177.957 33.3614 181.841C33.3747 182.393 33.5822 182.916 33.9384 183.295C34.2945 183.675 34.7701 183.881 35.2609 183.867C41.1215 185.262 47.1766 185.205 53.1577 184.825C62.2845 184.252 71.3974 182.945 80.538 183.169C82.8915 183.226 85.6342 183.169 87.0611 181.086C88.4881 179.003 87.6588 175.634 85.7964 173.953C83.9339 172.271 81.4044 171.87 79.0138 171.87C75.8496 171.833 72.6853 172.338 69.5303 172.13C66.6348 171.937 63.8041 171.151 60.9965 170.365L53.1206 168.162C53.4218 165.481 54.3298 162.956 55.1915 160.409C56.7389 155.895 58.1844 151.23 58.2122 146.392C58.24 141.555 56.6185 136.468 53.0928 133.698C50.1927 131.422 46.4585 131.001 42.9237 131.094C40.3524 131.178 35.9095 130.485 33.5606 131.615C31.7028 132.532 30.628 135.999 30.2805 138.046Z"
              fill="#5E372E"
            />
            <path
              d="M153.251 187.178C154.794 186.517 156.494 186.756 158.148 187.006C163.471 187.824 168.873 188.662 173.807 191.052C176.124 192.166 178.329 193.656 179.895 195.848C181.285 197.821 182.096 200.237 182.865 202.617L184.644 208.094C185.32 210.177 186.006 212.301 186.196 214.514C186.752 221.07 182.763 227.25 177.745 230.656C172.728 234.061 166.821 235.274 161.067 236.545C155.313 237.815 149.536 239.221 143.805 240.71C141.132 241.49 138.42 242.09 135.683 242.507C129.549 243.288 123.138 242.137 117.309 244.418C114.993 245.329 112.718 246.683 110.314 247.313C108.717 247.69 107.102 247.967 105.477 248.14L94.4461 249.557C92.203 249.894 89.9447 250.089 87.6821 250.14C82.8639 250.14 78.1245 248.859 73.4452 247.578C72.9478 247.48 72.4742 247.265 72.0554 246.948C71.3141 246.292 71.152 245.131 71.0454 244.079C70.5729 239.424 70.159 234.764 69.8038 230.099C69.6926 228.583 69.6092 226.943 70.3458 225.668C71.2724 224.105 73.0793 223.616 74.7286 223.314C81.7222 222.028 88.807 221.476 95.8916 221.663C98.5833 218.638 103.022 218.623 106.547 216.977C107.844 216.308 109.1 215.541 110.304 214.681C116.611 210.546 123.659 208.043 130.935 207.355C132.36 207.306 133.775 207.079 135.155 206.678C137.884 205.725 140.372 203.132 143.175 203.767C143.522 202.689 143.763 201.247 144.565 200.508C144.963 200.128 145.454 199.873 145.82 199.466C146.594 198.586 146.663 197.201 146.548 195.973C146.432 194.744 146.172 193.484 146.455 192.286C146.572 191.833 146.746 191.4 146.969 191C148.359 188.303 150.458 186.918 153.251 187.178Z"
              fill="#464353"
            />
            <path
              opacity="0.05"
              d="M153.251 187.178C154.794 186.517 156.494 186.756 158.148 187.006C163.471 187.824 168.873 188.662 173.807 191.052C176.124 192.166 178.329 193.656 179.895 195.848C181.285 197.821 182.096 200.237 182.865 202.617L184.644 208.094C185.32 210.177 186.006 212.301 186.196 214.514C186.752 221.07 182.763 227.25 177.745 230.656C172.728 234.061 166.821 235.274 161.067 236.545C155.313 237.815 149.536 239.221 143.805 240.71C141.132 241.49 138.42 242.09 135.683 242.507C129.549 243.288 123.138 242.137 117.309 244.418C114.993 245.329 112.718 246.683 110.314 247.313C108.717 247.69 107.102 247.967 105.477 248.14L94.4461 249.557C92.203 249.894 89.9447 250.089 87.6821 250.14C82.8639 250.14 78.1245 248.859 73.4452 247.578C72.9478 247.48 72.4742 247.265 72.0554 246.948C71.3141 246.292 71.152 245.131 71.0454 244.079C70.5729 239.424 70.159 234.764 69.8038 230.099C69.6926 228.583 69.6092 226.943 70.3458 225.668C71.2724 224.105 73.0793 223.616 74.7286 223.314C81.7222 222.028 88.807 221.476 95.8916 221.663C98.5833 218.638 103.022 218.623 106.547 216.977C107.844 216.308 109.1 215.541 110.304 214.681C116.611 210.546 123.659 208.043 130.935 207.355C132.36 207.306 133.775 207.079 135.155 206.678C137.884 205.725 140.372 203.132 143.175 203.767C143.522 202.689 143.763 201.247 144.565 200.508C144.963 200.128 145.454 199.873 145.82 199.466C146.594 198.586 146.663 197.201 146.548 195.973C146.432 194.744 146.172 193.484 146.455 192.286C146.572 191.833 146.746 191.4 146.969 191C148.359 188.303 150.458 186.918 153.251 187.178Z"
              fill="black"
            />
            <path
              d="M62.1827 247.427C59.3149 251.16 56.79 252.493 52.3007 252.374C49.5395 252.301 46.7814 252.139 44.0264 251.889C42.1433 251.661 40.2496 251.561 38.3557 251.593C32.6387 251.843 27.121 254.784 21.4179 254.269C20.5746 254.194 19.7407 254.02 18.93 253.748C17.6362 253.348 16.4669 252.551 15.5526 251.447C14.4593 250.057 13.9358 248.213 13.6346 246.391C12.1104 237.05 16.2893 226.876 23.6046 222.122C24.5591 221.429 25.6441 220.996 26.7735 220.856C27.881 220.851 28.9758 221.122 29.9795 221.648L30.049 221.679C33.021 223.053 35.7203 225.078 37.9897 227.636C38.3341 228.079 38.7449 228.451 39.2035 228.734C39.6613 228.929 40.1459 229.031 40.6351 229.036L46.7227 229.469C47.7541 229.503 48.7792 229.662 49.7804 229.942C50.8842 230.376 51.9588 230.898 52.9957 231.504C56.2711 233.15 59.9033 233.587 63.4428 234.222C63.7839 234.244 64.1094 234.39 64.3694 234.639C64.5107 234.837 64.609 235.068 64.6567 235.316C65.1541 237.408 65.1887 239.606 64.7575 241.717C64.3263 243.828 63.4424 245.788 62.1827 247.427V247.427Z"
              fill="#525252"
            />
            <path
              opacity="0.1"
              d="M30.0489 221.684C27.6871 224.219 25.6381 227.098 23.9567 230.245C21.2585 235.437 19.5632 241.21 18.981 247.188C18.7602 249.368 18.7431 251.569 18.93 253.754C17.6362 253.353 16.4669 252.556 15.5526 251.452C14.4593 250.062 13.9358 248.219 13.6346 246.396C12.1104 237.055 16.2893 226.881 23.6046 222.127C24.559 221.434 25.644 221.001 26.7735 220.862C27.881 220.857 28.9758 221.127 29.9794 221.653L30.0489 221.684Z"
              fill="black"
            />
            <path
              d="M147.951 234.639C151.356 234.535 155.178 234.342 157.68 236.92C160.066 239.357 160.381 243.376 160.539 246.995L160.719 251.197C160.775 252.478 160.821 253.801 160.362 254.988C159.547 257.071 157.309 258.075 155.266 257.956C153.223 257.836 151.347 256.831 149.48 255.925C144.411 253.471 139.133 251.602 133.728 250.348C133.904 247.443 134.197 244.551 134.608 241.674C134.891 239.679 134.937 236.342 136.123 234.686C137.379 232.936 139.014 233.884 140.719 234.207C143.111 234.617 145.534 234.762 147.951 234.639V234.639Z"
              fill="#5E372E"
            />
            <path
              d="M57.9621 192.416C57.9621 192.937 57.2347 192.416 57.1698 191.859C56.6602 187.647 53.6859 184.174 50.2205 182.487C46.7551 180.8 42.8079 180.711 39.0553 181.112C33.38 181.716 27.0098 184.158 24.9342 190.12C24.4432 191.516 24.2208 193.025 23.6185 194.364C22.9514 195.832 21.8626 197.004 21.1399 198.43C19.8937 200.898 19.8427 203.924 20.2921 206.714C21.5013 214.16 26.0322 220.528 31.5222 224.939C37.0122 229.349 43.4287 231.984 49.8267 234.358C66.7445 240.629 84.1018 245.288 101.715 248.286C104.569 248.771 107.451 249.218 110.184 250.249C112.63 251.171 114.919 252.551 117.309 253.634C122.869 256.144 128.85 257.039 134.775 257.919C135.785 258.065 136.943 258.169 137.689 257.398C138.653 256.393 138.333 254.644 138.06 253.202C137.054 247.718 137.898 242.009 140.427 237.185C141.419 235.311 142.707 233.389 142.521 231.218C142.299 228.688 140.057 226.896 137.824 226.49C135.591 226.084 133.321 226.683 131.078 227.011C130.305 227.126 129.461 227.198 128.785 226.756C128.452 226.503 128.15 226.202 127.886 225.86C126.341 224.185 124.364 223.103 122.239 222.77C120.113 222.436 117.948 222.867 116.054 224.001C115.225 224.522 113.969 223.361 113.107 222.924L103.364 217.967C92.1713 212.275 80.9226 206.558 69.081 202.955C68.1362 202.746 67.2382 202.327 66.4403 201.721C65.8519 201.2 65.4303 200.492 64.8882 199.914C63.7068 198.659 62.0622 198.16 60.6445 197.269C59.2268 196.379 57.6378 194.202 57.9621 192.416Z"
              fill="#464353"
            />
            <path
              d="M208.165 260.465C206.608 263.709 203.588 265.73 200.345 266.563C199.531 266.769 198.703 266.902 197.871 266.958C193.771 267.245 189.721 265.969 185.77 264.709L180.405 263.012C179.482 262.685 178.537 262.448 177.579 262.304C176.274 262.206 174.964 262.256 173.668 262.454C167.328 263.117 160.936 262.795 154.673 261.496C154.15 261.433 153.646 261.231 153.205 260.908C152.818 260.482 152.475 260.009 152.181 259.497C150.722 257.524 149.151 256.373 150.879 253.769C151.875 252.259 153.724 251.504 154.497 249.77C155.271 248.037 154.775 245.574 154.317 243.782C153.691 241.309 151.634 240.242 150.898 237.972C150.346 236.258 151.273 234.269 152.667 233.337C154.062 232.405 155.785 232.332 157.393 232.572C159.001 232.811 160.576 233.322 162.193 233.462C166.946 233.889 171.806 231.135 176.369 232.687C177.375 233.03 178.324 233.577 179.344 233.879C181.331 234.378 183.406 234.177 185.288 233.301C185.955 233.02 186.608 232.681 187.257 232.348C188.508 231.616 189.84 231.075 191.218 230.739C195.67 229.88 199.798 233.343 203.157 236.722C204.31 237.797 205.33 239.041 206.191 240.419C207.118 242.043 207.609 243.933 208.045 245.798C209.272 250.614 210.287 256.04 208.165 260.465Z"
              fill="#525252"
            />
            <path
              opacity="0.1"
              d="M208.165 260.465C206.608 263.709 203.588 265.73 200.344 266.563C201.606 263.808 202.175 260.719 201.989 257.628C201.711 252.676 199.775 248.01 197.305 243.897C195.786 241.365 194.058 238.999 192.144 236.831C190.671 235.165 188.86 233.842 187.275 232.317C188.526 231.585 189.858 231.044 191.236 230.708C195.688 229.849 199.816 233.311 203.175 236.691C204.328 237.766 205.349 239.009 206.21 240.388C207.136 242.012 207.627 243.902 208.063 245.766C209.272 250.614 210.287 256.04 208.165 260.465Z"
              fill="black"
            />
            <path
              d="M38.0407 99.8324C37.5894 100.363 37.2394 100.992 37.0122 101.681C33.2673 111.166 31.0553 121.326 30.4799 131.683C30.4899 132.188 30.3864 132.688 30.1787 133.136C29.974 133.434 29.7461 133.711 29.4977 133.964C29.2721 134.264 29.1038 134.613 29.0032 134.99C28.9025 135.366 28.8716 135.762 28.9125 136.152C28.9533 136.543 29.0649 136.92 29.2405 137.26C29.4161 137.6 29.6518 137.896 29.9332 138.129C30.6976 136.51 32.5276 135.984 34.1537 135.843C41.9416 135.151 49.5488 139.223 57.3599 138.915C56.8085 136.775 56.0163 134.719 55.5669 132.553C53.5794 122.935 58.5366 112.464 55.4974 103.201C54.8905 101.348 53.8759 99.5252 52.2776 98.7129C51.6158 98.4125 50.9232 98.2061 50.216 98.0985C48.2423 97.6976 44.3137 95.9845 42.4049 96.6718C41.7007 96.9269 41.4227 97.6715 40.839 98.1193C39.9541 98.7598 38.7774 98.9941 38.0407 99.8324Z"
              fill="#6C63FF"
            />
            <path
              d="M154.09 118.785H58.1612C56.1219 118.785 54.4688 120.643 54.4688 122.935V188.574C54.4688 190.865 56.1219 192.723 58.1612 192.723H154.09C156.129 192.723 157.782 190.865 157.782 188.574V122.935C157.782 120.643 156.129 118.785 154.09 118.785Z"
              fill="#3F3D56"
            />
            <path
              d="M105.894 158.879C107.429 158.879 108.674 157.48 108.674 155.755C108.674 154.029 107.429 152.63 105.894 152.63C104.359 152.63 103.114 154.029 103.114 155.755C103.114 157.48 104.359 158.879 105.894 158.879Z"
              fill="#6C63FF"
            />
            <path
              d="M68.6613 7.2953C67.2722 8.23788 66.3213 9.59162 65.3538 10.8911C63.5719 13.2921 61.5544 15.6893 58.7058 17.0275C57.6267 17.5357 56.3947 17.9197 55.6795 18.8041C55.2549 19.4022 54.9794 20.0823 54.8733 20.794C54.3276 23.2963 54.0423 25.8425 54.0216 28.3967C54.0216 29.669 54.0795 30.98 54.679 32.136C55.2454 33.2221 56.2665 34.1414 56.4774 35.3244C56.6386 36.2476 56.2748 37.1669 56.1466 38.094C56.0185 39.0211 56.2417 40.1188 57.1554 40.561C57.6477 40.7347 58.1619 40.8482 58.6851 40.8985C61.4345 41.4725 62.3564 44.4981 62.774 47C63.7084 46.9496 64.1301 45.9449 64.3244 45.1265L67.1895 33.1755C67.4996 31.88 68.0164 30.3788 69.3931 29.925C70.3151 29.6263 71.3238 29.9056 72.2871 29.9832C76.0701 30.2741 79.2701 27.5317 82.9703 26.7753C84.1547 26.551 85.3657 26.4754 86.5713 26.5503C89.4902 26.6861 92.8845 27.8109 93.5046 30.3672C93.608 30.7822 93.67 31.2787 94.0834 31.4843C94.4969 31.6899 94.931 31.5153 95.3651 31.4843C97.2173 31.3097 98.3087 33.2647 98.8421 34.8628L100.785 40.6812C101.075 41.5618 101.562 42.5974 102.58 42.7099C103.518 42.8185 104.316 41.9846 104.457 41.1583C104.597 40.3321 104.291 39.4749 104.089 38.6448C103.175 34.8241 104.572 30.9141 105.424 27.0856C106.276 23.2571 106.429 18.8584 103.572 15.9104C102.534 14.8437 101.17 14.0485 100.202 12.9236C99.301 11.8686 98.7924 10.573 97.8581 9.53732C95.2741 6.67855 88.6468 4.47144 84.5827 4.10682C79.9398 3.6336 72.4153 4.73909 68.6613 7.2953Z"
              fill="#242425"
            />
            <g opacity="0.1">
              <path
                opacity="0.1"
                d="M106.265 51.6892C105.125 51.533 104.578 50.1272 104.254 48.966C103.528 46.3591 102.802 43.7557 102.076 41.1557C101.479 39.0052 100.256 36.3809 98.1802 36.6205C97.6938 36.6777 97.1702 36.8912 96.744 36.6205C96.3178 36.3497 96.2112 35.678 96.0954 35.1209C95.4005 31.6843 91.5969 30.1795 88.3261 29.9973C86.9752 29.8976 85.6186 29.9974 84.2908 30.2941C80.1444 31.3355 76.5586 34.9803 72.3195 34.6002C71.2261 34.5012 70.0957 34.1264 69.0764 34.5273C67.5152 35.1313 66.9546 37.1307 66.6071 38.8907L63.3965 54.9279C63.1788 56.0318 62.7062 57.3804 61.6592 57.4429C61.1959 54.0896 60.1581 50.0282 57.0773 49.2576C56.4917 49.1851 55.9161 49.033 55.3631 48.8046C54.96 48.5572 54.6445 48.1621 54.469 47.6851C54.3856 48.1694 54.2883 48.6536 54.2327 49.1378C54.0937 50.3771 54.3392 51.8558 55.3631 52.4494C55.9148 52.6827 56.4909 52.8349 57.0773 52.9024C60.1581 53.6731 61.1913 57.7344 61.6592 61.0929C62.7062 61.0252 63.1788 59.6766 63.3965 58.578L66.6071 42.5355C66.9546 40.7964 67.5337 38.7813 69.0764 38.1721C70.1096 37.7712 71.24 38.1461 72.3195 38.2502C76.5586 38.6407 80.1444 34.9595 84.2908 33.9441C85.6181 33.6431 86.975 33.5415 88.3261 33.6421C91.5969 33.8244 95.4005 35.3343 96.0954 38.7657C96.2112 39.3228 96.2807 39.9893 96.744 40.2653C97.2073 40.5412 97.6938 40.3069 98.1802 40.2653C100.256 40.031 101.479 42.6553 102.076 44.8005C102.799 47.4074 103.525 50.0109 104.254 52.6109C104.578 53.7928 105.125 55.183 106.265 55.334C107.316 55.4798 108.21 54.3604 108.368 53.2513C108.439 52.3181 108.345 51.3783 108.09 50.4864C107.925 50.8665 107.663 51.1833 107.339 51.3972C107.014 51.6112 106.64 51.7127 106.265 51.6892V51.6892Z"
                fill="black"
              />
              <path
                opacity="0.1"
                d="M54.5891 41.7753C54.3528 40.1872 53.1993 38.9532 52.5738 37.4952C52.1717 36.5119 51.939 35.4518 51.8882 34.3711C51.8882 34.9543 51.8418 35.5374 51.8372 36.1258C51.8372 37.8337 51.902 39.5936 52.5738 41.1453C53.0881 42.3272 53.9359 43.3686 54.3621 44.5714C54.5868 43.6623 54.6637 42.7151 54.5891 41.7753V41.7753Z"
                fill="black"
              />
              <path
                opacity="0.1"
                d="M109.452 30.695C108.609 35.2354 107.293 39.8592 107.701 44.41C107.965 41.0515 108.836 37.6722 109.452 34.3398C109.966 31.8092 110.147 29.2076 109.989 26.618C109.889 27.9886 109.709 29.3505 109.452 30.695Z"
                fill="black"
              />
            </g>
            <g opacity="0.1">
              <path
                opacity="0.1"
                d="M40.0038 61.8739C40.0038 61.8739 5.36368 45.5034 0.823458 75.0422C0.823458 75.0422 -1.54395 79.6451 1.75003 83.4461C1.75003 83.4461 2.45887 81.405 5.80381 83.5138C6.99852 84.2564 8.26758 84.8367 9.58424 85.2425C11.3624 85.7937 13.2518 85.6804 14.9677 84.9196V84.9196C14.9677 84.9196 26.3599 84.2271 35.9407 67.4765C35.9407 67.4765 40.0501 64.6232 40.2539 63.5505L33.388 64.0712C33.388 64.0712 33.9162 69.7207 31.0716 73.1104C31.0716 73.1104 33.5918 64.342 32.3827 64.0973C32.1371 64.0452 28.7551 64.545 28.7551 64.545C28.7551 64.545 29.6307 74.3705 25.0488 79.4524C25.0488 79.4524 29.3018 69.4604 27.4533 64.7221L22.3849 65.8207C22.3849 65.8207 23.7748 76.1564 18.762 82.1652C18.762 82.1652 22.8853 71.5431 21.2915 66.1488L16.4409 67.9816C16.4409 67.9816 17.6084 78.0882 13.4156 83.0816C13.4156 83.0816 17.0756 70.2674 15.3522 68.5023C15.3522 68.5023 10.988 70.4913 10.0568 71.6264C10.0568 71.6264 10.7471 78.9161 8.08319 81.5456C8.08319 81.5456 9.7186 72.6938 8.90784 72.3294C8.90784 72.3294 3.83946 76.6199 2.29208 80.322C2.29208 80.322 4.21936 74.6673 8.27314 71.4702C8.27314 71.4702 4.86797 70.8246 2.25039 72.4231C2.25039 72.4231 4.00162 68.6689 9.50085 70.4497C9.50085 70.4497 13.5732 67.2787 14.3885 67.3255C14.3885 67.3255 9.18581 64.7221 5.42855 65.0449C5.42855 65.0449 9.45916 62.4415 15.658 66.7892L20.4993 64.8262C20.4993 64.8262 13.7816 60.9575 10.4182 60.9731C10.4182 60.9731 14.8935 59.0257 21.7548 64.4409L26.712 63.3058C26.712 63.3058 21.1526 59.4787 17.4046 58.5884C17.4046 58.5884 21.8984 57.7865 28.1436 63.0403L31.5302 62.7226C31.5302 62.7226 27.4301 60.0046 26.1885 59.3434C24.9469 58.6821 25.0025 58.2551 25.0025 58.2551C27.9489 58.8223 30.6977 60.2967 32.9432 62.5144C32.9432 62.5144 39.976 62.3582 40.0038 61.8739Z"
                fill="#6C63FF"
              />
            </g>
            <g opacity="0.1">
              <path
                opacity="0.1"
                d="M38.7264 32.5278C38.7264 32.5278 26.4585 0.625132 8.78402 15.2565C8.78402 15.2565 5.04992 16.4749 5.07771 20.8279C5.07771 20.8279 6.53244 20.0677 7.45439 23.4678C7.79244 24.6739 8.25913 25.8295 8.84425 26.9095C9.6176 28.3775 10.7973 29.5205 12.2031 30.1638C12.2031 30.1638 19.3238 37.0474 33.5144 33.2307C33.5144 33.2307 37.406 34.1627 38.0685 33.6629L33.7321 29.5651C33.7321 29.5651 31.1794 33.2619 27.7603 33.439C27.7603 33.439 33.7043 29.8462 33.1113 28.9246C32.9909 28.7372 30.7254 26.8731 30.7254 26.8731C30.7254 26.8731 26.2685 33.2671 20.9963 33.3661C20.9963 33.3661 28.5896 30.1482 29.8915 26.1545L26.3241 23.5511C26.3241 23.5511 21.8256 30.5856 15.8028 30.9501C15.8028 30.9501 23.6371 27.2792 25.4254 23.0512L21.6125 21.0362C21.6125 21.0362 17.1834 27.8051 12.1753 28.0603C12.1753 28.0603 20.8481 22.7909 20.7137 20.6404C20.7137 20.6404 17.114 19.0263 15.9696 19.12C15.9696 19.12 12.6942 23.8843 9.77083 23.7489C9.77083 23.7489 15.233 19.5366 14.9365 18.8024C14.9365 18.8024 9.74767 18.1047 6.95404 19.3231C6.95404 19.3231 10.9661 17.1987 14.9921 17.8964C14.9921 17.8964 13.2965 15.3294 10.9383 14.6161C10.9383 14.6161 13.8848 13.507 16.2476 18.0786C16.2476 18.0786 20.269 18.8076 20.7415 19.3491C20.7415 19.3491 18.9764 14.4599 16.5719 12.2573C16.5719 12.2573 20.2782 13.2987 21.7607 19.8438L25.6338 21.7755C25.6338 21.7755 23.6046 15.1732 21.594 13.0332C21.594 13.0332 25.24 14.741 26.5743 22.3535L30.0953 24.8476C30.0953 24.8476 28.7332 19.0159 26.9588 16.0844C26.9588 16.0844 30.0351 18.49 31.0775 25.6078L33.2549 27.5864C33.2549 27.5864 32.194 23.348 31.7909 22.1608C31.3879 20.9737 31.638 20.755 31.638 20.755C33.1015 22.9877 33.9823 25.6346 34.1815 28.3987C34.1815 28.3987 38.4623 32.7933 38.7264 32.5278Z"
                fill="#6C63FF"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="111.222"
                y1="266.661"
                x2="111.222"
                y2="0.484434"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#808080" stopOpacity="0.25" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};
export default Home;
