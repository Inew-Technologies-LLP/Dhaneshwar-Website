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
                p-6
            "
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="
                    relative
                    w-full
                    max-w-[520px]
                    bg-white
                    px-14
                    py-12
                "
            >
                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-6
                        top-6
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#192B3C]
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