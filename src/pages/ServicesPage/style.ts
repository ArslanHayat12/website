import { styled } from 'styled-components'

export const ServicesPageStyle = styled.div`
    .title {
        text-align: center;
        font-size: 54px;
        line-height: 1.13em;
        font-weight: 700;
    }
    .description {
        max-width: 700px;
        margin: 20px auto 0;
        font-size: 18px;
        line-height: 1.667em;
        text-align: center;
    }
    @media (max-width: 768px) {
        .title {
            font-size: 38px;
        }
    }
`

export const ServiceCard = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    .content-section {
        position: relative;
        flex: 1;
        .c-title {
            margin-bottom: 12px;
            color: #14142b;
            font-size: 40px;
            line-height: 1.316em;
            font-weight: 700;
        }
        .c-description {
            font-size: 18px;
            line-height: 1.667em;
        }
    }
    .images-section {
        display: flex;
        &.b-img {
            display: none;
        }
        flex: 1;
        img {
            border: 1px solid #eff0f6;
            border-radius: 18px;
            box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
        }
    }
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
        margin-bottom: 40px;
        .content-section {
            .c-title {
                font-size: 28px;
            }
        }
        .images-section {
            &.t-img {
                display: none;
            }
            &.b-img {
                display: unset;
            }
            flex: 1;
            img {
                border: 1px solid #eff0f6;
                border-radius: 18px;
                box-shadow: 0 18px 54px 0 rgba(20, 20, 43, 0.07);
            }
        }
    }
`
