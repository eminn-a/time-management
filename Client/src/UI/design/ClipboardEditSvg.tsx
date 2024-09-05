import { SvgType } from './types';

export default function ClipboardEditSvg({ width = 24, height = 24, color = '#163851' }: SvgType) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g id='mage:edit-fill'>
                <path
                    id='Vector'
                    d='M16.698 21.9958H5.09804C4.68842 21.9975 4.28264 21.917 3.90473 21.7589C3.52683 21.6009 3.1845 21.3686 2.89804 21.0758C2.60902 20.7855 2.38061 20.4406 2.2261 20.0612C2.07159 19.6818 1.99407 19.2754 1.99804 18.8658V7.2758C1.99293 6.86809 2.07099 6.46361 2.22745 6.08707C2.38391 5.71053 2.61549 5.36984 2.90804 5.0858C3.19268 4.79721 3.53286 4.56929 3.90804 4.4158C4.2878 4.25582 4.69596 4.17419 5.10804 4.1758H9.54804C9.74695 4.1758 9.93772 4.25482 10.0784 4.39547C10.219 4.53613 10.298 4.72689 10.298 4.9258C10.298 5.12472 10.219 5.31548 10.0784 5.45614C9.93772 5.59679 9.74695 5.6758 9.54804 5.6758H5.10804C4.89295 5.68166 4.68022 5.72218 4.47804 5.7958C4.18338 5.92018 3.93213 6.12899 3.75595 6.39593C3.57978 6.66286 3.48656 6.97598 3.48804 7.2958V18.8858C3.48553 19.1007 3.5258 19.3139 3.60649 19.513C3.68718 19.7122 3.80668 19.8933 3.95804 20.0458C4.10937 20.196 4.28885 20.3148 4.48619 20.3954C4.68354 20.4761 4.89485 20.517 5.10804 20.5158H16.708C16.921 20.5158 17.131 20.4758 17.328 20.3958C17.5235 20.316 17.7005 20.1969 17.848 20.0458C18.0003 19.8992 18.1196 19.722 18.198 19.5258C18.2861 19.3276 18.3305 19.1127 18.328 18.8958V14.4558C18.328 14.2569 18.4071 14.0661 18.5477 13.9255C18.6884 13.7848 18.8791 13.7058 19.078 13.7058C19.2769 13.7058 19.4677 13.7848 19.6084 13.9255C19.749 14.0661 19.828 14.2569 19.828 14.4558V18.9258C19.8297 19.3354 19.7492 19.7412 19.5912 20.1191C19.4331 20.497 19.2008 20.8393 18.908 21.1258C18.6216 21.4147 18.282 21.6456 17.908 21.8058C17.521 21.9458 17.11 22.0108 16.698 21.9958Z'
                    fill='#163851'
                />
                <path
                    id='Vector_2'
                    d='M21.808 5.45576C21.7072 5.19766 21.55 4.96533 21.3479 4.77576L19.1979 2.62576C19.0084 2.42369 18.776 2.26653 18.5179 2.16576C18.131 2.00273 17.7042 1.95942 17.2924 2.04142C16.8806 2.12341 16.5029 2.32695 16.2079 2.62576L14.4979 4.33576V4.38576L6.75795 12.1158C6.36811 12.5098 6.14899 13.0415 6.14795 13.5958V15.7658C6.15058 16.3246 6.37373 16.8597 6.76886 17.2549C7.16399 17.65 7.69915 17.8731 8.25795 17.8758H10.4279C10.7035 17.8761 10.9763 17.8215 11.2305 17.715C11.4846 17.6085 11.7149 17.4524 11.9079 17.2558L19.648 9.51576L21.3679 7.79576C21.5699 7.60576 21.7279 7.37376 21.8279 7.11576C21.9424 6.85929 22.0015 6.5816 22.0015 6.30076C22.0015 6.01992 21.9424 5.74223 21.8279 5.48576L21.808 5.45576ZM20.4279 6.50576C20.3966 6.58191 20.3488 6.6502 20.2879 6.70576L19.068 7.92576L16.068 4.92576L17.2979 3.69576C17.4161 3.58149 17.5736 3.51704 17.738 3.51576C17.8172 3.51681 17.8954 3.53381 17.9679 3.56576C18.0439 3.59776 18.1129 3.64576 18.1679 3.70576L20.3279 5.85576C20.3826 5.91437 20.4266 5.98205 20.4579 6.05576C20.473 6.13168 20.473 6.20984 20.4579 6.28576C20.4617 6.36032 20.4515 6.43493 20.4279 6.50576Z'
                    fill={color}
                />
            </g>
        </svg>
    );
}