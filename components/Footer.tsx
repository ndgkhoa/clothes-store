import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <p>123 Main Street, Suite 100</p>
                    <p>City, State, ZIP</p>
                    <p>Email: contact@company.com</p>
                    <p>Phone: +1 234 567 890</p>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-3">
                        Important Links
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="/about" className="hover:underline">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="/services" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="hover:underline">
                                Contact
                            </a>
                        </li>
                        <li>
                            <a href="/privacy" className="hover:underline">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col">
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook
                                size={24}
                                className="hover:text-blue-500"
                            />
                        </a>
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram
                                size={24}
                                className="hover:text-pink-500"
                            />
                        </a>
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter
                                size={24}
                                className="hover:text-blue-400"
                            />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin
                                size={24}
                                className="hover:text-blue-700"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-center text-gray-500">
                <p>
                    © {new Date().getFullYear()} Clothes Store. All rights
                    reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
