import { useState } from 'react'
import { FaPhoneFlip } from "react-icons/fa6";

const contactInfo = [
    { img: "/images/imo.webp", href: "imo://chat?phone=8801935679071" },
    { img: "/images/whatsapp.png", href: "https://wa.me/8801935679071" },
]

function ChatSupport() {

    const [isShow, setIsShow] = useState(false)

    return (
        <>
            {isShow &&
                <div className="fixed shadow px-2 py-1 border border-gray-300 rounded-xl bg-white bottom-35 w-16 right-5">
                    {contactInfo?.map(item => (
                        <a href={item.href} key={item?.img}>
                            <img src={item?.img} className="w-16 rounded mt-1 border border-gray-200 cursor-pointer h-16 object-contain" key={item?.img} alt="Whats app" />
                        </a>
                    ))}
                </div>}
            <ReachOutButton onClick={()=> setIsShow(p => !p)} className="fixed bottom-20 right-5" Icon={<FaPhoneFlip />} />
        </>
    )
}

export default ChatSupport;

function ReachOutButton({ className, Icon, onClick }) {
    return (
        <div onClick={onClick} className={`${className} cursor-pointer text-2xl text-white p-3 rounded-full bg-orange-400`}>
            {Icon}
        </div>
    )
}
