import * as React from 'react';


type DefaultButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type CloseIconProps = {
    onClose: () => void;
    svgClassName?: string;
    svgViewBox?: string;
    tailwind?: boolean;
} & DefaultButtonProps;

const TAILWIND_ICON_DEFAULT = "fill-current text-gray-700 w-6 h-6 cursor-pointer";

export const CloseIcon = ({onClose, svgClassName = '', svgViewBox = '0 0 18 18', ...props}: CloseIconProps) => {
    if (props.tailwind) {
        svgClassName += ' ' + TAILWIND_ICON_DEFAULT;
    }
    return (
        <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            {...props}
        >
            <svg
                className={svgClassName}
                xmlns="http://www.w3.org/2000/svg"
                viewBox={svgViewBox}
            >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
            </svg>
        </button>
    );
}