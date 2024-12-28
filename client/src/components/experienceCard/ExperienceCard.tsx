import React from "react";

interface ExperienceCardProps {
    cardClass: string;
    companyLogo: any;
    companyLogoAlt: string;
    companyName: string;
    roleName: string;
    timeInRole: React.ReactElement<any>|string;
    children: React.ReactElement<any>[];
  }

const ExperienceCard: React.FC<ExperienceCardProps> = ({cardClass, companyLogo, companyLogoAlt, companyName, roleName, timeInRole, children}: ExperienceCardProps) => {

    // TODO: On images add mac like tab buttons https://uiverse.io/EmmaxPlay/itchy-bobcat-50

    return (
        <li className={cardClass + " card experience flex flex-col"}>
            <div className="company-pane h-40 lg:h-48 mb-1">
                <img src={companyLogo} alt={companyLogoAlt}/>
            </div>
            <h3 className="font-semibold text-lg tracking-wide">{companyName}</h3>
            <p className="uppercase text-sm max-w-48 text-slate-400">{roleName}</p>
            <div className="icon-container">
                {/* TODO: Make index of all icons and create reusable instances of them */}
                {children}
            </div>
            <p className="text-end mt-auto">{timeInRole}</p>
        </li>
    );
};

export default ExperienceCard;