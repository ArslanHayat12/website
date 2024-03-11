import { styled } from 'styled-components'

export const HomePageStyle = styled.div`
    .intro-section {
        display: flex;
        align-items: center;
        gap: 40px;
        background: #f4f4f4;
        border-radius: 18px;
        .content-section {
            flex: 1;
            padding: 5px;
            .sub-title {
                font-size: 16px;
                line-height: 1.125em;
                letter-spacing: 0.1em;
                text-transform: uppercase;
            }
            .title {
                margin: 20px 0 22px;
                color: #14142b;
                font-size: 54px;
                line-height: 1.13em;
                font-weight: 700;
            }
            .description {
                font-size: 18px;
                line-height: 1.667em;
            }
        }
        .images-section {
            position: relative;
            flex: 1;
            .img-1 {
                img {
                    border: 1px solid #eff0f6;
                    border-radius: 18px;
                    box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
                }
            }
            .img-2 {
                overflow: hidden;
                position: absolute;
                top: 30%;
                left: -30px;
                height: 40%;
                img {
                    border: 1px solid #eff0f6;
                    border-radius: 18px;
                    box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
                }
            }
        }
    }

    @media (max-width: 768px) {
        .intro-section {
            flex-direction: column;
            .content-section {
                .title {
                    font-size: 32px;
                    max-width: 340px;
                }
            }
            .images-section {
                .img-2 {
                    left: 0;
                }
            }
        }
    }
`

export const CompaniesSection = styled.div`
    .title {
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        margin-bottom: 25px;
    }
    .companies-logos {
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 30px;
        flex-wrap: wrap;
        .image {
            min-width: 80px;
            max-width: 150px;
        }
    }
`
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
            min-width: 460px;
        }
        .description {
            font-size: 18px;
            line-height: 1.667em;
            text-align: justify;
        }
        .button-cont {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            text-align: center;
            span {
                text-decoration: underline;
            }
            .button {
                padding: 12px 30px;
                color: #fff;
                background: var(--theme-color);
                border-radius: 4px;
                line-height: normal;
            }
        }
    }
    .images-section {
        justify-self: end;
        position: relative;
        flex: 1;
        .img-1 {
            padding-left: 30px;
            img {
                border: 1px solid #eff0f6;
                border-radius: 18px;
                box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
            }
        }
        .img-2 {
            overflow: hidden;
            position: absolute;
            bottom: -30px;
            left: -30px;
            width: 70%;
            img {
                border: 1px solid #eff0f6;
                border-radius: 18px;
                box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
            }
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        .content-section {
            .title {
                font-size: 32px;
                max-width: 440px;
                min-width: unset;
            }
        }
        .images-section {
            .img-2 {
                left: 0;
            }
        }
    }
`

export const ServicesSection = styled.div`
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
    &.contact-us {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        .title {
            color: #14142b;
            font-size: 40px;
            line-height: 1.316em;
            font-weight: 700;
            max-width: 460px;
            text-align: center;
            margin: 20px auto 10px;
        }
        .description {
            font-size: 18px;
            line-height: 1.667em;
            text-align: center;
        }
        .email-cont {
            display: flex;
            align-items: center;
            gap: 10px;
        }
    }
    .service-cards {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 20px;
        .card {
            background: #fff;
            border: 1px solid;
            text-align: center;
            padding: 24px 10px 24px;
            border: 1px solid #eff0f6;
            border-radius: 24px;
            box-shadow: 0 4px 22px 0 rgba(8, 15, 52, 0.03);
            height: 100%;
            display: flex;
            flex-direction: column;
            .serice-logo {
                width: 150px;
                height: 150px;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: auto;
            }
            .service-title {
                margin: 24px 0 10px;
                color: #14142b;
                font-size: 24px;
                line-height: 1.417em;
                font-weight: 700;
            }
            .service-details {
                flex: 1;
                color: #8184a3;
                font-size: 16px;
                line-height: 1.667em;
                font-weight: 500;
            }
            .bottom-bar {
                width: 100px;
                border-top: 2px solid;
                margin: 24px auto 0;
                &.c-1 {
                    border-color: #ff6262;
                }
                &.c-2 {
                    border-color: #ff6262;
                }
                &.c-3 {
                    border-color: #1497d4;
                }
                &.c-4 {
                    border-color: #1497d4;
                }
                &.c-5 {
                    border-color: #ffd600;
                }
                &.c-6 {
                    border-color: #ffd600;
                }
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
