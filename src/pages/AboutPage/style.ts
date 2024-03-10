import { styled } from 'styled-components'

export const AboutPageStyle = styled.div``

export const AboutSection = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    .content-section {
        position: relative;
        flex: 1;
        .sub-title {
            font-size: 16px;
            line-height: 1.125em;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }
        .title {
            margin: 20px 0 22px;
            color: #14142b;
            font-size: 40px;
            line-height: 1.316em;
            font-weight: 700;
        }
        .description {
            font-size: 18px;
            line-height: 1.667em;
            color:#8184a3;
        }
    }
    .images-section {
        flex: 1;
        img {
            border: 1px solid #eff0f6;
            border-radius: 18px;
            box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .content-section {
            .title {
                font-size: 32px;
                max-width: 480px;
            }
        }
    }
`

export const HelpSection = styled.div`
    .sub-title {
        font-size: 16px;
        line-height: 1.125em;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
    }
    .title {
        color: #14142b;
        font-size: 40px;
        line-height: 1.316em;
        font-weight: 700;
        max-width: 460px;
        text-align: center;
        margin: 20px auto 60px;
    }
    .item {
        margin-bottom: 30px;
        .item-title {
            color: rgb(20, 20, 43);
            font-size: 24px;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .description {
            color:#8184a3;
            .sol {
                margin-top: 4px;
                font-weight: 500;
            }
        }
    }
    @media (max-width: 768px) {
        .title {
            font-size: 32px;
            max-width: 440px;
            min-width: unset;
        }
    }
`

export const ValuesSection = styled.div`
    .sub-title {
        font-size: 16px;
        line-height: 1.125em;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
    }
    .title {
        margin: 20px auto 22px;
        color: #14142b;
        font-size: 40px;
        line-height: 1.316em;
        font-weight: 700;
        text-align: center;
        max-width: 420px;
    }
    .cards {
        margin: 40px 0;
        .mySwiper {
            padding-bottom: 35px;
            .swiper-button-prev,
            .swiper-button-next {
                color: var(--theme-color);
                &:after {
                    font-size: 35px;
                }
            }
            .swiper-button-prev {
                left: 0;
            }
            .swiper-button-next {
                right: 0;
            }
        }
        .card {
            background: #fff;
            text-align: center;
            padding: 24px 20px;
            border: 1px solid #eff0f6;
            border-radius: 24px;
            box-shadow: 0 4px 22px 0 rgba(8, 15, 52, 0.03);
            height: 100%;
            display: flex;
            flex-direction: column;
            max-width: 500px;
            svg {
                rect {
                    transition: 1s ease-in-out;
                    opacity: 0;
                }
            }
            &:hover {
                svg {
                    rect {
                        opacity: 0.2;
                    }
                }
            }
            .card-title {
                color: #14142b;
                font-size: 24px;
                line-height: 1.417em;
                font-weight: 700;
                margin-top: 15px;
                flex: 1;
            }
            .bottom-bar {
                width: 100px;
                border-top: 3px solid;
                margin: 24px auto 0;
                &.c-1 {
                    border-color: #ff6262;
                }
                &.c-2 {
                    border-color: #4a3aff;
                }
                &.c-3 {
                    border-color: #ffb800;
                }
                &.c-4 {
                    border-color: #ff6262;
                }
                &.c-5 {
                    border-color: #ff6262;
                }
                &.c-6 {
                    border-color: #ffb800;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .content-section {
            .title {
                font-size: 32px;
            }
        }
    }
`
