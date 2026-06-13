import { Award, Globe, Handshake, Users } from "lucide-react";


const StatsSection =()=>{
    const stats =[
        {id:1, name:'Experience', value: "10+ Years",icon: <Users className="text-red-600 h-8 w-8"/> },
        {id:2, name:'Customer', value: "500+",icon: <Handshake className="text-red-600 h-8 w-8"/> },
        // {id:3, name:'Countries', value: "25+",icon: <Globe className="text-red-600 h-8 w-8" /> },
        {id:4, name:'Awards', value: "15+",icon: <Award className="text-red-600 h-8 w-8"/> },
    ]
    return(
        <section className="bg-red-500 py-5 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {stats.map((content)=>(
                        <div key={content.id} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="bg-white p-4 rounded-full">
                                    {content.icon}
                                </div>
                            </div>
                            <p className="text-xl md:text-4xl font-bold mb-3">{content.value}</p>
                            <p className="text-lg">{content.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsSection;