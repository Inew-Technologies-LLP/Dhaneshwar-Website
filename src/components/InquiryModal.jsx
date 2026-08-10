import { useState } from "react";

import Modal from "./Modal";
import projects from "../data/projects";
import { submitLead } from "../api/leads";

const initialFormData = {
    name: "",
    email: "",
    country: "India",
    city: "",
    phone: "",
    project: "",
    consent: false,
};

const InquiryModal = ({ open, onClose }) => {
    const [formData, setFormData] = useState(initialFormData);
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent) {
            return;
        }

        setStatus("submitting");

        try {
            await submitLead({
                type: "inquiry",
                name: formData.name,
                email: formData.email,
                country: formData.country,
                city: formData.city,
                phone: formData.phone,
                project: formData.project,
            });

            setStatus("success");
            setFormData(initialFormData);
        } catch (error) {
            console.error("Inquiry submission failed:", error);
            setStatus("error");
        }
    };

    const handleClose = () => {
        if (status === "submitting") {
            return;
        }

        setStatus("idle");
        onClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <h2 className="mb-14 text-center text-[36px] font-medium text-[#192B3C]">
                Request a call back
            </h2>

            {status === "success" ? (

                <div className="py-10 text-center">

                    <h3 className="text-[24px] font-medium text-[#192B3C]">
                        Thank you!
                    </h3>

                    <p className="mt-4 text-[16px] text-gray-600">
                        We've received your request and will get back to you
                        shortly.
                    </p>

                    <button
                        type="button"
                        onClick={handleClose}
                        className="
                            mt-8
                            h-[42px]
                            w-[120px]
                            bg-[#2C3148]
                            text-white
                        "
                    >
                        Close
                    </button>

                </div>

            ) : (

                <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >

                    {/* Name */}

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
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

                    {/* Email */}

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="E-mail ID"
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

                    {/* Country */}

                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="
                            w-full
                            border-b
                            border-gray-400
                            bg-white
                            pb-2
                            text-[15px]
                            text-[#192B3C]
                            outline-none
                        "
                    >
                        <option value="India">
                            India
                        </option>
                    </select>

                    {/* City */}

                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City"
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

                    {/* Project */}

                    <select
                        name="project"
                        value={formData.project}
                        onChange={handleChange}
                        required
                        className="
                            w-full
                            border-b
                            border-gray-400
                            bg-white
                            pb-2
                            text-[15px]
                            text-[#192B3C]
                            outline-none
                        "
                    >
                        <option value="">
                            Select Project
                        </option>

                        {projects.map((project) => (
                            <option
                                key={project.id}
                                value={project.name}
                            >
                                {project.name}
                            </option>
                        ))}
                    </select>

                    {/* Phone */}

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 Enter Mobile Number*"
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

                    {/* Consent */}

                    <label className="flex items-start gap-3 text-[13px] leading-5 text-gray-600">

                        <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                            className="mt-1 h-4 w-4"
                        />

                        <span>
                            By checking this box, you agree to our Privacy
                            Policy and consent to be contacted with relevant
                            updates.
                        </span>

                    </label>

                    {/* Error */}

                    {status === "error" && (
                        <p className="text-center text-[14px] text-red-600">
                            Something went wrong. Please try again.
                        </p>
                    )}

                    {/* Submit */}

                    <div className="flex justify-center pt-6">

                        <button
                            type="submit"
                            disabled={
                                status === "submitting" ||
                                !formData.consent
                            }
                            className="
                                h-[42px]
                                w-[120px]
                                bg-[#2C3148]
                                text-white
                                transition
                                hover:bg-[#23273A]
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