export interface ButtonProps {
    label: string;
    endIcon?: any;
    startIcon?: any;
    variant?: 'contained' | 'outlined';
    handleClick?: () => void;
    heading: string;
    size: 'small' | 'medium' | 'large';
}
