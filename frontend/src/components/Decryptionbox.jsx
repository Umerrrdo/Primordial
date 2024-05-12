import React, { useState } from "react";

export default function EncryptionBox() {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("rsa");
    const [modulos, setModulos] = useState("");
    const [privateKey, setPrivateKey] = useState("");
    const [cipherText, setCipherText] = useState("");

    const handleAlgorithmChange = (e) => {
        setSelectedAlgorithm(e.target.value);
    }
    
    const handleModulosChange = (e) => {
        setModulos(e.target.value);
    }

    const handlePrivateKeyChange = (e) => {
        setPrivateKey(e.target.value);
    }

    const handleCipherTextChange = (e) => {
        setCipherText(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        
    };


    return (
        <div className="flex justify-center">
            <div className="bg-[#1A1A1A] w-[80rem] h-[40rem] px-4 rounded-lg my-10 relative">
                <div className="flex justify-between mx-12 my-0">
                    <div className="flex flex-col w-[30rem] h-[30rem] my-10">
                        <h1 className="text-white text-[2rem] font-bold text-left  mt-6">Decryption</h1>
                        <textarea
                            className="w-[30rem] h-[10.5rem] bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none"
                            placeholder="Enter your cipher text here..."
                            value={cipherText}
                            onChange={handleCipherTextChange}
                        ></textarea>
                        <div className="flex justify-end">
                            <select
                                id="algo"
                                className="bg-[#717171] mt-2 h-[2.25rem] border w-[8rem] mr-4 border-gray-300 text-white font-medium text-[12px] rounded focus:ring-[#717171] focus:border-[#717171] block p-2.5 focus:outline-none"
                                value={selectedAlgorithm}
                                onChange={handleAlgorithmChange}
                            >
                                <option select value="rsa">RSA</option>
                                <option value="rsa-3">RSA-3</option>
                                <option value="rsa-4">RSA-4</option>
                                <option value="rsa-5">RSA-5</option>
                                <option value="rsa-6">RSA-6</option>
                            </select>
                            <button className="bg-[#717171] px-4  text-white text-[12px] font-medium my-2 rounded-md h-[2.25rem] w-[6rem] ">
                                Decrypt
                            </button>
                        </div>
                    
                    </div>    
                        <div className="mt-24 flex flex-col">
                        <form id="form" className="flex flex-col w-[550px]" onSubmit={handleSubmit}>
                            <input
                            type="text"
                            className="w-full h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                            placeholder="Enter modulos"
                            value={modulos}
                            onChange={handleModulosChange}
                        />
                            <input
                            type="text"
                            className="w-full h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                            placeholder="Enter your private key"
                            value={privateKey}
                            onChange={handlePrivateKeyChange}
                        />
                            <button type="submit" className="bg-[#717171] px-4 text-white text-[12px] font-medium my-2 rounded-md h-[2.25rem] w-[6rem] ">
                                Submit
                            </button>
                        </form>
                        </div>
                    
                    
                </div>
                    <div className="absolute bottom-[3rem] left-[26rem]">
                        <h1 className="text-white text-xl font-bold text-center mt-6">Decrypted Text</h1>
                            <textarea
                                className="w-[30rem] h-[7.5rem] bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none mt-4"
                                placeholder="Decrypted text will appear here..."
                            ></textarea>
                        </div>
            </div>
            
        </div>
    );
}
