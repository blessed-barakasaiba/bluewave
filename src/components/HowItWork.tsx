import { ClipboardList, Gift, Handshake } from "lucide-react";

const HowItWork =()=>{
    const steps = [
        {
            id:1,
            name: 'Choose a Cause',
            description: 'Select from our various initiatives that resonate with you',
            icon: <ClipboardList className="h-8 w-8 text-amber-600" />,
        },
        {
            id: 2,
            name: 'Make a Donation',
            description: 'Contribute any amount you wish to support the cause',
            icon: <Handshake className="h-8 w-8 text-amber-600" />,
        },
        {
            id: 3,
            name: 'See the Impact',
            description: 'Receive updates on how your donation is making a difference',
            icon: <Gift className="h-8 w-8 text-amber-600" />,
        },


    ];

    return(
        <section className="bg-white py-16">
            <div className="max-w-7xl m-auto px-4">
                <div>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl text-gray-800 font-bold mb-3">How It Works</h2>
                        <p className="text-gray-600 max-w-3xl m-auto text-xl mb-4">Your support can change lives in just a few simple steps</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index)=>(

                            <div key={step.id} className="relative">

                                <div className="bg-amber-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full">
                                    <div className="flex items-center justify-center rounded-full h-16 w-16 bg-amber-100 mb-6 mx-auto">
                                        {step.icon}
                                    </div>
                                    <h2 className="text-gray-900 text-center font-bold text-xl mb-3">{step.name}</h2>
                                    <p className="text-gray-600 text-center">{step.description}</p>
                                </div>

                                {index < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2" >
                                         <div className="h-1 w-8 bg-amber-200"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWork;