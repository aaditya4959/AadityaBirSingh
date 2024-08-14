import React from "react";
import image from "../../images/Me.jpg"
import LinkedInButton from  "./Button";
 



export default function Home(){
    return (
        <div className="flex flex-wrap flex-row justify-around items-center bg-gray-600 p-10">
            <div className="flex flex-col ">
                {/* <div className="text-3xl font-bold text-center text-yellow-500 my-10">--Hello</div> */}
                <div className="text-left text-white text-4xl flex flex-col space-y-4">I'm <span className="text-yellow-500">Aaditya Bir Singh</span><br/>
                    <div className="text-left text-gray-300 text-2xl">Full-Stack Developer</div>
                    <div className="text-left text-gray-300 text-xl">Hi there! My name is Aaditya Bir Singh,<br />
                         and I'm an aspiring <span className="text-yellow-400">software engineer</span> with a strong passion <br />
                         for <span className="text-yellow-400">machine learning</span> and <span className="text-yellow-400">blockchain</span> technology. <br />
                         Though I'm new to the industry, I'm eager to learn and grow. <br />
                         <LinkedInButton/>
                    </div>
                </div> 

            </div>
            <div className="h-[500px] w-[500px] rounded-full overflow-hidden">
                <img
                    src={image}
                    alt="profile picture"
                    className="h-full w-full object-cover"
                />
            </div>

            
        </div>
    )
}