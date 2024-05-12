import React, { useState } from "react";

export default function EncryptionBox() {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("rsa");
    const [numFields, setNumFields] = useState(2);

    const handleAlgorithmChange = (e) => {
        setSelectedAlgorithm(e.target.value);
        switch (e.target.value) {
            case "rsa":
                setNumFields(2);
                break;
            case "rsa-3":
                setNumFields(3);
                break;
            case "rsa-4":
                setNumFields(4);
                break;
            case "rsa-5":
                setNumFields(5);
                break;
            case "rsa-6":
                setNumFields(6);
                break;
            default:
                setNumFields(2);
                break;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    const renderInputFields = () => {
        const fields = [];
        for (let i = 0; i < numFields; i++) {
            fields.push(
                <input
                    key={i}
                    type="text"
                    className="w-[550px] h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                    placeholder={`Field ${i + 1}`}
                />
            );
            <input
                    key={i}
                    type="text"
                    className="w-full h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                    placeholder={`Field ${i + 1}`}
                />
        }
        return fields;
    };

    return (
        <div className="flex justify-center">
            <div className="bg-[#1A1A1A] w-[80rem] h-[40rem] px-4 rounded-lg my-10">
                <div className="flex justify-between mx-12">
                    <div className="flex flex-col w-[30rem] h-[30rem] my-10">
                        <h1 className="text-white text-[2rem] font-bold text-left  mt-6">Encryption</h1>
                        <textarea
                            className="w-[30rem] h-[10.5rem] bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none"
                            placeholder="Enter your text here..."
                        ></textarea>
                        <div className="flex justify-end">
                            <select
                                id="algo"
                                className="bg-[#717171] mt-2 h-[2.25rem] border w-[8rem] mr-4 border-gray-300 text-white font-medium text-[12px] rounded focus:ring-[#717171] focus:border-[#717171] block p-2.5 focus:outline-none"
                                value={selectedAlgorithm}
                                onChange={handleAlgorithmChange}
                            >
                                <option value="rsa">RSA</option>
                                <option value="rsa-3">RSA-3</option>
                                <option value="rsa-4">RSA-4</option>
                                <option value="rsa-5">RSA-5</option>
                                <option value="rsa-6">RSA-6</option>
                            </select>
                            <button className="bg-[#717171] px-4  text-white text-[12px] font-medium my-2 rounded-md h-[2.25rem] w-[6rem] ">
                                Encrypt
                            </button>
                        </div>
                        <div>
                        <h1 className="text-white text-xl font-bold text-left  mt-6">Encryption Text</h1>
                            <textarea
                                className="w-[30rem] h-[7.5rem] bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none mt-4"
                                placeholder="Encrypted text will appear here..."
                            ></textarea>
                        </div>
                    </div>    
                        <div className="mt-24 flex flex-col">
                        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
                            {renderInputFields()}
                            <input
                            type="text"
                            className="w-full h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                            placeholder="Enter your public key"
                        />
                            <button type="submit" className="bg-[#717171] px-4 text-white text-[12px] font-medium my-2 rounded-md h-[2.25rem] w-[6rem] ">
                                Submit
                            </button>
                        </form>
                        </div>
                    
                    <div>{/* Additional content */}</div>
                </div>
            </div>
        </div>
    );
}
