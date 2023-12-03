import { styled } from 'styled-components'

export const ContactPageStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    .content {
        flex: 1;
        .title {
            margin-bottom: 10px;
            color: #14142b;
            font-size: 40px;
            line-height: 1.316em;
            font-weight: 700;
        }
        .description {
            font-size: 18px;
            line-height: 1.667em;
        }
        .cards {
            .card {
                height: 90px;
                display: flex;
                align-items: center;
                gap: 40px;
                max-width: 390px;
                padding: 0 40px;
                margin-top: 20px;
                border: 1px solid #eff0f6;
                border-radius: 24px;
                box-shadow: 0 4px 22px 0 rgba(8, 15, 52, 0.03);
                cursor: pointer;
                .icon {
                    display: flex;
                    height: 48px;
                    width: 48px;
                    align-items: center;
                    justify-content: center;
                    border-radius: 8px;
                    position: relative;
                    overflow: hidden;
                    .opacity {
                        position: absolute;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        background: var(--secondary-color);
                        opacity: 0.1;
                    }
                    svg {
                        fill: var(--secondary-color);
                    }
                    &.contact {
                        svg {
                            height: 24px;
                            width: 24px;
                        }
                    }
                    &.email {
                        svg {
                            height: 30px;
                            width: 30px;
                        }
                    }
                }
                .text {
                    font-weight: 700;
                    font-size: 18px;
                }
                &:hover {
                    .icon {
                        .opacity {
                            background: var(--theme-color);
                        }
                        svg {
                            fill: var(--theme-color);
                        }
                        &.contact {
                            svg {
                                height: 26px;
                                width: 26px;
                            }
                        }
                        &.email {
                            svg {
                                height: 33px;
                                width: 33px;
                            }
                        }
                    }
                    .text {
                        color: var(--theme-color);
                    }
                }
            }
            @media (max-width: 390px) {
                .card {
                    gap: 40px;
                    padding: 0 40px;
                    .icon {
                        height: 35px;
                        width: 35px;
                        &.contact {
                            svg {
                                height: 20px;
                                width: 20px;
                            }
                        }
                        &.email {
                            svg {
                                height: 26px;
                                width: 26px;
                            }
                        }
                    }
                    .text {
                        font-weight: 600;
                        font-size: 16px;
                    }
                    &:hover {
                        .icon {
                            &.contact {
                                svg {
                                    height: 22px;
                                    width: 22px;
                                }
                            }
                            &.email {
                                svg {
                                    height: 29px;
                                    width: 29px;
                                }
                            }
                        }
                    }
                }
            }
            @media (max-width: 360px) {
                .card {
                    gap: 20px;
                    padding: 0 20px;
                }
            }
        }
        .follow-us {
            .title {
                font-size: 24px;
                margin-top: 22px;
            }
            .social-icons {
                display: flex;
                align-items: center;
                gap: 10px;
                .icon {
                    height: 40px;
                    cursor: pointer;
                    img {
                        max-height: 100%;
                        max-width: 100%;
                    }
                }
            }
        }
    }

    .form-card {
        flex: 1;
        width: 100%;
        .fields {
            padding: 70px 30px;
            border: 1px solid #eff0f6;
            border-radius: 24px;
            background-color: #fff;
            .field {
                margin-bottom: 30px;
                label {
                    color: #14142b;
                    line-height: 1.111em;
                    font-weight: 700;
                    font-size: 18px;
                    display: block;
                    margin-bottom: 12px;
                }
                input {
                    min-height: 62px;
                    padding: 0 20px;
                    border: 2px solid #dcddeb;
                    border-radius: 10px;
                    background-color: #fff;
                    transition: border-color 0.3s, color 0.3s;
                    font-size: 18px;
                    line-height: 1.111em;
                    width: 100%;
                    outline: none;
                    &:focus {
                        border: 2px solid var(--theme-color);
                        color: var(--theme-color);
                    }
                    &:focus::placeholder {
                        color: var(--theme-color);
                    }
                    &:hover {
                        border: 2px solid var(--theme-color);
                        color: var(--theme-color);
                    }
                    &:hover::placeholder {
                        color: var(--theme-color);
                    }
                }
            }
            button {
                height: 63px;
                width: 188px;
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                border-radius: 10px;
                background-color: var(--primary-color);
                color: #fff;
                line-height: 1.111em;
                font-weight: 700;
                text-align: center;
                font-size: 18px;
                gap: 10px;
                &:hover {
                    background-color: var(--theme-color);
                }
                svg {
                    width: 30px;
                    height: 30px;
                    .path {
                        stroke: #fff;
                    }
                }
            }
            .success-msg {
                font-size: 18px;
                line-height: 1.667em;
                margin-top: 20px;
            }
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        .content {
            .title {
                font-size: 32px;
                max-width: 480px;
            }
        }
    }
`
