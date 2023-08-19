import { styled } from 'styled-components'

export const HeaderStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    padding: 15px 80px;
    border-bottom: 1px solid #e2e2e2;
    gap: 20px;
    .logo {
        height: 50px;
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
            max-height: 100%;
            max-width: 100%;
        }
    }
    .items {
        display: flex;
        gap: 35px;
        z-index: 1000;
        .cross-icon {
            display: none;
            padding-left: 20px;
            width: 100%;
            svg {
                height: 22px;
                width: 22px;
                cursor: pointer;
                &:hover {
                    fill: var(--theme-color);
                }
            }
        }
        .item {
            font-weight: 500;
            font-size: 18px;
            cursor: pointer;
            height: 23px;
            text-align: center;
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
    .menu-icon {
        display: none;
        cursor: pointer;
    }
    @media (max-width: 768px) {
        padding: 15px 20px;
        .items {
            position: fixed;
            left: -300px;
            top: 0;
            bottom: 0;
            width: 300px;
            max-width: 90%;
            padding: 40px 0;
            background: #fff;
            flex-direction: column;
            gap: 40px;
            transition: all 0.6s;
            align-items: center;
            box-shadow: 0 0px 54px 0 rgba(20, 20, 43, 0.07);
            &.show-menu {
                left: 0;
            }
            .cross-icon {
                display: block;
            }
        }
        .menu-icon {
            display: block;
            svg {
                stroke: var(--theme-color);
                width: 30px;
                height: 30px;
            }
        }
    }
`
