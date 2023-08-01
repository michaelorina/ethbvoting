import React from 'react';
 
//importing typewriter-effect
import Typewriter from "typewriter-effect";
 
function TypeWriter() {
    return (
    <div>
        <div className="text-white font-mono hover:font-serif text-9xl">
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("We Welcome You...")
                        .pauseFor(1000)
                        .start();
                }}
            />
        </div>
        <div className="text-white font-mono hover:font-serif text-9xl">
            <Typewriter
 
                onInit={(typewriter) => {
                typewriter
                    .pauseFor(2500)
                    .typeString("To the Kenya Airways Shareholder's...")
                    .start();
                 }}
                />
        </div>
        <div className="text-white font-mono hover:font-serif text-9xl">
            <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(7500)
                        .typeString("Block Chain Voting Platform!!")
                        .start();
                }}
            />
        </div>
    </div>
    );
}
 
export default TypeWriter;