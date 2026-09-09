import { X } from "lucide-react";

const Modal = ({ open, onClose, children }) => {
    if (!open) return null;

    return (
        <div
            onClick={onClose}
            className="
                fixed
                inset-0
                z-[999]
                flex
                items-center
                justify-center
                bg-black/50
                overflow-y-auto
                overflow-x-hidden
                p-3
                sm:p-6
            "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative
                    w-full
                    max-w-[520px]
                    max-h-[calc(100dvh-1.5rem)]
                    overflow-y-auto
                    overflow-x-hidden
                    bg-white
                    px-5
                    py-8
                    sm:max-h-[calc(100dvh-3rem)]
                    sm:px-14
                    sm:py-12
                "
            >
                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-3
                        top-3
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#192B3C]
                        sm:right-6
                        sm:top-6
                    "
                >
                    <X size={18} />
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;