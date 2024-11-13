import React from "react";

interface ExperienceCardProps {
    cardClass: string;
    companyLogo: any;
    companyLogoAlt: string;
    companyName: string;
    roleName: string;
    leftRoleIn: React.ReactElement<any>|string;
    children: React.ReactElement<any>[];
  }

const ExperienceCard: React.FC<ExperienceCardProps> = ({cardClass, companyLogo, companyLogoAlt, companyName, roleName, leftRoleIn, children}: ExperienceCardProps) => {
    return (
        <li className={cardClass + " card experience flex flex-col"}>
            <div className="company-pane">
                <img src={companyLogo} alt={companyLogoAlt}/>
            </div>
            <h2>{companyName}</h2>
            <p className="uppercase text-sm max-w-48 text-slate-400">{roleName}</p>
            <div className="icon-container">
                {/* TODO: Make index of all icons and create reusable instances of them */}
                {children}
            </div>
            <p className="text-end mt-auto">{leftRoleIn}</p>
        </li>
    );
};

export default ExperienceCard;