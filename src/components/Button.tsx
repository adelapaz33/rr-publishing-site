import { tv, type VariantProps } from "tailwind-variants";

const buttonStyles = tv({
    base: 'font-semibold text-sm py-2 px-4 rounded-lg transition duration-150 ease-in-out',
    variants: {
        intent: {
            primary: 
  'bg-[#F4C430] text-[#1E3A8A] hover:bg-[#E94F37] hover:text-white',
secondary: 
  'bg-[#E94F37] text-white hover:bg-[#F4C430] hover:text-[#1E3A8A]',
outline: 
  'border border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white',  
            danger: 'bg-red-500 text-white hover:bg-red-600',
        },
        size: {
            sm: 'text-sm px-3 py-1',
            md: 'text-base px-4 py-3',
            lg: 'text-lg px-6 py-3',
        },
        isDisabled: {
            true: 'opacity-50 cursor-not-allowed',
        },
    },
    defaultVariants: {
        intent: 'primary',
        size: 'md',
    },
});

type ButtonProps = {
    children: React.ReactNode
    href?: string
    intent?: "primary" | "secondary" | "outline" | "danger" 
    size?: "sm" | "md" | "lg" 
    isDisabled?: boolean 
    onClick?: () => void
}

function Button({ 
    children, href, intent, size, isDisabled, onClick
}: ButtonProps) {
    const className = buttonStyles({intent, size, isDisabled}) 

    if(href) {
        return(
            <a href={href} className={className}>{children}</a>
        )
    }

    return(
        <button onClick={onClick} disabled={isDisabled} className={className}>{children}</button>
    )
}

export default Button;