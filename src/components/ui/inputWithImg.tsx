import "./styles/inputImg.css";

interface InputImgProps 
{
    IconComponent : React.ElementType;
    label: string;
    typeInput: string
}

const InputImg: React.FC<InputImgProps> = ({ IconComponent, label, typeInput }) => {
    return (
        <div>
            <label className="font-bold" id="label">{label}</label>
            <div id="input" className="flex">
                <IconComponent /> {/* Utilisez le composant d'icône comme cela */}
                <input id="email" type={typeInput} required />
            </div>
        </div>
    );
}

export default InputImg;