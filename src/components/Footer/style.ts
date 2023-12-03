import { styled } from 'styled-components'

export const FooterStyle = styled.footer`
    padding: 35px 60px;
    border-top: 1px solid #e2e2e2;
    .f-container {
        max-width: 940px;
        margin: auto;
        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 40px;
            .logo {
                flex: 1;
                max-width: 350px;
                width: 100%;
                cursor: pointer;
                img {
                    max-height: 100%;
                    max-width: 100%;
                }
            }
            .items {
                display: flex;
                flex-direction: column;
                gap: 30px;
                .item {
                    font-weight: 500;
                    font-size: 18px;
                    cursor: pointer;
                    width: max-content;
                    height: 23px;
                    &.active {
                        color: var(--theme-color);
                        border-bottom: 1px solid var(--theme-color);
                    }
                    &:hover {
                        color: var(--theme-color);
                        border-bottom: 1px solid var(--theme-color);
                    }
                }
            }
        }
        .social {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 30px;
            margin-top: 30px;
            padding-top: 30px;
            border-top: 1px solid #e2e2e2;
            .copy-rights {
                font-size: 20px;
                font-weight: 400;
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
    @media (max-width: 768px) {
        padding: 35px 40px;
        border-top: 1px solid #e2e2e2;
        .f-container {
            .social {
                flex-direction: column;
                align-items: unset;
                gap: 20px;
                .copy-rights {
                    font-size: 18px;
                }
                .social-icons {
                    display: flex;
                    justify-content: end;
                    .icon {
                        height: 30px;
                    }
                }
            }
        }
    }
    @media (max-width: 560px) {
        padding: 35px 20px;
    }
`
