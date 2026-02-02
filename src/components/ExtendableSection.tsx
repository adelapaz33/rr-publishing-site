import { useId, useState } from "react";

type ExpandableSectionProps = {
    title: string; //header of section
    children: ReactNode; // content inside section
    defaultOpen?: boolean; 
    className?: string;
}
;
function ExtendableSection({title, children, defaultOpen = false, className,}: ExpandableSectionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    const contentId = useId(); // links button to content for screen readers 

    return(
       <section className={className}>
        <button type="button" 
        aria-expanded={isOpen} 
        aria-controls={contentId} // tells screen readers which element this button controls 
        onClick={() => setIsOpen((v) => !v)}
        style={{
            display: "flex",
            alignItems: 'center',
            gap: 8,
            width: '100%',
            cursor: 'pointer',
            background: 'transparent',
            border: 'none',
            padding: 0,
        }}>
            <strong>{title}</strong>
            <span aria-hidden="true" style={{marginLeft: "auto"}}>{isOpen ? "▾" : "▸"}</span>
        </button>
        {isOpen && (
            <div id={contentId} // matches aria controls on button 
            style={{marginTop: 8}}>{children}</div> // children renders whatever is put inside ExtendableSection
        )}
       </section>
    );
}

export default ExtendableSection;