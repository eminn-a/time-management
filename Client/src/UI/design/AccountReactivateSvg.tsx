import { SvgType } from './types';

export default function AccountReactivateSvg({ width = 33, height = 33, color = '#008CFF' }: SvgType) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 33 33'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g id='mdi:account-reactivate'>
                <path
                    id='Vector'
                    d='M29.5625 12.375H22.6875L25.245 9.8175C24.2181 8.47314 22.8947 7.38408 21.3778 6.63518C19.861 5.88629 18.1917 5.4978 16.5 5.5C10.4225 5.5 5.5 10.4225 5.5 16.5C5.5 19.0163 6.33875 21.3125 7.755 23.1688C9.4325 21.2438 12.5813 19.9375 16.5 19.9375C20.4187 19.9375 23.5813 21.2438 25.245 23.1688C26.7115 21.2553 27.5043 18.9108 27.5 16.5H30.25C30.25 24.0625 24.0625 30.25 16.5 30.25C8.9375 30.25 2.75 24.0625 2.75 16.5C2.75 8.9375 8.9375 2.75 16.5 2.75C20.8175 2.75 24.6813 4.74375 27.1975 7.865L29.5625 5.5V12.375ZM16.5 9.625C18.7825 9.625 20.625 11.4675 20.625 13.75C20.625 16.0325 18.7825 17.875 16.5 17.875C14.2175 17.875 12.375 16.0325 12.375 13.75C12.375 11.4675 14.2175 9.625 16.5 9.625Z'
                    fill={color}
                />
            </g>
        </svg>
    );
}