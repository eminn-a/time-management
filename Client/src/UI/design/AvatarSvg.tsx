import { SvgType } from './types';

export default function AvatarSvg({ width = 83, height = 83, color = '#568DB6' }: SvgType) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 83 83'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g id='Mask group'>
                <circle id='Ellipse 2' cx='41.5' cy='41.5' r='41.5' fill='#D4EBFF' />
                <mask
                    id='mask0_174_446'
                    style={{ maskType: 'alpha' }}
                    maskUnits='userSpaceOnUse'
                    x='0'
                    y='0'
                    width='83'
                    height='83'
                >
                    <circle id='Ellipse 1' cx='41.5' cy='41.5' r='41.5' fill='white' />
                </mask>
                <g mask='url(#mask0_174_446)'>
                    <path
                        id='Vector'
                        d='M40.9748 12.6075C37.3384 12.6075 33.7836 13.6859 30.7601 15.7062C27.7365 17.7264 25.3799 20.598 23.9883 23.9576C22.5967 27.3172 22.2326 31.014 22.942 34.5806C23.6515 38.1471 25.4026 41.4232 27.9739 43.9945C30.5452 46.5659 33.8213 48.317 37.3879 49.0264C40.9544 49.7358 44.6512 49.3717 48.0109 47.9801C51.3705 46.5885 54.242 44.232 56.2623 41.2084C58.2826 38.1848 59.3609 34.63 59.3609 30.9936C59.3609 26.1173 57.4238 21.4408 53.9757 17.9927C50.5277 14.5446 45.8511 12.6075 40.9748 12.6075ZM40.9748 42.0253C38.793 42.0253 36.6601 41.3783 34.846 40.1661C33.0318 38.9539 31.6179 37.231 30.7829 35.2152C29.9479 33.1995 29.7295 30.9814 30.1551 28.8415C30.5808 26.7015 31.6315 24.7359 33.1743 23.1931C34.7171 21.6503 36.6827 20.5996 38.8227 20.1739C40.9626 19.7483 43.1807 19.9667 45.1964 20.8017C47.2122 21.6367 48.9351 23.0506 50.1473 24.8648C51.3595 26.6789 52.0065 28.8118 52.0065 30.9936C52.0065 33.9194 50.8442 36.7253 48.7754 38.7942C46.7065 40.863 43.9006 42.0253 40.9748 42.0253ZM74.0698 82.4746V78.7974C74.0698 71.9706 71.3578 65.4234 66.5305 60.5961C61.7033 55.7688 55.1561 53.0569 48.3292 53.0569H33.6204C26.7936 53.0569 20.2464 55.7688 15.4191 60.5961C10.5918 65.4234 7.87988 71.9706 7.87988 78.7974V82.4746H15.2343V78.7974C15.2343 73.9211 17.1714 69.2446 20.6195 65.7965C24.0675 62.3484 28.7441 60.4113 33.6204 60.4113H48.3292C53.2055 60.4113 57.8821 62.3484 61.3302 65.7965C64.7782 69.2446 66.7153 73.9211 66.7153 78.7974V82.4746H74.0698Z'
                        fill={color}
                    />
                </g>
            </g>
        </svg>
    );
}
