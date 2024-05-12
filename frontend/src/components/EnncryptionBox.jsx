import React, { useState,useRef } from "react";
import axios from "axios";

export default function EncryptionBox() {
    const [selectedAlgorithm, setSelectedAlgorithm] = useState("rsa");
    const [numFields, setNumFields] = useState(2);
    const [publicKey,setPublicKey] = useState("");
    const [primeNumbers, setPrimeNumbers] = useState(Array.from({ length: 6 }, () => "")); // Initialize an array of length 6 with empty strings
    const [text, setText] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [isCopied2, setIsCopied2] = useState(false);
    const [privateKey, setPrivateKey] = useState("")
    const [cipherText, setCipherText] = useState("")
    const [modulus, setModulus] = useState("")
    const keyInputRef = useRef(null);
    const keyInputRef2 = useRef(null);
    const [result,setResult] = useState(false);

    const handleCopyClick = () => {
        const key = keyInputRef.current.value;
        navigator.clipboard.writeText(key);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset tooltip after 2 seconds
    };

    const handleCopyClick2 = () => {
        const key = keyInputRef2.current.value;
        navigator.clipboard.writeText(key);
        setIsCopied2(true);
        setTimeout(() => setIsCopied2(false), 2000); // Reset tooltip after 2 seconds
    };


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

    const handleTextChange = (e) => {
        setText(e.target.value);
        console.log(text);
    };

    const handlePublicKeyChange = (e) => {
        setPublicKey(e.target.value);
        console.log(publicKey);
    }

    const handleInputChange = (index, value) => {
        const newPrimeNumbers = [...primeNumbers];
        newPrimeNumbers[index] = value;
        setPrimeNumbers(newPrimeNumbers);
        console.log(primeNumbers);
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (selectedAlgorithm === "rsa") {
            //use axios to send the data to the backend and send plain text, first prime number, second prime number in the body
            try {
            const response = await axios.post('http://localhost:5000/RSA/encrypt', {
                "plainText":text.toString(),
                "publicKey": publicKey,
                "p": primeNumbers[0].toString(),
                "q": primeNumbers[1].toString(),
            });
            setResult(true)
            setPrivateKey(response.data.privateKey)
            setCipherText(response.data.cipherText)
            setModulus(response.data.modulus)
        } catch (error) {
            console.error('Error:', error);
        }
        

            
            
        } else if (selectedAlgorithm === "rsa-3") {
            try {
                const response = await axios.post('http://localhost:5000/RSA3/encrypt', {
                    "plainText":text.toString(),
                    "publicKey": publicKey,
                    "p": primeNumbers[0].toString(),
                    "q": primeNumbers[1].toString(),
                    "r": primeNumbers[2].toString(),
                });
                setResult(true)
                setPrivateKey(response.data.privateKey)
            setCipherText(response.data.cipherText)
            setModulus(response.data.modulus)
            } catch (error) {
                console.error('Error:', error);
            }

        } else if (selectedAlgorithm === "rsa-4") {

            try {
                const response = await axios.post('http://localhost:5000/RSA4/encrypt', {
                    "plainText":text.toString(),
                    "publicKey": publicKey,
                    "p": primeNumbers[0].toString(),
                    "q": primeNumbers[1].toString(),
                    "r": primeNumbers[2].toString(),
                    "s": primeNumbers[3].toString(),
                });
                setResult(true)
                setPrivateKey(response.data.privateKey)
            setCipherText(response.data.cipherText)
            setModulus(response.data.modulus)
            } catch (error) {
                console.error('Error:', error);
            }
            
        } else if (selectedAlgorithm === "rsa-5") {

            try {
                const response = await axios.post('http://localhost:5000/RSA3/encrypt', {
                    "plainText":text.toString(),
                    "publicKey": publicKey,
                    "p": primeNumbers[0].toString(),
                    "q": primeNumbers[1].toString(),
                    "r": primeNumbers[2].toString(),
                });
                setResult(true)
                setPrivateKey(response.data.privateKey)
            setCipherText(response.data.cipherText)
            setModulus(response.data.modulus)
            } catch (error) {
                console.error('Error:', error);
            }

            
        } else if (selectedAlgorithm === "rsa-6") {

            try {
                const response = await axios.post('http://localhost:5000/RSA/encrypt', {
                    "plainText":text.toString(),
                    "publicKey": publicKey,
                    "p": primeNumbers[0].toString(),
                    "q": primeNumbers[1].toString(),
                });
                setResult(true)
                setPrivateKey(response.data.privateKey)
            setCipherText(response.data.cipherText)
            setModulus(response.data.modulus)
            } catch (error) {
                console.error('Error:', error);
            }
            
        }
    };

    const renderInputFields = () => {
        const fields = [];
        for (let i = 0; i < numFields; i++) {
            fields.push(
                <input
                    key={i}
                    type="text"
                    className="w-[550px] h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                    placeholder={`Prime no.${i + 1}`}
                    value={primeNumbers[i]}
                    onChange={(e) => handleInputChange(i, e.target.value)}
                />
            );
        }
        return fields;
    };

    return (
        <div className="flex justify-center">
            <div className="bg-[#1A1A1A] w-[80rem] h-[45rem] px-4 rounded-lg my-10">
                        <h1 className="text-white text-[2rem] font-bold text-center  mt-6">Encryption</h1>
                <div className="flex justify-between mx-12">
                    <div className="flex flex-col w-[30rem] h-[30rem] my-10">
                        <textarea
                            className="w-[30rem] h-[14.5rem] bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none"
                            placeholder="Enter your text here..."
                            onChange={(e) =>{handleTextChange(e)}}
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
                        {result && <>
                        <div className="">
                        <h1 className="text-white text-xl font-bold text-left  mt-6">Cipher Text</h1>
                            <textarea
                            value={cipherText}
                                className="w-[30rem] h-[4.5rem] bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none mt-4"
                                placeholder="Encrypted text will appear here..."
                            ></textarea>
                                <div className="flex items-center w-full">
                                <h1 className="text-white text-lg font-semibold text-left mr-7 w-full pb-3 mt-6">Private Key</h1>
                                <input
                                    ref={keyInputRef}
                                    type="text"
                                    className="input input-bordered w-full bg-[#2A2A2A]  mt-4 pl-2 text-white py-2 rounded "
                                    value={privateKey}
                                    placeholder="Private Key"
                                    disabled
                                />
                                <button
                                    onClick={handleCopyClick}
                                    className="btn btn-square ml-2 mt-3 font-semibold py-4 px-2 "
                                >
                                    Copy
                                </button>
                                {isCopied && (
                                    <span className="tooltip absolute right-[50rem] font-semibold text-sm  ">Text copied</span>
                                )}
                                </div>

                                <div className="flex items-center w-full ">
                                <h1 className="text-white text-lg font-semibold text-left mr-[9.2rem] pb-3 mt-6">Modulus</h1>
                                <input
                                    ref={keyInputRef2}
                                    type="text"
                                    className="input input-bordered bg-[#2A2A2A] w-full mt-4 pl-2 text-white py-2 rounded "
                                    placeholder="Modulus"
                                    value={modulus}
                                    disabled
                                />
                                <button
                                    onClick={handleCopyClick2}
                                    className="btn btn-square ml-2 mt-3 font-semibold py-4 px-2 "
                                >
                                    Copy
                                </button>
                                {isCopied2 && (
                                    <span className="tooltip absolute right-[50rem] font-semibold text-sm ">Text copied</span>
                                )}
                                </div>
                        </div>
                        </>}
                    </div>    
                        <div className="mt-24 flex flex-col">
                        <form id="form" className="flex flex-col" onSubmit={handleSubmit}>
                            {renderInputFields()}

                            <input
                            onChange={(e)=>{handlePublicKeyChange(e)}}
                            type="text"
                            className="w-full h-10 bg-[#2A2A2A] text-white p-4 rounded-xl focus:outline-none my-2"
                            placeholder="Enter your public key"
                        />
                            <button onClick={handleSubmit} type="submit" className="bg-[#717171] px-4 text-white text-[12px] font-medium my-2 rounded-md h-[2.25rem] w-[6rem] ">
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
