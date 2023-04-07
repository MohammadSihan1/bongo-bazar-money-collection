import React from 'react';

const Payment = () => {
    return (
        <>
        <header>
        <h1 className="text-5xl text-center mt-6">Let's Pay some 
             <span className="font-semibold text-violet-600"> Moooooooney</span>!!!
        </h1>
    </header>
    <main>
        <section className="mt-12 flex justify-evenly items-center gap-10">
            
                <div className="bg-green-400 p-8 rounded-xl">
                    <h4 className="text-2xl">Deposit</h4>
                    <h2 className="text-5xl">$<span id="deposit-total">00</span></h2>
                    <input id="deposit-field" className="w-9/12  mb-2 px-3 text-gray-950" type="text" name=""
                        placeholder="$ Amount you want to deposit"></input>
                </div>
                <div className="bg-violet-400 p-8 rounded-xl">
                    <h4 className="text-2xl">Balance</h4>
                    <h2 className="text-5xl">$<span id="balance-total">1240</span></h2>
                </div>
            
            <div className=" w-9/12 mx-auto">
                <div className="bg-fuchsia-400 p-8 rounded-xl">
                    <h4 className="text-2xl mb-4  text-white">Please Deposit</h4>
                    
                    <button id="btn-deposit"
                        className="bg-amber-600 hover:bg-sky-700 px-8 py-2 text-white font-medium rounded-lg">Deposit</button>
                </div>
            </div>
        </section>
    </main>
        </>
        
    );
};

export default Payment;