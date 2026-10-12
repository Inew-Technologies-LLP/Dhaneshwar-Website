import { useState } from "react";

import Modal from "./Modal";
import { submitLead } from "../api/leads";

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    message: "",
    consent: false,
};

const InquiryModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (status !== "idle") {
            setStatus("idle");
        }

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = formData.name.trim();
        const phone = formData.phone.trim();
        const email = formData.email.trim();
        const message = formData.message.trim();

        if (!name || !phone) {
            setStatus("error");
            setErrorMessage("Please fill in all required fields.");
            return;
        }

        if (!formData.consent) {
            setStatus("error");
            setErrorMessage("Please confirm that you have read and agree to the Privacy Policy.");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            await submitLead({
                type: "inquiry",
                name,
                phone,
                email: email || "Not Provided",
                message,
                project: "General Inquiry",
                city: "Pune",
            });

            setStatus("success");
            setFormData(initialFormData);
        } catch (error) {
            console.error("Inquiry submission failed:", error);
            setStatus("error");
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    const handleClose = () => {
        if (status === "submitting") {
            return;
        }

        setStatus("idle");
        setErrorMessage("");
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-[32px] md:text-[36px] font-medium text-[#192B3C]">
                Request a call back
            </h2>

            {status === "success" ? (
                <div className="py-8 sm:py-10 text-center">
                    <h3 className="text-xl sm:text-[24px] font-medium text-[#192B3C]">
                        Thank you!
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-[16px] text-gray-600">
                        We've received your request and will get back to you
                        shortly.
                    </p>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            mt-6 sm:mt-8
                            h-[42px]
                            w-[120px]
                            bg-[#2C3148]
                            text-white
                            transition-colors
                            hover:bg-[#192B3C]
                        "
                    >
                        Close
                    </button>
                </div>
            ) : (
                <form
                    onSubmit={handleSubmit}
                    className="space-y-5 sm:space-y-6"
                >
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name *"
                            required
                            className="
                                w-full
                                border-b
                                border-gray-400
                                pb-2
                                text-[15px]
                                text-[#192B3C]
                                outline-none
                                transition
                                focus:border-[#192B3C]
                            "
                        />
                    </div>

                    {/* Mobile Number */}
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Mobile Number *"
                            required
                            className="
                                w-full
                                border-b
                                border-gray-400
                                pb-2
                                text-[15px]
                                text-[#192B3C]
                                outline-none
                                transition
                                focus:border-[#192B3C]
                            "
                        />
                    </div>

                    {/* Email (Optional) */}
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email (Optional)"
                            className="
                                w-full
                                border-b
                                border-gray-400
                                pb-2
                                text-[15px]
                                text-[#192B3C]
                                outline-none
                                transition
                                focus:border-[#192B3C]
                            "
                        />
                    </div>

                    {/* Message (Optional) */}
                    <div>
                        <textarea
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Message (Optional)"
                            className="
                                w-full
                                border-b
                                border-gray-400
                                pb-2
                                text-[15px]
                                text-[#192B3C]
                                outline-none
                                transition
                                focus:border-[#192B3C]
                                resize-none
                            "
                        />
                    </div>

                    {/* Policy Read Checkbox */}
                    <div>
                        <label className="flex items-start gap-3 text-[13px] leading-5 text-gray-600 cursor-pointer select-none">
                            <input
                                type="checkbox"
                                name="consent"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                                className="peer sr-only"
                            />
                            <span
                                className="
                                    mt-0.5
                                    flex
                                    h-4
                                    w-4
                                    shrink-0
                                    items-center
                                    justify-center
                                    border
                                    border-[#192B3C]
                                    bg-white
                                    text-[11px]
                                    text-white
                                    transition
                                    peer-checked:bg-[#192B3C]
                                    peer-checked:after:content-['✓']
                                "
                            />
                            <span>
                                I have read and agree to the Privacy Policy and consent to being contacted regarding my inquiry.
                            </span>
                        </label>
                    </div>

                    {/* Error */}
                    {status === "error" && (
                        <p className="text-center text-[14px] text-red-600">
                            {errorMessage || "Something went wrong. Please try again."}
                        </p>
                    )}

                    {/* Submit */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            disabled={status === "submitting" || !formData.consent}
                            className="
                                h-[42px]
                                w-[130px]
                                bg-[#2C3148]
                                text-white
                                transition
                                hover:bg-[#192B3C]
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >
                            {status === "submitting"
                                ? "Sending..."
                                : "Submit"}
                        </button>
                    </div>
                </form>
            )}
        </Modal>
    );
};

export default InquiryModal;