'use client'
import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaTerminal } from 'react-icons/fa';

const Terminal = ({ onClose }) => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState([
        { type: 'info', content: 'Welcome to the interactive terminal v1.0.0' },
        { type: 'info', content: "Type 'help' to see available commands." },
    ]);
    const inputRef = useRef(null);
    const bottomRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [output]);

    const handleCommand = (cmd) => {
        const trimmedCmd = cmd.trim().toLowerCase();
        let newOutput = [...output, { type: 'command', content: `> ${cmd}` }];

        switch (trimmedCmd) {
            case 'help':
                newOutput.push({
                    type: 'response',
                    content: (
                        <div className="space-y-1">
                            <p>Available commands:</p>
                            <div className="grid grid-cols-[100px_1fr] gap-2">
                                <span className="text-yellow-400">about</span>
                                <span>Values driven software engineer based in Delhi.</span>
                                <span className="text-yellow-400">skills</span>
                                <span>List technical skills and technologies.</span>
                                <span className="text-yellow-400">contact</span>
                                <span>Get contact information.</span>
                                <span className="text-yellow-400">clear</span>
                                <span>Clear the terminal history.</span>
                                <span className="text-yellow-400">exit</span>
                                <span>Close the terminal and return to GUI.</span>
                            </div>
                        </div>
                    ),
                });
                break;
            case 'about':
                newOutput.push({
                    type: 'response',
                    content: "I'm a Software Engineer from Delhi, India. I thrive on challenges and love building cool things. Passionate about coding, gaming, and innovative technologies."
                });
                break;
            case 'skills':
                newOutput.push({
                    type: 'response',
                    content: "JavaScript, React, Next.js, Node.js, HTML5, CSS3, Tailwind CSS, Git, and more..."
                });
                break;
            case 'contact':
                newOutput.push({
                    type: 'response',
                    content: "You can find me on GitHub, LinkedIn, or email me directly."
                });
                break;
            case 'clear':
                newOutput = [];
                break;
            case 'exit':
                onClose();
                return;
            default:
                newOutput.push({ type: 'error', content: `Command not found: ${trimmedCmd}. Type 'help' for assistance.` });
        }

        setOutput(newOutput);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        handleCommand(input);
        setInput('');
    };

    return (
        <div className="w-full max-w-4xl mx-auto h-[600px] bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden flex flex-col font-mono text-sm md:text-base border border-gray-700 my-10 relative z-50">
            {/* Header */}
            <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-gray-700">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 cursor-pointer" onClick={onClose}></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs flex items-center gap-2">
                    <FaTerminal /> visitor@portfolio: ~
                </div>
                <div></div>
            </div>

            {/* Terminal Body */}
            <div
                className="flex-1 p-4 overflow-y-auto w-full"
                onClick={() => inputRef.current?.focus()}
            >
                <div className="space-y-2">
                    {output.map((line, index) => (
                        <div key={index} className={`${line.type === 'command' ? 'text-gray-400 mt-4' : line.type === 'error' ? 'text-red-400' : 'text-green-400'}`}>
                            {line.type === 'command' ? line.content : line.content}
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                <form onSubmit={handleSubmit} className="flex items-center mt-2 text-green-400 w-full">
                    <span className="mr-2">{'>'}</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="bg-transparent border-none outline-none flex-1 w-full text-green-400 placeholder-green-700"
                        autoFocus
                        spellCheck={false}
                        autoComplete="off"
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
