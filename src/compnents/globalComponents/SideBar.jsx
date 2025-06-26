import DynamicSettingsItems from "../clientCompnents/morePage/DynamicSettingsItems"
import BrandLink from "../globalComponents/BrandLink"
import { createGlobalState } from "react-use"
import SettingsOption from "./SettingsOption"
export const useSideBarToggle = createGlobalState(false)
import { MdContactPhone } from "react-icons/md";


const settingsItem = [
    { Icon: <MdContactPhone />, text: "যোগাযোগ", path: "/contact-us" },
]


export default function SideBar() {
    const [isOpen, setIsOpen] = useSideBarToggle()

    return (
        <>
            <div className={`w-[250px] px-4 pt-4 md:w-[300px] z-50 fixed transition-all duration-200 h-screen top-0 bg-slate-800
               ${isOpen ? "left-0" : " -translate-x-full"}`}>
                <BrandLink onClick={() => setIsOpen(p => !p)} />
                <DynamicSettingsItems />
                {settingsItem?.map(item => (
                    <SettingsOption
                        key={item.path}
                        Icon={item.Icon}
                        text={item.text}
                        path={item.path} />
                ))}
            </div>
            {/* overlay for hadnling out side click to close side bar */}
            <div
                onClick={() => setIsOpen(false)}
                className={`w-full z-10 h-screen transition-all duration-150 fixed top-0 bg-[#00000062] 
                ${isOpen ? "left-0" : "-left-full"}`}></div>
        </>
    )
}
