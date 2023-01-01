import React from "react";
import { DefaultButton, IconButton } from "../../core/button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import WorkIcon from "@mui/icons-material/Work";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
const CertificatPuissant = () => {
    return (
        <div className="CertificatPuissant">
            <div className="Text">
                <div className="Title">
                    <h3>Certificat Puissant</h3>
                    <h2>
                        Un taux d&apos;insertion élevé dans le monde
                        professionnel
                    </h2>
                </div>
                <p>
                    L&apos;un des facteurs de succés de notre établissement est
                    la facilité d&apos;insertion des lauréats dans
                    l&apos;entreprise. Ceci est rendu possible à travers:
                </p>
                <DefaultButton
                    bgColor="Green"
                    startIcon={<ModelTrainingIcon />}
                >
                    Formation altérnée
                </DefaultButton>
                <DefaultButton bgColor="Green" startIcon={<WorkIcon />}>
                    Stage de fin d&apos;études
                </DefaultButton>
                <DefaultButton bgColor="Green" startIcon={<ApartmentIcon />}>
                    Partenariats avec les professionnels
                </DefaultButton>
            </div>
            <div className="ImageContainer">
                <Image
                    alt=""
                    src="/assets/img/Table.png"
                    layout="fill"
                    className="Image"
                />
            </div>
        </div>
    );
};

export default CertificatPuissant;
