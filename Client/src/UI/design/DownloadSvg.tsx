import { SvgType } from './types';

export default function DownloadSvg({ width = 24, height = 24, color = 'white' }: SvgType) {
    return (
        <svg
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17M7 11L12 16M12 16L17 11M12 16V4'
                stroke={color}
                strokeWidth='3'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
}
