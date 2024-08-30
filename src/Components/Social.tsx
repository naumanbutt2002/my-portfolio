import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import { link } from "fs";

const Social=()=>{
    const socialLinks=[{link:"https://github.com/naumanbutt2002", icon:IconBrandGithub}, {link:"https://www.linkedin.com/in/naumanbutt2002", icon:IconBrandLinkedin}, 
        {link:"https://www.instagram.com/naumanbutt2002", icon:IconBrandInstagram}, {link:"https://www.youtube.com/@naumanbutt2002", icon:IconBrandYoutube},
        {link:"https://www.leetcode.com/u/naumanbutt2002", icon:IconBrandLeetcode}
    ];
    const socialIcons=socialLinks.map((socialLink)=>{
        return <a href={`${socialLink.link}`} target="_blank"  className="font-mono text-lg  hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
        <socialLink.icon className="-rotate-90" size={30} />
    </a>
    })

    return <div className="flex text-textColor items-center gap-10 fixed bottom-40 -left-44 rotate-90">
        {socialIcons}
        <hr className="border-[2px] w-40 rounded-full  bg-textColor border-textColor"/>
    </div>
}
export default Social;