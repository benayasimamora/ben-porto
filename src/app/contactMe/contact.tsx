"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import React, { useState, useCallback } from 'react';

interface FormState {
    name: string;
    email: string;
    message: string;
}

export default function ContactMe() {

    const [formState, setFormState] = useState<FormState>({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({ ...prevState, [name]: value }));
    }, []);

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        formData.append("access_key", "2c22fbd6-41e7-4616-a6f0-37863f8d1053");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await res.json();

            if (data.success) {
                alert('your email already arrived at ben, lets go');
                setFormState({ name: '', email: '', message: '' }); // Reset form
            } else {
                alert('failed to send the email to ben, try again');
            }
        } catch (error) {
            console.error("an error occurred:", error);
            alert('failed to send the email to ben, try again');
        }
    }, []);

    return (
        <div id="contactMe" className="scroll-smooth p-6 pl-14 pr-14 pt-32 pb-28 bg-black font-family text-white">
            <hr className="border-gray-500 pb-24" />

            <div className="flex flex-row">
                <div className="pl-5 flex-1/7 mr-10">
                    <img className="w-40 h-auto" src="/ben.png" alt="benaya logo" />
                    <h1 className="pt-2 font-monserrat font-light text-sm">
                        work with heart <br />serve with excellence
                    </h1>
                </div>

                <div className="flex-1/7 pb-4">
                    <h1 className="text-xl font-semibold pb-4">look at</h1>
                    <div>
                        <Link href="/ButtonSection/aboutben">
                            <p className="text-base">ben's profile</p>
                        </Link>
                    </div>
                </div>

                <div className="flex-1/7">
                    <h1 className="text-xl font-semibold pb-4">find ben at</h1>
                    {/* github */}
                    <div className="pt-3 flex items-center gap-2">
                        <FaGithub />
                        <a
                            href="https://github.com/benayasimamora"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium">
                            ben github
                        </a>
                    </div>
                    {/* instagram */}
                    <div className="pt-3 flex items-center gap-2">
                        <FaInstagram />
                        <a
                            href="https://www.instagram.com/benayajosuaa?igsh=dnhhZXQ2aTRhN2hh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium">
                            ben instagram
                        </a>
                    </div>
                    {/* linkedin */}
                    <div className="pt-3 flex items-center gap-2">
                        <FaLinkedin />
                        <a
                            href="https://www.linkedin.com/in/benaya-simamora-8041702ab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium">
                            ben linkedIn
                        </a>
                    </div>
                </div>

                <div className="flex-4/7">
                    <h1 className="font-semibold text-lg pb-4 pl-2">have any idea?</h1>

                    <div className="bg-[#111111] rounded-xl p-10">
                        <form onSubmit={handleSubmit} className="flex flex-col">
                            <div className="pb-4">
                                <label htmlFor="name" className="text-bs font-medium text-white">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="mt-3 block w-full rounded-md border-white/50 border-1 p-2"
                                    required />
                            </div>
                            <div className="pb-4">
                                <label htmlFor="email" className="text-bs font-medium text-white">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="mt-3 block w-full rounded-md border-white/50 border-1 p-2"
                                    required />
                            </div>
                            <div>
                                <label htmlFor="message" className="text-bs font-medium text-white">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="mt-3 block w-full rounded-md border-white/50 border-1 p-2"
                                    required />
                            </div>
                            <div className="pt-5">
                                <button
                                    type="submit"
                                    className="inline-flex
                                            p-2
                                            items-center
                                            text-sm
                                            font-medium
                                            border-1
                                            hover:border-white
                                            hover:bg-white
                                            hover:text-black
                                            rounded-md
                                            hover:scale-108
                                            border-white/50
                                            duration-350
                                            text-white">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}