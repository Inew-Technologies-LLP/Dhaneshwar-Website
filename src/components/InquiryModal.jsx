import Modal from "./Modal";

const InquiryModal = ({ open, onClose }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
        >
            <h2 className="mb-14 text-center text-[36px] font-medium text-[#192B3C]">
                Request a call back
            </h2>

            <form className="space-y-6">

                <input
                    placeholder="Name"
                    className="w-full border-b border-gray-500 pb-2 outline-none"
                />

                <input
                    placeholder="E-mail ID"
                    className="w-full border-b border-gray-500 pb-2 outline-none"
                />

                <select className="w-full border-b border-gray-500 pb-2 outline-none">

                    <option>India</option>

                </select>

                <select className="w-full border-b border-gray-500 pb-2 outline-none">

                    <option>Mumbai</option>

                </select>

                <input
                    placeholder="+91 Enter Mobile Number*"
                    className="w-full border-b border-gray-500 pb-2 outline-none"
                />

                <label className="flex items-start gap-3 text-[13px] text-gray-600">

                    <input
                        type="checkbox"
                        className="mt-1"
                    />

                    <span>
                        By checking this box, you agree to our Privacy Policy
                        and consent to be contacted with relevant updates.
                    </span>

                </label>

                <div className="flex justify-center pt-6">

                    <button
                        type="submit"
                        className="
                            h-[42px]
                            w-[120px]
                            bg-[#2C3148]
                            text-white
                        "
                    >
                        Submit
                    </button>

                </div>

            </form>

        </Modal>
    );
};

export default InquiryModal;